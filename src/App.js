import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from "./containers/Checkout/Checkout";
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as action from "./store/action/action";



class App extends React.Component{

    constructor(props){
        super(props);
        this.props.checkLocalStorage();

    }

  render(){

        let route=(
            <Switch>
                <Route path='/auth' excat component={Auth}/>
                <Route path='/' component={BurgerBuilder}/>
                <Redirect to='/' />
            </Switch>
        );

        if(this.props.isAuth){
            route=(
                <Switch>
                    <Route path='/checkout' excat component={Checkout}/>
                    <Route path='/orders' excat component={Orders}/>
                    <Route path='/logout' excat component={Logout}/>
                    <Route path='/' component={BurgerBuilder}/>
                    <Redirect to='/' />
                </Switch>
            );
        }


      return (
          <Layout>
              {route}
          </Layout>
      );
  }


}


const mapStateToProps= state=>{
    return{
        isAuth: state.idToken !== null
    }
};
const mapDispatchToProps= dispatch=>{
    return{
        checkLocalStorage : ()=> dispatch(action.checkLocalStorage()),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
