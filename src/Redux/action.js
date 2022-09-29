import axios from 'axios'
export const GET = "get"
export const POST = "post"
export const GETSINGLE = "getsingle"
export const GETCART = "getcart"
export const get  = (payload) => ({
    type:GET,
    payload
})
export const post  = (payload) => ({
    type:POST,
    payload
})

export const getsingle = (payload) => ({
    type:GETSINGLE,
    payload
})

export const getcart = (payload) => ({
    type:GETCART,
    payload
})

export const getdata = () => (dispatch) => {
    axios.get("http://localhost:8080/products").then((res)=>{
        if(res.data)
        {
            dispatch(get(res.data))
        }
    }).catch((err)=>{
        console.log(err)
    })
}

export const getcartsdata = () => (dispatch) => {
    axios.get("http://localhost:8080/cart").then((res)=>{
        if(res.data)
        {
            dispatch(getcart(res.data))
            
        }
    }).catch((err)=>{
        console.log(err)
    })
}

export const postdata = (body) => (dispatch) => {
    axios.post("http://localhost:8080/cart",body)
    .then((res)=>{
        if(res.data)
        {
            console.log(res.data)
            dispatch(post(res.data))
            alert("added in cart")
        }
    }).catch((err)=>{
        console.log(err)
        alert("Item is already Added")
    })
}

export const patchdata = (body,id) => (dispatch) => {
    axios.patch(`http://localhost:8080/cart/${id}`,body)
    .then((res)=>{
        if(res.data)
        {
            console.log(res.data)
            dispatch(getcartsdata())
        }
    }).catch((err)=>{
        console.log(err)
    })
}

export const deletedata = (id) => (dispatch) => {
    axios.delete(`http://localhost:8080/cart/${id}`)
    .then((res)=>{
        
        dispatch(getdata())
        window.location.reload()
        alert("deleted")
    }).catch((err)=>{
        console.log(err)
    })
}

export const getsingledata = (id) => (dispatch) => {
    axios.get(`http://localhost:8080/products/${id}`).
    then((res)=>{
        if(res.data)
        {
            console.log(res.data)
            dispatch(getsingle(res.data))
        }
    }).catch((err)=>{
        console.log(err)
    })
}