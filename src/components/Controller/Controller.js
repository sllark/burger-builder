import React from 'react';
import Control from './Control';



const Controller=(props)=>{

    const IngControls=Object.keys(props.ingInfo);
    return(
        <div className="Controller">
            {
                IngControls.map(ingCtr=>{
                    return <Control
                                ingredientControl={ingCtr}
                                key={ingCtr}
                                incIng={props.inc}
                                decIng={props.dec}
                                isDisabled={props.ingInfo[ingCtr]}/>
                })
            }


            <button className="orderNowButton"
                    disabled={props.isOrderBtnDisable}
                    onClick={props.orderClickHandler}>
                {props.isAuth
                    ?"Order Now"
                    :"Sign Up to Order"}</button>
        </div>
    )


};


export default Controller;