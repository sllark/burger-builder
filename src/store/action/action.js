import axios from "../../axios-orders";
import axiosSignup from "axios";

export const addIngredients = (ing)=>{
    return {type:'INGREDIENTS',ingredients:ing}
};

export const setPrice = (price)=>{
    return {type:'PRICE',price:price}
};


export const fetchIngredients = ()=>{

    return function (dispatch) {
        axios.get('https://burger-builder-3de04.firebaseio.com/ingredients.json')
            .then(response=>{
                if(!response) return;
                dispatch(addIngredients(response.data));
            })
            .catch(error=>{
                dispatch({
                    type:'FETCH_ERROR',error:error
                });
            })
    }
};


export const startAuth = ()=>{

    return {
        type:'START_AUTH'
    }
};

export const authSuccess = (idToken,localId)=>{

    return {
        type:'AUTH_SUCCESS',
        idToken:idToken,
        localId:localId
    }
};

export const authFailed = (error)=>{

    return {
        type:'AUTH_FAILED',
        error:error
    }
};

export const logout = ()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expireDate');

    console.log('logout');

    return {
        type:'AUTH_TIMEOUT',
    }
};


export const authTimeout = (timeout)=>{

    return dispatch=>{
        setTimeout(()=>{
            return dispatch(logout())
        },Number(timeout)*1000);
    }
};

export const auth = (email,password,isSignUp,reduxHistory)=>{
    return function (dispatch,state) {
        dispatch(startAuth());
        const user={
            email:email,
            password:password,
            returnSecureToken:true
        };

        let url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCI8e7bc0bCvZB8wrHDRbz8zDbuD8OI7qI';

        if(!isSignUp)
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCI8e7bc0bCvZB8wrHDRbz8zDbuD8OI7qI';


        axiosSignup.post(url,user).then(reponse=>{

            if(!reponse) return;

            let expireDate = new Date(new Date().getTime() + reponse.data.expiresIn*1000);

            localStorage.setItem('token',reponse.data.idToken);
            localStorage.setItem('userId',reponse.data.localId);
            localStorage.setItem('expireDate',expireDate);

            dispatch(authSuccess(reponse.data.idToken,reponse.data.localId));
            dispatch(authTimeout(reponse.data.expiresIn));

            if(state().autheFromHome)
                reduxHistory.push('/checkout');
            else
                reduxHistory.push('/');
        })
            .catch(error=>{
                console.log(error.response);
                if(!(error.response)){
                    error.response={
                        'data':null
                    }
                }
                dispatch(authFailed(error.response.data));
            });
    }
};

export const resetLoginError = ()=>{
    return {
        type:'RESET_LOGIN_ERROR',
    }
};


export const homeToAuth = ()=>{
    return {
        type:'HOME_TO_AUTH',
    }
};

export const checkLocalStorage = ()=>{
    return dispatch => {
        const token=localStorage.getItem('token');

        if(!token){
            return null;
        }
        else {


            const userId=localStorage.getItem('userId');
            const expireDate=localStorage.getItem('expireDate');

            if((new Date(expireDate).getTime() - new Date().getTime()) > 0){

                dispatch(authSuccess(token,userId));
                dispatch(authTimeout(new Date(expireDate).getTime()/1000 - new Date().getTime()/1000));
            }else{
                dispatch(logout())
            }
        }

    }
};

