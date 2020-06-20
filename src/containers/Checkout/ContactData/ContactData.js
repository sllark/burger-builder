import React from 'react';
import './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/spinner/Spinner';
import {connect} from 'react-redux';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as action from "../../../store/action/action";


const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

class ContactData extends React.Component{


    state={
        name:'',
        email:'',
        street:'',
        postal:'',
        route:'Fastest',
        showSpinner:false,
        formFieldsValidation:{
            name:false,
            email:false,
            street:false,
            postal:false,
        },
        showError:false
    };


    handleSubmit=(event)=>{

        event.preventDefault();

        this.setState({showSpinner:true});

        let isValid=true;

        for(let field in this.state.formFieldsValidation){
            isValid = this.state.formFieldsValidation[field] && isValid;
        }

        if(!isValid){
            this.setState({
                showSpinner:false,
                showError:true
            });
            return;
        }else {
            this.setState({
                showError:false
            });
        }



        const order={
            ingredients:this.props.ingredients,
            price:this.props.price,
            name: this.state.name,
            adress:{
                street:this.state.street,
                postal:this.state.postal,
            },
            email: this.state.email,
            route: this.state.route,
            userId:this.props.userId
        };


        axios.post('/orders.json?auth='+this.props.token,order).then(
            response=>{
                if(!response) return;

                this.props.addIngredients({
                    Bacon:0,
                    Salad:0,
                    Cheese:0,
                    Meat:0,
                });

                this.props.setPrice(1);


                this.setState({
                    showSpinner:false
                });

                this.props.history.push('/');

            }
        ).catch(error=>{
            this.setState({
                    showSpinner:false
            });
        })

    };


    inputChangedHandler = (event) => {


        if(!(event.target.classList.contains('touched'))){
            event.target.classList.add('touched');
        }

        const {name,value}=event.target;

        let stateClone={...this.state};
        let fieldsClone={...stateClone.formFieldsValidation};


        switch(name){
            case "name":
                value.trim().length >= 2 ? fieldsClone[name]=true : fieldsClone[name]=false;
            break;
            case "email":
                emailRegex.test(value) ? fieldsClone[name]=true : fieldsClone[name]=false;
            break;
            case "street":
                value.trim().length > 2 ? fieldsClone[name]=true : fieldsClone[name]=false ;
            break;
            case "postal":
                value.trim().length > 4 && value.length <= 6 && (!isNaN(Number(value))) ? fieldsClone[name]=true : fieldsClone[name]=false;
            break;
            default:
                value.trim().length >= 3 ? fieldsClone[name]=true : fieldsClone[name]=false;
            break;
        }

        event.persist();

        this.setState({
            [name]: value,
            formFieldsValidation:fieldsClone
        },()=>{
            if(this.state.formFieldsValidation[name] === false){
                event.target.classList.add('inputError');
                event.target.classList.remove('inputSuccess');
            }else if(this.state.formFieldsValidation[name]){
                event.target.classList.remove('inputError');
                event.target.classList.add('inputSuccess');
            }else if(event.target.name==="route"){
                event.target.classList.remove('inputError');
                event.target.classList.add('inputSuccess');
            }

        });

    };


    render(){

        let form=(<form className='Form' onSubmit={this.handleSubmit}>
            <input type="text" name='name' placeholder='Your Name' onChange={this.inputChangedHandler} value={this.state.name} />
            <input type="text" name='email' placeholder='Your Email' onChange={this.inputChangedHandler} value={this.state.email}/>
            <input type="text" name='street' placeholder='Street Number' onChange={this.inputChangedHandler} value={this.state.street}/>
            <input type="text" name='postal' placeholder='Postal Code' onChange={this.inputChangedHandler} value={this.state.postal}/>
            <select name="route" onChange={this.inputChangedHandler}>
                <option value="Fastest">Fastest</option>
                <option value="Cheapest">Cheapest</option>
            </select>
            <button type='submit' className='contBtn'>Submit</button>
        </form>);

        if(this.state.showSpinner){
            form=<Spinner/>;
        }

        let formError=null;
        if(this.state.showError){
            formError=(<p className='errorMesssage'>
                Please fill the Fields correctly and then submit the Form.
            </p>)
        }

        return(
            <div className='formContainer'>
                {formError}
                {form}
            </div>
        )
    }
}



const mapStateToProps=state=>{
    return {
        ingredients:state.ingredients,
        price:state.price,
        token:state.idToken,
        userId:state.localId
    }
};


const mapDispatchToProps= dispatch=>{
    return{
        addIngredients : (ing)=> dispatch(action.addIngredients(ing)),
        setPrice : (price)=> dispatch(action.setPrice(price)),

    }
};


export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(ContactData,axios));