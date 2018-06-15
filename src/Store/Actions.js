export const ProductsFetched = (Products) => ({
    type: 'FETCH_PRODUCTS_SUCCESS',
    Products
});
export const EditOpen = () =>({
    type: 'EDIT_OPEN'
});
export const EditClose =() => ({
    type: 'EDIT_CLOSE'
});
export const ChangeSuppolier =( name, text)=>({
    type:  'CHANGE_SUPPOLIER',
    text,
    name
});
export const ChangeDeliveryInfo =( name, text)=>({
    type:  'CHANGE_DELIVERY_INFO',
    text,
    name
});
export const ChangeProductValue =(name, text)=>({
    type:  'CHANGE_PRODUCT_VALUE',
    text,
    name
});
export const DeliveryFetched = (Data) => ({
    type: 'FETCH_DELIVERY_SUCCESS',
    Data
});
export const RemoveProduct = (id) => ({
    type: 'REMOVE_PRODUCT',
    id
});
export const EditProduct = (id) => ({
    type: 'EDIT_PRODUCT',
    id
});
export const AddProduct = () => ({
    type: 'ADD_PRODUCT',
});
export const EditDelivery = (id) => ({
    type: 'EDIT_DELIVERY',
   id
});


export const updateSearchValue = (e) => ({
    type: 'UPDATE_SEARCH_VALUE',
    text: e.target.value
});
export const AddDelivery = (Delivery) => ({
    type: 'ADD_DELIVERY',
    Delivery
})
export const Change = (name, value) => ({
    type: 'CHANGE',
    text: value,
    name: name
})