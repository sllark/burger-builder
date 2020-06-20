import React from 'react';
import '../Checkout/ContactData/ContactData.css';
import axios from 'axios';
import Spinner from '../../components/UI/spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {connect} from 'react-redux';
import * as action from '../../store/action/action'

const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

class Auth extends React.Component{


    state={
        email:'',
        password:'',
        // showSpinner:false,
        formFieldsValidation:{
            email:false,
            password:false,
        },
        showError:false,
        isSignUp:true
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

        this.props.auth(this.state.email,this.state.password,this.state.isSignUp,this.props.history);

        this.setState({
            email:'',
            password:'',
            showSpinner:false
        });

        this.resetInputField();
        //
        // axios.post('/auth').then(
        //     response=>{
        //         if(!response) return;
        //
        //
        //         this.setState({
        //             showSpinner:false
        //         });
        //
        //         this.props.history.push('/');
        //
        //     }
        // ).catch(error=>{
        //
        //     this.setState({
        //         showSpinner:false
        //     });
        //
        // })



    };

    resetInputField=()=>{
        Object.keys(this.state.formFieldsValidation).forEach(field=>{
            let input=document.getElementsByName(field)[0];
            input.classList.remove('touched');
            input.classList.remove('inputSuccess');
        });
    };

    inputChangedHandler = (event) => {


        if(!(event.target.classList.contains('touched'))){
            event.target.classList.add('touched');
        }

        const {name,value}=event.target;

        let stateClone={...this.state};
        let fieldsClone={...stateClone.formFieldsValidation};


        event.persist();

        switch(name){
            case "password":
                value.trim().length > 6 ? fieldsClone[name]=true : fieldsClone[name]=false;
                break;
            case "email":
                emailRegex.test(value) ? fieldsClone[name]=true : fieldsClone[name]=false;
                break;
            default:
                value.trim().length >= 6 ? fieldsClone[name]=true : fieldsClone[name]=false;
                break;
        }

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

    accountSwitchHandler=()=>{

        this.props.resetLoginError();
        this.setState(prevState => {
            return{
                isSignUp: !prevState.isSignUp
            }
        })
    };

    render(){

        let form=<Spinner/>;

        if(!this.props.showSpinner){
            form=(
                <form className='Form' onSubmit={this.handleSubmit}>
                    <input type="text" name='email' placeholder='Your Email' onChange={this.inputChangedHandler} value={this.state.email}/>
                    <input type="password" name='password' placeholder='Password' onChange={this.inputChangedHandler} value={this.state.password}/>
                    <button type='submit' className='contBtn'>
                        {this.state.isSignUp? 'Sign Up': 'Login'}
                    </button>
                </form>
            );
        }

        let formError=null;

        if(this.state.showError){
            formError=(<p className='errorMesssage'>
                Please fill the Fields correctly and then submit the Form.
            </p>)
        }

        if(this.props.responseError){
            formError=(<p className='errorMesssage'>
                {this.props.responseError.error.errors[0].reason}
                {' !! ' }{this.props.responseError.error.message}
            </p>)
        }

        return(
            <div className='formContainer'>
                <h1>{this.state.isSignUp ? 'Sign Up': 'Login'}</h1>
                {formError}
                {form}
                    <button
                        onClick={this.accountSwitchHandler}
                        className='cancelBtn'>
                        Switch to
                        {this.state.isSignUp? ' Login': ' Sign Up'}
                        </button>
            </div>
        )
    }
}



const mapStateToProps=state=>{
    return {
        showSpinner:state.showAuthSpinner,
        responseError:state.loginError,
    }
};

const mapDispatchToProps= dispatch=>{

    return{
        auth: (email,password,isSignUp,reduxHistory)=>dispatch(action.auth(email,password,isSignUp,reduxHistory)),
        resetLoginError: ()=>dispatch(action.resetLoginError())

    }
};


export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Auth,axios));