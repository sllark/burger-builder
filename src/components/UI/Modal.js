import React from 'react';
import Backdrop from './Backdrop';



const Modal=(props)=>{


    let classname="Modal";

    if(!props.show){
        classname+=" hideModal"
    }


    return(
        <>
            <Backdrop backdropClicked={props.backdropClick} show={props.show}/>
            <div className={classname}>
                {props.children}
            </div>
        </>
    )
}

export default Modal;