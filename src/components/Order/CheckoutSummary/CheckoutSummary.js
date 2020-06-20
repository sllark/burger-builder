import React from 'react';
import './CheckoutSummary.css';
import Burger from '../../Burger/Burger';
import {connect} from 'react-redux';

const CheckoutSummary = (props)=>{


    return(
        <div className='checkoutBurgerContainer'>
            <h1>
                The best Burger you ever tasted.
            </h1>
            {/*<Burger {...props} ingredients={props.ingredients}/>*/}
            <Burger />
            <h4 className='price'>PRICE: {props.price.toFixed(2)} USD</h4>
            <div className="btnWrapper">
                <button className="cancelBtn" onClick={()=>{props.history.replace('/')}}>BACK</button>
                <button className="contBtn" onClick={props.continueClick}>CONTINUE</button>
            </div>
        </div>
    )



};


const mapStateToProps=state=>{
    return {
        price:state.price
    }
};

export default connect(mapStateToProps)(CheckoutSummary);