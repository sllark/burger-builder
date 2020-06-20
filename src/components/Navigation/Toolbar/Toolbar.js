import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationList from '../NavigationList/NavigationList'
import SideDrawer from '../../SideDrawer/SideDrawer'



class Toolbar extends React.Component{


        state={
            showSideDrawer:false,
        };


        menuClickHandler=(e)=>{
            this.setState({
                showSideDrawer:!this.state.showSideDrawer
            })
        };
        backDropClickHandler=()=>{
            this.setState({
                showSideDrawer:!this.state.showSideDrawer
            })
        };

    render(){
        return(
            <header className="toolbar">
                <div>
                    <div className="menuContainer" onClick={this.menuClickHandler}>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>
                <Logo/>
                <NavigationList
                    isAuthenticate={this.props.isAuth}/>
                <SideDrawer
                    isAuthenticate={this.props.isAuth}
                    show={this.state.showSideDrawer}
                    backdropClick={this.backDropClickHandler}
                />
            </header>

        )
    }

}


export default Toolbar;