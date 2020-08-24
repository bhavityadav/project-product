import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions';
import WishListHolder from '../../components/wishlist/wishlist';
import { bindActionCreators } from 'redux';

class WishList extends Component{

    state = {
        wishlist:[{
            products:[],
            title:'holder',
            _id:'pscts'
        }
    ]
    }

    componentDidMount(){
        this.props.onFetchWishList();
    }

    onRemoveWishListHandler(id){
        this.props.onRemoveWishList(id,'5f319b2cbf38a8415f9f6aac');
    }

    render(){
        const createWishList = this.props.wishlist[0].products.map(wish=>{
            return <WishListHolder title={wish.title} price={wish.price} key={wish._id} onClicked={()=>this.onRemoveWishListHandler(wish._id)}/>
        });

        return(
            <div className="card">
            <div className="card-block">
                <h4 className="card-title">WishList</h4>
                <ul className="list-group">
                    {createWishList}
                </ul>
            </div>
        </div>
        );
    }

}

const mapStateToProps = (state) => {
    return{
        wishlist:state.wishlist
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({onFetchWishList: () => actionCreators.fetchWishList(),
                                onRemoveWishList: (id,wishListId) => actionCreators.removeWishList(id,wishListId)},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(WishList);