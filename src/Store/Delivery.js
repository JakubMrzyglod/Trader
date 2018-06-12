
const initialState ={
    Value:'',
    Suppoliers:[],
    Deliveries:[],
    Products:[
        {"id": 1, "Name": "Xiaomi",  "Price": "500", "Quantity": 10, "Tax":23, "Value":5000, "TaxValue":1000},
        {"id": 2, "Name": "LG", "Price":"1500", "Quantity": 10, "Tax":23, "Value":5000, "TaxValue":1000},
        {"id": 3, "Name": "Samsung s5",  "Price": "900", "Quantity": 10, "Tax":23, "Value":5000, "TaxValue":1000}
]}
export const Delivery= (state=initialState, action) => {
    switch (action.type){
        case 'FETCH_DELIVERY_SUCCESS':
        return{
            ...state, Suppoliers: action.Data.Suppoliers, Deliveries: action.Data.Deliveries
        }
        case 'HANDLE_INPUT_CHANGE':
        return{
            ...state, Value: action.text
        }
        default:
        return state
    }
}