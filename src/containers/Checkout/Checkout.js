import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as action from '../../store/action/action'


class Checkout extends React.Component{

    constructor(props){
        super(props);

        if(!props.ingredients){
            console.log('setting ingredients to zero if not set');
            //setting ingredients to zero if not set
            props.fetchIngredients();
        }
    }

    componentDidMount(){

        // let searchParams=new URLSearchParams(this.props.location.search),
        //     ing={},
        //     price=0;
        //
        //
        // for (let p of searchParams) {
        //     if(p[0]==='price'){
        //       price= +p[1];
        //     }else{
        //         ing[p[0]]= +p[1];
        //     }
        // }
        //
        // this.setState({
        //     ingredients:ing,
        //     price:price
        // });

    }


    continueCheckout = ()=>{

        //if ingredients are zero then redirect to homepage on clicking contine, else show contact form
        let counter=0;
        for(let key in this.props.ingredients){
            if(Number(this.props.ingredients[key])>0)
                counter++;
        }

        if(counter===0)
            this.props.history.push('/');
        else
            this.props.history.replace('/checkout/contact-data');
    };




    render(){

        let checkout = <Redirect to='/'/>;
        if(this.props.ingredients){
            checkout =(
                <>
                    <CheckoutSummary {...this.props} continueClick={this.continueCheckout}/>
                    <Route path={this.props.match.path+ "/contact-data"} render={(props)=>{
                        return <ContactData {...props} />
                    }}/>
                </>
            )
        }

        return checkout;

    }

}



const mapStateToProps=state=>{
    return {
        ingredients:state.ingredients,
        price:state.price
    }
};

const mapDispatchToProps= dispatch=>{
    return{
        fetchIngredients : ()=> dispatch(action.fetchIngredients()),
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Checkout);