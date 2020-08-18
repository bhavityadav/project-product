const initialState={
    product:[
        {
            _id:'id',
            title:'title',
            price:'price',
            imgUrl:'#imgUrl'
        }
    ],
    wishlist:[{
        products:[],
        title:'holder',
        _id:'pscts'
    }]
}

const reducer = (state= initialState,action) => {
    
    if(action.type === 'FETCH_PRODUCT'){
        return{
            ...state,
            product:action.prodArray
        }
    }

    if(action.type === 'ADD_WISHLIST'){
        return{
            ...state,
            wishlist:action.wishListObj
        }
    }

    if(action.type === 'REMOVE_WISHLIST'){
        return{
            ...state,
            wishlist:action.wishListObj
        }
    }

    if(action.type === 'FETCH_WISHLIST'){
        return{
            ...state,
            wishlist:action.wishlist
        }
    }

    if(action.type==='REMOVE_PRODUCT'){
        return{
            ...state,
            product:action.prodArray

        }
    }

    return state;
}



export default reducer;