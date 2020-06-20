import React from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import {connect} from 'react-redux';

class Layout extends React.Component{

    render(){

        return(
            <div>
                <Toolbar isAuth={this.props.isLogged}/>
                <main>
                    {this.props.children}
                </main>
            </div>
        )

    }

}

const mapStateToProps=state=>{
    return {
       isLogged: state.idToken !==null
    }
}


export default connect(mapStateToProps)(Layout);