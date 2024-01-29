import { gigService } from "../../services/gig.service";
import { ADD_GIG, REMOVE_GIG, SET_FILTER_BY, SET_IS_LOADING, SET_GIGS, UNDO_CHANGES, UPDATE_GIG, GET_GIGS_COUNT } from "../reducers/gig.reducer";
import { store } from "../store";


export async function loadGigs() {

    const filterBy = store.getState().gigModule.filterBy
    try {
        const gigs = await gigService.query(filterBy)
        store.dispatch({ type: SET_GIGS, gigs })
    } catch (err) {
        console.log('Had issues loading gigs', err);
        throw err
    } finally {
        // store.dispatch({ type: 'SET_IS_LOADING', isLoading: false })
    }

}

export async function removeGig(gigId) {
    store.dispatch({ type: SET_IS_LOADING, isLoading: true })
    try {
        await gigService.remove(gigId)
        store.dispatch({ type: REMOVE_GIG, gigId })
    } catch (err) {
        console.log('Had issues Removing gig', err);
        throw err
    } finally {
        store.dispatch({ type: SET_IS_LOADING, isLoading: false })
    }
}

export async function removeGigOptimistic(gigId) {

    try {
        store.dispatch({ type: REMOVE_GIG, gigId })
        await gigService.remove(gigId)
    } catch (err) {
        store.dispatch({ type: UNDO_CHANGES })
        console.log('Had issues Removing gig', err);
        throw err
    }
}

export async function saveGig(gigToSave) {
    store.dispatch({ type: SET_IS_LOADING, isLoading: true })
    const type = gigToSave.id ? UPDATE_GIG : ADD_GIG
    try {
        const savedGig = await gigService.save(gigToSave)
        store.dispatch({ type, gig: savedGig })
    } catch (err) {
        console.log('Had issues saving gig', err);
        throw err
    } finally {
        store.dispatch({ type: SET_IS_LOADING, isLoading: false })
    }
}

export function setFilterBy(filterBy) {
    store.dispatch({ type: SET_FILTER_BY, filterBy })
}


export function setIsLoading(isLoading) {
    store.dispatch({ type: 'SET_IS_LOADING', isLoading })
}

export function getGigsCount() {
    store.dispatch({ type: GET_GIGS_COUNT });
    const gigsCount = store.getState().gigModule.gigs.length;
    return gigsCount;
}