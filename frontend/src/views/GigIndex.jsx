import { useEffect } from "react"

import { GigList } from "../cmps/GigList";

import { gigService } from "../services/gig.service";
// import { GigFilter } from './../cmps/GigFilter';
import { Link, Outlet, useSearchParams } from "react-router-dom";
// import { GigFilterType } from "../cmps/GigFilterType";
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service";
import { useSelector } from "react-redux";
import { loadGigs, removeGig, removeGigOptimistic, saveGig, setFilterBy } from "../store/actions/gig.actions";

export function GigIndex() {
    const [searchParams, setSearchParams] = useSearchParams()
    const gigs = useSelector(storeState => storeState.gigModule.gigs)
    const isLoading = useSelector(storeState => storeState.gigModule.isLoading)
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy)

    useEffect(() => {
        setFilterBy(gigService.getFilterFromParams(searchParams))
    }, [])

    useEffect(() => {
        // Sanitize filterBy
        loadGigs()
        setSearchParams(filterBy)
    }, [filterBy])

    function onSetFilter(fieldsToUpdate) {
        fieldsToUpdate = { ...filterBy, ...fieldsToUpdate }
        setFilterBy(fieldsToUpdate)
    }

    async function onRemoveGig(gigId) {
        try {
            // await removeGigOptimistic(gigId)
            await removeGig(gigId)
            showSuccessMsg('Gig removed successfully')
        } catch (err) {
            console.log('Had issues Removing gig', err);
            showErrorMsg('Could not remove gig')
        }
    }

    async function onSaveGig(gigToSave) {
        try {
            saveGig(gigToSave)
        } catch (err) {
            console.log('Had issues saving gig', err);
        }
    }

    if (!gigs || isLoading) return <div>Loading..</div>
    console.log("gigs in GigIndex: ", gigs);
    const { type, model, minBatteryStatus } = filterBy
    return <section className="gig-index">
        {/* <GigFilter onSetFilter={onSetFilter} filterBy={{ model, minBatteryStatus }} /> */}
        {/* <GigFilterType onSetFilter={onSetFilter} filterBy={{ type }} /> */}
        <Link to="/gig/edit"><button>Add Gig</button></Link>
        <GigList gigs={gigs} onRemove={onRemoveGig} />
        <Outlet context={{ onSaveGig }} />
    </section>

}
