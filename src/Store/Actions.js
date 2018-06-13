export const ProductsFetched = (Products) => ({
    type: 'FETCH_PRODUCTS_SUCCESS',
    Products
});
export const EditOpen = () =>({
    type: 'EDIT_OPEN'
})
export const EditClose =() => ({
    type: 'EDIT_CLOSE'
})
export const ChangeSuppolier =( name, text)=>({
    type:  'CHANGE_SUPPOLIER',
    text,
    name
})
export const ChangeProductValue =( name, text)=>({
    type:  'CHANGE_PRODUCT_VALUE',
    text,
    name
})






export const deleteProduct = (id) => ({
    type: 'DELETE_PRODUCT',
    id
});
export const AddProduct = (newProduct) => ({
    type: 'ADD_PRODUCT',
    newProduct
});
export const updateSearchValue = (e) => ({
    type: 'UPDATE_SEARCH_VALUE',
    text: e.target.value
});
export const DeliveryFetched = (Data) => ({
    type: 'FETCH_DELIVERY_SUCCESS',
    Data
});
export const AddDelivery = (Delivery) => ({
    type: 'ADD_DELIVERY',
    Delivery
})
export const handleInputChange = (e) => ({
    type: 'HANDLE_INPUT_CHANGE',
    text: e.target.value
})