import React from 'react';
import './product.css';

const productHolder = (props) => {
    return(
        <div className="card product main">
            <img className="card-imp-top" alt="Product" src={props.imgUrl}></img>
            <div className="card-block">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">Price: {props.price}</p>    
                <a href="#" onClick={()=>props.onClicked()} className="btn btn-primary">Add to WishList</a>
                <a href="#" onClick={()=>props.onDeleteClicked()} className="btn btn-outline-danger msg">Delete Product</a>
            </div>          
        </div>
    );
}

export default productHolder;