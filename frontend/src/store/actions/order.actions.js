import { store } from "../store";
import { orderService } from "../../services/order.service";
import {SET_ORDERS} from '../reducers/order.reducer'

export async function loadOrders() {
    try {
        const orders = await orderService.query()
        store.dispatch({ type: SET_ORDERS, orders })
    }catch (err) {
            console.log('Had issues loading gigs', err);
            throw err
    }
}