import React  from 'react';
import './wishlist.css';

const wishlistHolder=(props)=>{
    return(
        <li className="list-group-item pc-condensed">
            <a className="btn btn-outline-danger" onClick={props.onClicked}>
                X
            </a>
            <p>{props.title} || <b>RS {props.price}</b></p>
        </li>
    );
}

export default wishlistHolder;