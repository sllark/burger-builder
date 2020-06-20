import React from 'react';
import {connect} from 'react-redux';



const OrderSummary=(props)=>{

    let ingredientsList=Object.keys(props.ingredients).map(ingre=>{
        return <li key={ingre}>{ingre+": "+ props.ingredients[ingre]}</li>;
    });

    return(
        <div className="orderDiv">
            <h2>Your Order</h2>
            <p>
                A dlicious Burger with following Ingredients:
            </p>
            <ul>
                {ingredientsList}
            </ul>

            <h3>Price: {props.price.toFixed(2)} $</h3>
            <h3>Continue to checkout?</h3>

            <button className="cancelBtn" onClick={props.cancelClick}>CANCEL</button>
            <button className="contBtn" onClick={props.continueOrder}>CONTINUE</button>
        </div>
    )
};

const mapStateToProps=state=>{
    return {
        ingredients:state.ingredients,
        price:state.price
    }
};


export default connect(mapStateToProps)(OrderSummary);