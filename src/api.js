const BASE_URL = 'https://thinkful-list-api.herokuapp.com/samuel-meyers/';

function getItems() {
    return fetch(BASE_URL + 'items');
}

function createItem(name) {
    let newItem = JSON.stringify({
       name 
    });
    return fetch(BASE_URL + 'items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: newItem
    });
}

function updateItem(id, keys) {
    let updateData = JSON.stringify(keys);
    return fetch(`${BASE_URL}items/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: updateData
    });
}

function deleteItem(id) {
    return fetch(`${BASE_URL}items/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    });
}

export default {
    getItems,
    createItem,
    updateItem,
    deleteItem
};