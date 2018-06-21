let DeliveriesList;
const EmptyProduct ={id:0,Name:'',Quantity:'',Price:'',Tax:'',Value:0,TaxValue:0};
const EmptySuppolier = {id:0, Name:'', Adress:'', City:'', ZipCode:'',TaxNumber:''}
const EmptyDetails={Date:'',DocNumber:''}
const initialState ={
    DeliveryId:0,
    EditOpen: false,
    Delivery:{},
    Details:{},
    Suppolier:{},
    NewProduct:EmptyProduct,
    Products:[],
    Deliveries:[],
    Suppoliers:[]
}
const ChoseProduct = (Products, id) => Products.filter(Product => Product.id === id);
const RemoveProduct = (Products, id) => Products.filter(Product => Product.id !== id);
const RemoveDelivery = (Deliveries, id) => Deliveries.filter(Delivery => Delivery.id !== id);
const Sort = (Products) => Products.sort((t1, t2) => (t1.id < t2.id ? -1 : 1));
const NewValueSummary = (Products) =>{ let Value = 0; Products.map(Product=>Value=Value+Product.Value); return Value;};
const NewTaxValueSummary = (Products) =>{ let Value = 0; Products.map(Product=>Value=Value+Product.TaxValue); return Value;};
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
            Details:EmptyDetails,
            Delivery:{ValueSummary:0, TaxValueSummary:0},
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
            ...state, Details:{...state.Details, [action.name]:action.text}
        }
        case 'CHANGE_PRODUCT_VALUE':
        return{
            ...state, NewProduct:{...state.NewProduct, [action.name]:action.text}
        }
        case 'REMOVE_PRODUCT':
        let NewProducts = RemoveProduct(state.Products, action.Product.id);
        return{
            ...state, Products:NewProducts,
            Delivery:{
                ValueSummary: state.Delivery.ValueSummary-action.Product.Value,
                TaxValueSummary:state.Delivery.TaxValueSummary-action.Product.TaxValue}
        }
        case 'EDIT_PRODUCT':
        let NewProduct;
        state.Products.map(Product=> Product.id === action.id && (NewProduct = Product))
        return{
            ...state, NewProduct:NewProduct, Products: RemoveProduct(state.Products, action.id),
            Delivery:{
                ValueSummary: state.Delivery.ValueSummary-NewProduct.Value,
                TaxValueSummary:state.Delivery.TaxValueSummary-NewProduct.TaxValue}
        }
        case 'ADD_PRODUCT':
        let NewId = state.NewProduct.id;    
        if(NewId === 0) stock.map(item => (NewId = item.id)) && NewId++
        stock = [
            ...state.Products,
            {
            "id": NewId,
            "Name": state.NewProduct.Name,
            "Price": state.NewProduct.Price,
            "Quantity": state.NewProduct.Quantity,
            "Tax": state.NewProduct.Tax,
            "Value": state.NewProduct.Price*state.NewProduct.Quantity,
            "TaxValue": state.NewProduct.Price*state.NewProduct.Quantity*state.NewProduct.Tax/100
        }]        
        return{
            ...state,
            Delivery:{
                ValueSummary:state.Delivery.ValueSummary+state.NewProduct.Price*state.NewProduct.Quantity, 
                TaxValueSummary:state.Delivery.TaxValueSummary+state.NewProduct.Price*state.NewProduct.Quantity*state.NewProduct.Tax/100},
            Products:Sort(stock),NewProduct:EmptyProduct }
        case 'EDIT_DELIVERY':
        let DeliveryEdit;
        state.Deliveries.map(Delivery =>Delivery.id === action.id && (DeliveryEdit= Delivery))
        return{
            ...state,Products: DeliveryEdit.Products, Suppolier: DeliveryEdit.Suppolier, DeliveryId: action.id, 
            Details: {Date: DeliveryEdit.Date, DocNumber:DeliveryEdit.DocNumber}, EditOpen: true, 
            Delivery:{ValueSummary:DeliveryEdit.Net, TaxValueSummary: DeliveryEdit.Tax}
        }
        case 'SAVE_DELIVERY':
        let Deliveries =state.Deliveries;
        let id = state.DeliveryId;
        if(id !== 0) Deliveries=RemoveDelivery(Deliveries, id)
        else Deliveries.map(item=>(id = item.id)&&id++)
        Deliveries.push(
            {   "id":id,
                "DocNumber":state.Details.DocNumber,
                "Date":state.Details.Date,
                "Net":state.Delivery.ValueSummary, 
                "Tax":state.Delivery.TaxValueSummary,
                "Suppolier":state.Suppolier,
                "Products":state.Products
            })
        return{
            ...state,Deliveries:Sort(Deliveries)
        }
        default:
        return state
    }
}