export const SET_ORDERS = 'SET_ORDERS'
export const ADD_ORDER = 'ADD_ORDER'
export const UPDATE_ORDER = 'UPDATE_ORDER'
export const REMOVE_ORDER = 'REMOVE_ORDER'
export const SET_FILTER_BY = 'SET_FILTER_BY'
export const UNDO_CHANGES = 'UNDO_CHANGES'
export const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
    orders: null,
    filterBy: {},
}

export function orederReducer(state =  initialState, action = {}){

    switch (action.type) {
        case SET_ORDERS:
            return {
                ...state,
                orders: action.orders
            }
        case ADD_ORDER:
            return {
                ...state,
                orders: [...state.orders, action.order],
                lastGigs: [...state.gigs]
            }
        case UPDATE_ORDER:
            return {
                ...state,
                orders: state.orders.map(order => order.id === action.order.id ? action.order : order)
            }
        case REMOVE_ORDER:
            return {
                ...state,
                orders: state.orders.filter(order => order.id !== action.orderId),
                lastOrders: [...state.orders]
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