import React from 'react';


const Order = (props)=>{

    let ingredients=[];
    for(let key in props.ingredients){
        ingredients.push(key+' : ' + props.ingredients[key]+' ');
    }

    return(
        <div className='order'>
            <p>Ingredients: <strong>{ingredients.join(' , ')}</strong></p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    )

};

export default Order;