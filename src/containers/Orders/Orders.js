import React from 'react';
import Order from '../../components/Order/Order';
import './Orders.css';
import axios from '../../axios-orders';
import Spinner from  '../../components/UI/spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {connect} from 'react-redux';


class Orders extends React.Component{

    state={
        showSpinner:true,
        orders:[]
    };

    componentDidMount(){



        const queryParams='?auth='+this.props.token+'&orderBy="userId"&equalTo="'+this.props.userId+'"';

        axios.get('/orders.json'+queryParams).then(resp=>{

            let orders=[];

            for(let key in resp.data){
                orders.push({
                    ...resp.data[key],
                    id:key
                })
            }
            this.setState({
                showSpinner:false,
                orders:orders
            })
        }).catch(error=>{
            console.log(error);
            this.setState({
                showSpinner:false,
            })
        })

    }


    render(){

        let orderContent;

        if(this.state.showSpinner){
            orderContent= <Spinner/>
        }else{
            let orders=this.state.orders.reverse();
            orderContent= orders.map(order=>{
                return <Order price={order.price} ingredients={order.ingredients} key={order.id}/>
            })
        }


        return(
            <div className='OrdersContainer'>
                {orderContent}
            </div>
        )
    }
}



const mapStateToProps=state=>{
    return {
        token:state.idToken,
        userId:state.localId
    }
};

// export default connect(mapStateToProps)(Orders);
export default connect(mapStateToProps)(withErrorHandler(Orders,axios));