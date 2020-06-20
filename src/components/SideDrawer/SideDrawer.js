import React from 'react';
import Logo from '../Logo/Logo'
import NavigationList from '../Navigation/NavigationList/NavigationList'
import Backdrop from '../UI/Backdrop';


const SideDrawer=(props)=>{

    let classname="sideDrawer";

    if(!props.show){
        classname+=" hidesideDrawer"
    }

    return(
        <>
            <Backdrop backdropClicked={props.backdropClick} show={props.show}/>
            <div className={classname}>
                <Logo logoClick={props.backdropClick}/>
                <NavigationList
                    isAuthenticate={props.isAuthenticate}
                    hideSideDrawer={props.backdropClick} />
            </div>
        </>
    )
};


export default SideDrawer;