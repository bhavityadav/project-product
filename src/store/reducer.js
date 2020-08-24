import {FETCH_PRODUCT, ADD_WISHLIST, FETCH_WISHLIST, REMOVE_WISHLIST, REMOVE_PRODUCT, ADD_PRODUCT} from '../store/constants';

const initialState={
    product:[
        {
            _id:'id',
            title:'title',
            price:'price',
            imgUrl:'#imgUrl'
        }
    ],
    wishlist:[
        {
            products:[],
            title:'holder',
            _id:'pscts'
        }
    ]
}

const reducer = (state = initialState,action) => {

    switch (action.type) {
        case FETCH_PRODUCT:
            return{
                ...state,
                product:action.prodArray
            }
        case ADD_WISHLIST:
            return{
                ...state,
                wishlist:action.wishListObj
            }
        case REMOVE_WISHLIST:
            return{
                ...state,
                wishlist:action.wishListObj
            }
        case FETCH_WISHLIST:
            return{
                ...state,
                wishlist:action.wishlist
            }
        case REMOVE_PRODUCT:
            return{
                ...state,
                product:action.prodArray
    
            }
    }
    
    return state;
}



export default reducer;