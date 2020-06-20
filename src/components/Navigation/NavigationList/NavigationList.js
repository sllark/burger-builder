import React from 'react';
import {NavLink}  from 'react-router-dom';



const NavigationList=(props)=>{

    return(
        <ul className="navList">
            <li>
                <NavLink to="/" exact onClick={props.hideSideDrawer}>Burger Builder</NavLink>
            </li>
            {props.isAuthenticate
                ?<li>
                    <NavLink to="/orders" onClick={props.hideSideDrawer}>Orders</NavLink>
                </li>

                :null
            }
            <li>
                {!props.isAuthenticate
                        ?<NavLink to="/auth" onClick={props.hideSideDrawer}>Authenticate</NavLink>
                        :<NavLink to="/logout" onClick={props.hideSideDrawer}>Logout</NavLink>
                }
            </li>
        </ul>
    )
};


export default NavigationList;