import React from 'react';


const BurgerIngredients=(props)=>{

    let ingredient=null;

    switch (props.type) {
        case('BreadTop'):
            ingredient = <div className='BreadTop'>
                <div className='Seeds1'>
                </div>
                <div className='Seeds2'>
                </div>
            </div>;
            break;

        case('BreadBottom'):
            ingredient = <div className='BreadBottom'/>;
            break;


        case('Meat'):
            ingredient = <div className='Meat'/>;
            break;


        case('Cheese'):
            ingredient = <div className='Cheese'/>;
            break;

        case('Salad'):
            ingredient = <div className='Salad'/>;
            break;

        case('Bacon'):
            ingredient = <div className='Bacon'/>;
            break;

        default:
            ingredient=null;

    }

    return ingredient;

};



export default BurgerIngredients;