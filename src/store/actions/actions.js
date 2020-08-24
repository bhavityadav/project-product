import axios from 'axios';
import {FETCH_PRODUCT, ADD_WISHLIST, FETCH_WISHLIST, REMOVE_WISHLIST, REMOVE_PRODUCT, ADD_PRODUCT} from '../../store/constants';


export const saveFetchProduct = (data) => {
    return{
        type:FETCH_PRODUCT,
        prodArray:data
    }
}

export const fetchProduct = () => {

    return (dispatch) => {
        axios.get('http://localhost:3004/product')
        .then(res => {
            dispatch(saveFetchProduct(res.data))
        })
    }
}

export const saveFetchWishList = (data) => {
    return{
        type:FETCH_WISHLIST,
        wishlist:data
    }
}

export const fetchWishList = () => {

    return (dispatch) => {
        axios.get('http://localhost:3004/wishlist')
        .then(res => {
            dispatch(saveFetchWishList(res.data))
        })
    }
}


export const saveProductToWishList = (data) => {
    return{
        type:ADD_WISHLIST,
        wishListObj:data
    }
}


export const addProductToWishList = (productId,wishListId) => {
    return (dispatch) => {
        const put={
            productId:productId,
            wishListId:wishListId
        }

        axios.put('http://localhost:3004/wishlist/product/add',put)
        .then(res => {
            axios.get('http://localhost:3004/wishlist/')
            .then(res => {
                dispatch(saveProductToWishList(res.data))
            })
        })
    }
}

export const removeProductToWishList = (data) => {
    return{
        type:REMOVE_WISHLIST,
        wishListObj:data
    }
}

export const removeWishList = (id,wishListId) => {
    return (dispatch) => {
        const put = {
            productId:id,
            wishListId:wishListId
        }

        axios.put('http://localhost:3004/wishlist/product/remove',put)
        .then(res => {
            axios.get('http://localhost:3004/wishlist/')
            .then(res => {
                dispatch(removeProductToWishList(res.data))
            })
        })
        
    }
}

export const removeFetchProduct = (data) => {
    return {
        type:REMOVE_PRODUCT,
        prodArray:data
    }
}

export const removeProduct = (id) => {
    return (dispatch) => {
        const del = {
            productId:id
        }

        axios.delete('http://localhost:3004/product/remove',{data:del})
        .then(res => {
            axios.get('http://localhost:3004/product')
                .then(res => {
                    dispatch(removeFetchProduct(res.data))
                    dispatch(fetchWishList())
            });
        })
        .catch(function (error) {
            // handle error
            console.log('EBHAVIT',error);
        })
    }
}

export const addProduct = (post) => {
    return (dispatch) => {
        axios.post('http://localhost:3004/product/',post)
        .then(response => {
            console.log(post);
            dispatch(fetchProduct());
        })
    }
}