export const isLocalStorageAvailable = () => (typeof (Storage) !== "undefined") ? true : false

export const getItemFromLocalStorage = key => {
    let data = [];
    if (isLocalStorageAvailable) {
        (key in localStorage)
            ?
            data = JSON.parse(localStorage.getItem(key))
            :
            setItemInLocalStorage(key, data);
    }
    else
        alert("Browser doesn't support local storage");

    return data;
}

export const setItemInLocalStorage = (key, data) => {
    (isLocalStorageAvailable)
        ?
        localStorage.setItem(key, JSON.stringify(data))
        :
        alert("Browser doesn't support local storage");
}

export const addData = (oldData, key, data) => {
    const newData = [...oldData, data]
    setItemInLocalStorage(key, newData)
    return newData
}

export const editData = (oldData, key, data) => {
    let newData = oldData
    newData.splice(data.id, 1, data)
    setItemInLocalStorage(key, newData)
}
export const deleteData = (oldData, key, data) => {
    let newData = oldData
    var index = newData.indexOf(data)
    newData.splice(index, 1)
    if (key == 'authors') {
       deleteBooks('author',data.name)
    }
    else if (key == 'publishers') {
        deleteBooks('publisher',data.name)
    }
    setItemInLocalStorage(key, newData)
}
export const alreadyExists = (data, name, id) => {
    return data.filter((item, index) => item.name === name && index !== id).length;
}
export const deleteBooks = (key, name) => {
    const data = getItemFromLocalStorage('books')
    const newData = data.filter(item => item[key] !== name)
    setItemInLocalStorage("books", newData)
}