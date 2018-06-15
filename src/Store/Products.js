let stock;
let newId;
const initialState ={
    SearchValue:'',
    Product:{
        "id": 0,
        "Name": 'new', 
        "Category": 'cat',  
        "Price": 5,  
        "Quantity": 0},
    Products: [],
    Open: false
}
const removeProduct = (Products, id) => Products.filter(Product => Product.id !== id);
const choseProduct = (Products, id) => Products.filter(Product => Product.id === id);
const filterProduct = (Products) => Products.filter(Product => Product.id.toLowerCase())
const sort = (Products) => Products.sort((t1, t2) => (t1.id < t2.id ? -1 : 1));
export const Products= (state=initialState, action) => {
    switch (action.type){
        case 'FETCH_PRODUCTS_SUCCESS':
        return{
            ...state, Products: action.Products
        }
        
        case 'ADD_PRODUCT':
        stock = state.Products;
        newId = action.id;
        if(newId !== 0) stock = removeProduct(stock, newId);
        else stock.map(item =>{newId = item.id+1})
        let newProduct ={
            "id": newId,
            "Name": state.Product.Name, 
            "Category": state.Product.Category,  
            "Price": state.Product.Price,  
            "Quantity": 0}
        stock.push(newProduct)
        return{...state, Open: !state.Open}  
        
        case 'UPDATE_SEARCH_VALUE':
        return{...state, SearchValue: action.text}

        case 'CHANGE':
        return{...state, Product:{...state.Product, [action.name]:action.text }}
        
        default:
        return state
    }
}