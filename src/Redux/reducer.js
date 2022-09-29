import { GET, GETCART, GETSINGLE, POST } from "./action"

export const reducer = (store = {product:[],cart:[],single:{}},{type,payload}) => {
    switch(type){
        case GET :{
            return{
                store:{...store.store,product:payload}
            }
        }
        case POST :{
            return{
                store:{...store.store,cart:[...store.store.cart,payload]}
            }
        }
        case GETCART : {
            return {
                store:{...store.store,cart:payload}
            }
        }
        case GETSINGLE : {
            return {
                store : {...store.store,single:payload}
            }
        }
        default :{
            return{
                store
            }
        }
        
    }
}