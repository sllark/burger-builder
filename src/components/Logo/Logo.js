import React from 'react';
import burgerLogo from '../../assets/img/27.1 burger-logo.png.png';
import {Link}  from 'react-router-dom'



const Logo=(props)=>{

    return(
        <Link to="/" onClick={props.logoClick}><img src={burgerLogo} alt="Burger Builder"/></Link>
    )
};


export default Logo;