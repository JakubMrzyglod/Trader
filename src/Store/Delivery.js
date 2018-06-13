
const initialState ={
    EditOpen: true,
    Delivery:{
        Date:'',
        DocNumber:''
    },
    Suppolier:{
        Name:'',
        TaxNumber:'',
        ZipCode:'',
        Adress:'',
        City:'',
    },
    NewProduct:{
        id:0,
        Name:'aaa',
        Quantity:0,
        Price:0,
        Tax:0,
        Value:0,
        TaxValue:0
    },
    Products:[
        {"id": 1, "Name": "Xiaomi",  "Price": "500", "Quantity": 10, "Tax":23, "Value":5000, "TaxValue":1000},
        {"id": 2, "Name": "LG", "Price":"1500", "Quantity": 10, "Tax":23, "Value":5000, "TaxValue":1000},
        {"id": 3, "Name": "Samsung s5",  "Price": "900", "Quantity": 10, "Tax":23, "Value":5000, "TaxValue":1000}
    ],
    Deliveries:[],
    Suppoliers:[]
}
export const Delivery= (state=initialState, action) => {
    switch (action.type){
        case 'FETCH_DELIVERY_SUCCESS':
        return{
            ...state, Suppoliers: action.Data.Suppoliers, Deliveries: action.Data.Deliveries
        }
        case 'EDIT_OPEN':
        return{
            ...state, EditOpen: true
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
        default:
        return state
    }
}