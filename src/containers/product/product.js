import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions'
import ProductHolder from '../../components/product/product';
import { bindActionCreators } from 'redux';

class Product extends Component{

    state = {
        product:[],
    }

    componentDidMount(){
        this.props.onFetchProduct();
    }

    onButtonClicked = (id) => {
        console.log('bhavitclicked');
        this.props.onAddProductToWishList(id,'5f319b2cbf38a8415f9f6aac');
    }

    onDeleteHandler = (id) => {
        this.props.onRemoveProduct(id);
    }

    
    render(){
        const products = this.props.product.map(prod => {
            return <ProductHolder title={prod.title}
                    price={prod.price}
                    key={prod._id}
                    imgUrl={prod.imgUrl}
                    onClicked={()=>this.onButtonClicked(prod._id)}
                    onDeleteClicked={()=>this.onDeleteHandler(prod._id)}
                    />
        });
        
        return(
            <div className="row">
                {products}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        product:state.product
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({onFetchProduct: () => actionCreators.fetchProduct(),
                                onAddProductToWishList: (productId,wishListId) => actionCreators.addProductToWishList(productId,wishListId),
                                onRemoveProduct: (id) => actionCreators.removeProduct(id)},dispatch);

}



export default connect(mapStateToProps,mapDispatchToProps)(Product);