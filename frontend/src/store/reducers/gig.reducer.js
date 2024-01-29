import { gigService } from "../../services/gig.service";

export const SET_GIGS = 'SET_GIGS'
export const ADD_GIG = 'ADD_GIG'
export const UPDATE_GIG = 'UPDATE_GIG'
export const REMOVE_GIG = 'REMOVE_GIG'
export const SET_FILTER_BY = 'SET_FILTER_BY'
export const UNDO_CHANGES = 'UNDO_CHANGES'
export const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
    gigs: null,
    filterBy: {},
    isLoading: false,
    lastGigs: []
}

export function gigReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_GIGS:
            return {
                ...state,
                gigs: action.gigs
            }
        case ADD_GIG:
            return {
                ...state,
                gigs: [...state.gigs, action.gig],
                lastGigs: [...state.gigs]
            }
        case UPDATE_GIG:
            return {
                ...state,
                gigs: state.gigs.map(gig => gig.id === action.gig.id ? action.gig : gig)
            }
        case REMOVE_GIG:
            return {
                ...state,
                gigs: state.gigs.filter(gig => gig.id !== action.gigId),
                lastGigs: [...state.gigs]
            }
        case SET_FILTER_BY:
            return {
                ...state,
                filterBy: { ...action.filterBy }
            }
        case 'SET_IS_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        case UNDO_CHANGES:
            return {
                ...state,
                gigs: [...state.lastGigs]
            }

        default:
            return state;
    }
}