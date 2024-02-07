import { storageService } from './async-storage.service.js'
import Orders from '../data/Orders.json'
export const orderService = {
    query,
    save,
    remove,
    getById,
    createOrder,
    getDefaultFilter
}

const STORAGE_KEY = 'orders'

async function query(filterBy) {
    let orders = Orders
    if (filterBy) {
            let { minBatteryStatus, model = '', type = '' } = filterBy
            minBatteryStatus = minBatteryStatus || 0
            const regexModelTerm = new RegExp(model, 'i')
            orders = orders.filter(order =>
                regexModelTerm.test(order.model) &&
                order.batteryStatus > minBatteryStatus &&
            (!type || type === order.type)
        )
    }
    return orders
}

function getById(id) {
    return storageService.get(STORAGE_KEY, id)
}

function remove(id) {
    return storageService.remove(STORAGE_KEY, id)
}

function save(orderToSave) {

    if (orderToSave.id) {
        return storageService.put(STORAGE_KEY, orderToSave)
    } else {
        orderToSave.isOn = false
        return storageService.post(STORAGE_KEY, orderToSave)
    }
    

}

function createOrder(title = '', price = '', owner = {}, daysToMake = '', description = '', imgUrl = '',
    tags = [], likedByUsers = []) {
    return {
        title, price, owner, daysToMake, description, imgUrl,
        tags, likedByUsers
    }
}

function getDefaultFilter() {
    return {
        tags: []
    }
}

