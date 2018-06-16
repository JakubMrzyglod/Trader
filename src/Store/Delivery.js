let DeliveriesList;
let EmptyProduct ={id:0,Name:'',Quantity:'',Price:'',Tax:'',Value:'',TaxValue:''};
let EmptySuppolier = {id:0, Name:'', Adress:'', City:'', ZipCode:'',TaxNumber:''}
let initialState ={
    Fake: false,
    EditOpen: false,
    Delivery:{ValueSummary:'', TaxValueSummary:''},
    Date:'',
    DocNumber:'',
    Suppolier:{},
    NewProduct:EmptyProduct,
    Products:[],
    Deliveries:[],
    Suppoliers:[]
}
const ChoseProduct = (Products, id) => Products.filter(Product => Product.id === id);
const RemoveProduct = (Products, id) => Products.filter(Product => Product.id !== id);
const Sort = (Products) => Products.sort((t1, t2) => (t1.id < t2.id ? -1 : 1));
export const Delivery= (state=initialState, action) => {
    switch (action.type){
        case 'FETCH_DELIVERY_SUCCESS':
        return{
            ...state, Suppoliers: action.Data.Suppoliers, Deliveries: action.Data.Deliveries
        }
        case 'EDIT_OPEN':
        return{
            ...state,
            Suppolier:EmptySuppolier,
            NewProduct:EmptyProduct,
            Date:'',
            DocNumber:'',
            Delivery:{ValueSummary:'', TaxValueSummary:''},
            Products:[]
        }
        case 'EDIT_CLOSE':
        return{
            ...state, EditOpen: false
        }
        case 'CHANGE_SUPPOLIER':
        return{
            ...state,Suppolier:{...state.Suppolier, [action.name]:action.text}
        }
        case 'CHANGE_DELIVERY_INFO':
        return{
            ...state, Delivery:{...state.Delivery, [action.name]:action.text}
        }
        case 'CHANGE_PRODUCT_VALUE':
        return{
            ...state, NewProduct:{...state.NewProduct, [action.name]:action.text}
        }
        case 'REMOVE_PRODUCT':
        return{
            ...state, Products: RemoveProduct(state.Products, action.id)
        }
        case 'EDIT_PRODUCT':
        let NewProduct;
        state.Products.map(Product=> Product.id === action.id && (NewProduct = Product))
        return{
            ...state, NewProduct:NewProduct, Products: RemoveProduct(state.Products, action.id)
        }
        case 'ADD_PRODUCT':
        let stock = state.Products;
        let NewId = state.NewProduct.id;
        if(NewId === 0) stock.map(item => (NewId = item.id)) && NewId++
        stock.push({
            "id": NewId,
            "Name": state.NewProduct.Name,
            "Price": state.NewProduct.Price,
            "Quantity": state.NewProduct.Quantity,
            "Tax": state.NewProduct.Tax,
            "Value": state.NewProduct.Value,
            "TaxValue": state.NewProduct.TaxValue
        })         
        return{
            ...state,Fake:!state.Fake,Products:Sort(stock),NewProduct:EmptyProduct }
        case 'EDIT_DELIVERY':
        let DeliveryEdit;
        state.Deliveries.map(Delivery =>Delivery.id === action.id && (DeliveryEdit= Delivery))
        return{
            ...state,Products: DeliveryEdit.Products, Suppolier: DeliveryEdit.Suppolier, 
            Date: DeliveryEdit.Date, DocNumber:DeliveryEdit.DocNumber, EditOpen: true, 
            Delivery:{ValueSummary:DeliveryEdit.Net, TaxValueSummary: DeliveryEdit.Tax}
        }
        default:
        return state
    }
}