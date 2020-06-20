import React from 'react';




const Control=(props)=>{


    return(
        <div className='IngrediendControl'>
            <p>
                {props.ingredientControl}
            </p>
            <button onClick={()=>props.incIng(props.ingredientControl)}>
                More
            </button>
            <button
                onClick={()=>props.decIng(props.ingredientControl)}
                disabled={props.isDisabled}>
                Less
            </button>
        </div>
    )


};


export default Control;