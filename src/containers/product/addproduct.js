import React , {Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions'
import './addproduct.css'

class AddProduct extends Component{
    state = {
        title: '',
        price: '',
        imgUrl:'',
        likes:0,
    }

    addPostClickHandler = () => {
        const post={
            title:this.state.title,
            price:this.state.price,
            imgUrl:this.state.imgUrl
        }
        this.props.onAddProduct(post);
        this.setState({title:'',price:'',imgUrl:''});
    }

    render(){
        return(
            <div className="NewPost">
                <h1>Add a Product</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event)=>this.setState({title:event.target.value})}/>
                <label>Price</label>
                <input type="text" value={this.state.price} onChange={(event)=>this.setState({price:event.target.value})} />
                <label>Image Url</label>
                <input type="text" value={this.state.imgUrl} onChange={(event)=>this.setState({imgUrl:event.target.value})} />
                <label >Seller</label>
                <select value={this.state.author} onChange={(event)=>this.setState({author:event.target.value})}>
                    <option value="bhavit">Bhavit</option>
                    <option value="Tata">Tata</option>
                </select>
                <button onClick={this.addPostClickHandler}>Add Product</button>
            </div>
        );
    }

    
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddProduct: (post) => dispatch(actionCreators.addProduct(post)),
    };
}

export default connect(null,mapDispatchToProps)(AddProduct);