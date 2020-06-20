import React from 'react';
import Burger from '../../components/Burger/Burger';
import Controller from '../../components/Controller/Controller';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary';
import Spinner from'../../components/UI/spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

import {connect} from 'react-redux';
import * as action from '../../store/action/action'

const ING_PRICE={
    Bacon:0.7,
    Salad:0.3,
    Cheese:0.4,
    Meat:1.3,
};

class BurgerBuilder extends React.Component{


    constructor(props){

        super(props);


        if(!this.props.ingredients){
            props.fetchIngredients();
        }

        this.state={
            showSummaryModal:false,
            showSpinner:true
        };

    }



    componentDidMount(){
            this.setState({showSpinner:false})
    }

    incIngredient=(type)=>{

        let count=this.props.ingredients[type];
        count++;
        let ingred={
            ...this.props.ingredients
        };
        ingred[type]=count;
        let newPrice=this.props.price+ING_PRICE[type];

        this.props.addIngredients(ingred);
        this.props.setPrice(newPrice);

    };


    decIngredient=(type)=>{
        let count=this.props.ingredients[type];
        if(count===0)
            return;

        count--;
        let ingred={
            ...this.props.ingredients
        };
        ingred[type]=count;
        let newPrice=this.props.price-ING_PRICE[type];

        this.props.addIngredients(ingred);
        this.props.setPrice(newPrice);
    };

    orderClickHandler=()=>{
        if(this.props.isAuthenticated){
            this.setState({showSummaryModal:true});
        }
        else{
            this.props.movingToAuth();
            this.props.history.push('/auth');
        }
    };

    backToOrderClickHandler=()=>{
        this.setState({showSummaryModal:false})
    };


    procedOrder= ()=>{

        // let query='';
        //
        //
        // for(let key in this.props.ingredients){
        //     query+= encodeURIComponent(key)+'='+encodeURIComponent(this.props.ingredients[key]);
        //
        //     // count++;
        //     // if(count<Object.keys(this.props.ingredients).length)
        //         query+='&';
        // }
        //
        // query+='price='+this.props.price.toFixed(2);
        //



        this.props.history.push({
            pathname:'/checkout',
            // search:query
        });


    };


    render(){

        let summary,mainBody;

        if(this.state.showSpinner){
            summary= <Spinner />
        }else if(this.props.ingredients){
            summary= <OrderSummary
                continueOrder={this.procedOrder}
                cancelClick={this.backToOrderClickHandler}/>;
        }

        mainBody=<Spinner/>;

        if(this.props.ingredients){

            let ingredientsInfo={
                ...this.props.ingredients
            },orderButtonState=true;

            for(let key in ingredientsInfo) {
                ingredientsInfo[key] = ingredientsInfo[key] <= 0;
                if(!ingredientsInfo[key]){
                    orderButtonState=false;
                }
            }

            mainBody=(
                <>
                    <Burger />
                    <h2 className='price'>{this.props.price.toFixed(2)+' $'}</h2>
                    <Controller
                        inc={this.incIngredient}
                        dec={this.decIngredient}
                        ingInfo={ingredientsInfo}
                        isAuth={this.props.isAuthenticated}
                        isOrderBtnDisable={orderButtonState}
                        orderClickHandler={this.orderClickHandler}
                    />
                </>
            );
        }else if(this.props.error){
            mainBody=<h1>Can't Load Burder.</h1>
        }



        return(
            <>
                <Modal show={this.state.showSummaryModal} backdropClick={this.backToOrderClickHandler}>
                    {summary}
                </Modal>
                {mainBody}
            </>
        )
    }

}

const mapStateToProps=state=>{
    return {
        ingredients:state.ingredients,
        price:state.price,
        error:state.error,
        isAuthenticated : state.idToken !== null
    }
};

const mapDispatchToProps= dispatch=>{
    return{
        addIngredients : (ing)=> dispatch(action.addIngredients(ing)),
        setPrice : (price)=> dispatch(action.setPrice(price)),
        fetchIngredients : ()=> dispatch(action.fetchIngredients()),
        movingToAuth : ()=> dispatch(action.homeToAuth())
    }
};



export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));