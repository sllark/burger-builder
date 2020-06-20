
const initState={
    ingredients:null,
    price:1,
    error:null,
    orderError:null,
    idToken:null,
    localId:null,
    loginError:null,
    showAuthSpinner:false,
    autheFromHome:false
};


const reducer = (state=initState,action)=>{

    switch (action.type) {
        case "INGREDIENTS":
            return {
                ...state,
                ingredients: {
                    ...action.ingredients
                },
                error: null
            };
        case "PRICE":
            return {
                ...state,
                price: action.price
            };
        case "FETCH_ERROR":
            return {
                ...state,
                error: action.error
            };
        case "START_AUTH":
            return {
                ...state,
                showAuthSpinner: true
            };
        case "AUTH_SUCCESS":
            return {
                ...state,
                idToken: action.idToken,
                localId: action.localId,
                showAuthSpinner: false,
                loginError:null
            };
        case "AUTH_FAILED":
            return {
                ...state,
                showAuthSpinner: false,
                loginError: action.error
            };
        case "AUTH_TIMEOUT":
            return {
                ...state,
                idToken:null,
                localId:null,
                loginError:null,
                autheFromHome: false,
            };
        case "RESET_LOGIN_ERROR":
            return {
                ...state,
                loginError: null,
            };
        case "HOME_TO_AUTH":
            return {
                ...state,
                autheFromHome: true,
            };


        default:
            return state;
    }


};


export default reducer;