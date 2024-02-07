import { useSelector } from "react-redux"
import {loadOrders} from '../store/actions/order.actions'
import { useEffect } from "react";


export function Orders(){
    const orders = useSelector((storeState) => storeState.orderModule.orders)

    useEffect(() => {
        loadOrders()
    },[])

    if (!orders) return <>looding</>

    return <section>
        {orders[0]._id}
    </section>
}