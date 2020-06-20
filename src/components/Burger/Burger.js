import React from 'react';
import BurgerIngredients from './BurgerIngredients';
import {withRouter} from 'react-router-dom';
import './BurgerIngredient.css';
import {connect} from 'react-redux';


const Burger=(props)=>{



    if(!props.ingredients){
        props.addIngredients({
            Bacon:0,
            Salad:0,
            Cheese:0,
            Meat:0,
        });

        return null;
    }


    let transformedIng = Object.keys(props.ingredients).map(
        ingKey => {
            return [...Array(props.ingredients[ingKey])].map(
                (k,i) => {
                    return <BurgerIngredients type={ingKey} key={ingKey+i}/>;
                }
            );
        }
    ).reduce((preArr,currEle)=>{
        return preArr.concat(currEle);
    },[]);


    if(transformedIng.length===0){

        transformedIng=<p>Please start adding ingredints</p>;
    }





    return(
        <div className='burgerContainer'>
            <BurgerIngredients type='BreadTop'/>
            {transformedIng}
            <BurgerIngredients type='BreadBottom'/>
        </div>
    )


};



const mapStateToProps=state=>{
    return {
        ingredients:state.ingredients,
    }
};


const mapDispatchToProps= dispatch=>{
    return{
        addIngredients : (ing)=> dispatch({type:'INGREDIENTS',ingredients:ing}),
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Burger));