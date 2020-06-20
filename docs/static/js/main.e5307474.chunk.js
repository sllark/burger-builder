(this["webpackJsonp02-burger-builder"]=this["webpackJsonp02-burger-builder"]||[]).push([[0],{37:function(e,t,n){},39:function(e,t,n){e.exports=n.p+"static/media/27.1 burger-logo.png.b8503d26.png"},42:function(e,t,n){e.exports=n(75)},47:function(e,t,n){},48:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(21),o=n.n(i),s=(n(47),n(48),n(4)),c=n(5),l=n(7),u=n(6),d=n(8),p=n(16),m=n(2),h=n(39),g=n.n(h),f=n(11),E=function(e){return a.a.createElement(f.b,{to:"/",onClick:e.logoClick},a.a.createElement("img",{src:g.a,alt:"Burger Builder"}))},b=function(e){return a.a.createElement("ul",{className:"navList"},a.a.createElement("li",null,a.a.createElement(f.c,{to:"/",exact:!0,onClick:e.hideSideDrawer},"Burger Builder")),e.isAuthenticate?a.a.createElement("li",null,a.a.createElement(f.c,{to:"/orders",onClick:e.hideSideDrawer},"Orders")):null,a.a.createElement("li",null,e.isAuthenticate?a.a.createElement(f.c,{to:"/logout",onClick:e.hideSideDrawer},"Logout"):a.a.createElement(f.c,{to:"/auth",onClick:e.hideSideDrawer},"Authenticate")))},v=function(e){return e.show?a.a.createElement("div",{className:"backdrop",onClick:e.backdropClicked}):null},k=function(e){var t="sideDrawer";return e.show||(t+=" hidesideDrawer"),a.a.createElement(a.a.Fragment,null,a.a.createElement(v,{backdropClicked:e.backdropClick,show:e.show}),a.a.createElement("div",{className:t},a.a.createElement(E,{logoClick:e.backdropClick}),a.a.createElement(b,{isAuthenticate:e.isAuthenticate,hideSideDrawer:e.backdropClick})))},S=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.menuClickHandler=function(e){n.setState({showSideDrawer:!n.state.showSideDrawer})},n.backDropClickHandler=function(){n.setState({showSideDrawer:!n.state.showSideDrawer})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("header",{className:"toolbar"},a.a.createElement("div",null,a.a.createElement("div",{className:"menuContainer",onClick:this.menuClickHandler},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))),a.a.createElement(E,null),a.a.createElement(b,{isAuthenticate:this.props.isAuth}),a.a.createElement(k,{isAuthenticate:this.props.isAuth,show:this.state.showSideDrawer,backdropClick:this.backDropClickHandler}))}}]),t}(a.a.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(S,{isAuth:this.props.isLogged}),a.a.createElement("main",null,this.props.children))}}]),t}(a.a.Component),C=Object(m.b)((function(e){return{isLogged:null!==e.idToken}}))(O),w=n(3),j=n(41),I=function(e){var t=null;switch(e.type){case"BreadTop":t=a.a.createElement("div",{className:"BreadTop"},a.a.createElement("div",{className:"Seeds1"}),a.a.createElement("div",{className:"Seeds2"}));break;case"BreadBottom":t=a.a.createElement("div",{className:"BreadBottom"});break;case"Meat":t=a.a.createElement("div",{className:"Meat"});break;case"Cheese":t=a.a.createElement("div",{className:"Cheese"});break;case"Salad":t=a.a.createElement("div",{className:"Salad"});break;case"Bacon":t=a.a.createElement("div",{className:"Bacon"});break;default:t=null}return t},y=(n(54),Object(m.b)((function(e){return{ingredients:e.ingredients}}),(function(e){return{addIngredients:function(t){return e({type:"INGREDIENTS",ingredients:t})}}}))(Object(p.g)((function(e){if(!e.ingredients)return e.addIngredients({Bacon:0,Salad:0,Cheese:0,Meat:0}),null;var t=Object.keys(e.ingredients).map((function(t){return Object(j.a)(Array(e.ingredients[t])).map((function(e,n){return a.a.createElement(I,{type:t,key:t+n})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=a.a.createElement("p",null,"Please start adding ingredints")),a.a.createElement("div",{className:"burgerContainer"},a.a.createElement(I,{type:"BreadTop"}),t,a.a.createElement(I,{type:"BreadBottom"}))})))),N=function(e){return a.a.createElement("div",{className:"IngrediendControl"},a.a.createElement("p",null,e.ingredientControl),a.a.createElement("button",{onClick:function(){return e.incIng(e.ingredientControl)}},"More"),a.a.createElement("button",{onClick:function(){return e.decIng(e.ingredientControl)},disabled:e.isDisabled},"Less"))},T=function(e){var t=Object.keys(e.ingInfo);return a.a.createElement("div",{className:"Controller"},t.map((function(t){return a.a.createElement(N,{ingredientControl:t,key:t,incIng:e.inc,decIng:e.dec,isDisabled:e.ingInfo[t]})})),a.a.createElement("button",{className:"orderNowButton",disabled:e.isOrderBtnDisable,onClick:e.orderClickHandler},e.isAuth?"Order Now":"Sign Up to Order"))},A=function(e){var t="Modal";return e.show||(t+=" hideModal"),a.a.createElement(a.a.Fragment,null,a.a.createElement(v,{backdropClicked:e.backdropClick,show:e.show}),a.a.createElement("div",{className:t},e.children))},D=Object(m.b)((function(e){return{ingredients:e.ingredients,price:e.price}}))((function(e){var t=Object.keys(e.ingredients).map((function(t){return a.a.createElement("li",{key:t},t+": "+e.ingredients[t])}));return a.a.createElement("div",{className:"orderDiv"},a.a.createElement("h2",null,"Your Order"),a.a.createElement("p",null,"A dlicious Burger with following Ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("h3",null,"Price: ",e.price.toFixed(2)," $"),a.a.createElement("h3",null,"Continue to checkout?"),a.a.createElement("button",{className:"cancelBtn",onClick:e.cancelClick},"CANCEL"),a.a.createElement("button",{className:"contBtn",onClick:e.continueOrder},"CONTINUE"))})),F=(n(55),function(){return a.a.createElement("div",{className:"lds-ring"},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))}),H=function(e,t){return function(n){function r(e){var n;return Object(s.a)(this,r),(n=Object(l.a)(this,Object(u.a)(r).call(this,e)))._isMounted=!1,n.resetError=function(){n.setState({error:null})},n.state={error:null},n.reqInterceptor=t.interceptors.request.use((function(e){return n._isMounted&&n.setState({error:null}),e}),(function(e){return this._isMounted&&this.setState({error:e}),Promise.reject(e)})),n.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(e){return n._isMounted&&n.setState({error:e}),Promise.reject(e)})),n}return Object(d.a)(r,n),Object(c.a)(r,[{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(A,{show:this.state.error,backdropClick:this.resetError},this.state.error?this.state.error.message:null),a.a.createElement(e,this.props))}}]),r}(a.a.Component)},B=n(18),L=n.n(B),U=L.a.create({baseURL:"https://burger-builder-3de04.firebaseio.com/"}),M=function(e){return{type:"INGREDIENTS",ingredients:e}},R=function(e){return{type:"PRICE",price:e}},_=function(){return function(e){U.get("https://burger-builder-3de04.firebaseio.com/ingredients.json").then((function(t){t&&e(M(t.data))})).catch((function(t){e({type:"FETCH_ERROR",error:t})}))}},x=function(e,t){return{type:"AUTH_SUCCESS",idToken:e,localId:t}},P=function(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expireDate"),console.log("logout"),{type:"AUTH_TIMEOUT"}},V=function(e){return function(t){setTimeout((function(){return t(P())}),1e3*Number(e))}},z={Bacon:.7,Salad:.3,Cheese:.4,Meat:1.3},q=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).incIngredient=function(e){var t=n.props.ingredients[e];t++;var r=Object(w.a)({},n.props.ingredients);r[e]=t;var a=n.props.price+z[e];n.props.addIngredients(r),n.props.setPrice(a)},n.decIngredient=function(e){var t=n.props.ingredients[e];if(0!==t){t--;var r=Object(w.a)({},n.props.ingredients);r[e]=t;var a=n.props.price-z[e];n.props.addIngredients(r),n.props.setPrice(a)}},n.orderClickHandler=function(){n.props.isAuthenticated?n.setState({showSummaryModal:!0}):(n.props.movingToAuth(),n.props.history.push("/auth"))},n.backToOrderClickHandler=function(){n.setState({showSummaryModal:!1})},n.procedOrder=function(){n.props.history.push({pathname:"/checkout"})},n.props.ingredients||e.fetchIngredients(),n.state={showSummaryModal:!1,showSpinner:!0},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({showSpinner:!1})}},{key:"render",value:function(){var e,t;if(this.state.showSpinner?e=a.a.createElement(F,null):this.props.ingredients&&(e=a.a.createElement(D,{continueOrder:this.procedOrder,cancelClick:this.backToOrderClickHandler})),t=a.a.createElement(F,null),this.props.ingredients){var n=Object(w.a)({},this.props.ingredients),r=!0;for(var i in n)n[i]=n[i]<=0,n[i]||(r=!1);t=a.a.createElement(a.a.Fragment,null,a.a.createElement(y,null),a.a.createElement("h2",{className:"price"},this.props.price.toFixed(2)+" $"),a.a.createElement(T,{inc:this.incIngredient,dec:this.decIngredient,ingInfo:n,isAuth:this.props.isAuthenticated,isOrderBtnDisable:r,orderClickHandler:this.orderClickHandler}))}else this.props.error&&(t=a.a.createElement("h1",null,"Can't Load Burder."));return a.a.createElement(a.a.Fragment,null,a.a.createElement(A,{show:this.state.showSummaryModal,backdropClick:this.backToOrderClickHandler},e),t)}}]),t}(a.a.Component),Z=Object(m.b)((function(e){return{ingredients:e.ingredients,price:e.price,error:e.error,isAuthenticated:null!==e.idToken}}),(function(e){return{addIngredients:function(t){return e(M(t))},setPrice:function(t){return e(R(t))},fetchIngredients:function(){return e(_())},movingToAuth:function(){return e({type:"HOME_TO_AUTH"})}}}))(H(q,U)),G=(n(73),Object(m.b)((function(e){return{price:e.price}}))((function(e){return a.a.createElement("div",{className:"checkoutBurgerContainer"},a.a.createElement("h1",null,"The best Burger you ever tasted."),a.a.createElement(y,null),a.a.createElement("h4",{className:"price"},"PRICE: ",e.price.toFixed(2)," USD"),a.a.createElement("div",{className:"btnWrapper"},a.a.createElement("button",{className:"cancelBtn",onClick:function(){e.history.replace("/")}},"BACK"),a.a.createElement("button",{className:"contBtn",onClick:e.continueClick},"CONTINUE")))}))),W=n(15),$=(n(37),RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)),Y=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={name:"",email:"",street:"",postal:"",route:"Fastest",showSpinner:!1,formFieldsValidation:{name:!1,email:!1,street:!1,postal:!1},showError:!1},n.handleSubmit=function(e){e.preventDefault(),n.setState({showSpinner:!0});var t=!0;for(var r in n.state.formFieldsValidation)t=n.state.formFieldsValidation[r]&&t;if(t){n.setState({showError:!1});var a={ingredients:n.props.ingredients,price:n.props.price,name:n.state.name,adress:{street:n.state.street,postal:n.state.postal},email:n.state.email,route:n.state.route,userId:n.props.userId};U.post("/orders.json?auth="+n.props.token,a).then((function(e){e&&(n.props.addIngredients({Bacon:0,Salad:0,Cheese:0,Meat:0}),n.props.setPrice(1),n.setState({showSpinner:!1}),n.props.history.push("/"))})).catch((function(e){n.setState({showSpinner:!1})}))}else n.setState({showSpinner:!1,showError:!0})},n.inputChangedHandler=function(e){var t;e.target.classList.contains("touched")||e.target.classList.add("touched");var r=e.target,a=r.name,i=r.value,o=Object(w.a)({},n.state),s=Object(w.a)({},o.formFieldsValidation);switch(a){case"name":i.trim().length>=2?s[a]=!0:s[a]=!1;break;case"email":$.test(i)?s[a]=!0:s[a]=!1;break;case"street":i.trim().length>2?s[a]=!0:s[a]=!1;break;case"postal":i.trim().length>4&&i.length<=6&&!isNaN(Number(i))?s[a]=!0:s[a]=!1;break;default:i.trim().length>=3?s[a]=!0:s[a]=!1}e.persist(),n.setState((t={},Object(W.a)(t,a,i),Object(W.a)(t,"formFieldsValidation",s),t),(function(){!1===n.state.formFieldsValidation[a]?(e.target.classList.add("inputError"),e.target.classList.remove("inputSuccess")):n.state.formFieldsValidation[a]?(e.target.classList.remove("inputError"),e.target.classList.add("inputSuccess")):"route"===e.target.name&&(e.target.classList.remove("inputError"),e.target.classList.add("inputSuccess"))}))},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=a.a.createElement("form",{className:"Form",onSubmit:this.handleSubmit},a.a.createElement("input",{type:"text",name:"name",placeholder:"Your Name",onChange:this.inputChangedHandler,value:this.state.name}),a.a.createElement("input",{type:"text",name:"email",placeholder:"Your Email",onChange:this.inputChangedHandler,value:this.state.email}),a.a.createElement("input",{type:"text",name:"street",placeholder:"Street Number",onChange:this.inputChangedHandler,value:this.state.street}),a.a.createElement("input",{type:"text",name:"postal",placeholder:"Postal Code",onChange:this.inputChangedHandler,value:this.state.postal}),a.a.createElement("select",{name:"route",onChange:this.inputChangedHandler},a.a.createElement("option",{value:"Fastest"},"Fastest"),a.a.createElement("option",{value:"Cheapest"},"Cheapest")),a.a.createElement("button",{type:"submit",className:"contBtn"},"Submit"));this.state.showSpinner&&(e=a.a.createElement(F,null));var t=null;return this.state.showError&&(t=a.a.createElement("p",{className:"errorMesssage"},"Please fill the Fields correctly and then submit the Form.")),a.a.createElement("div",{className:"formContainer"},t,e)}}]),t}(a.a.Component),J=Object(m.b)((function(e){return{ingredients:e.ingredients,price:e.price,token:e.idToken,userId:e.localId}}),(function(e){return{addIngredients:function(t){return e(M(t))},setPrice:function(t){return e(R(t))}}}))(H(Y,U)),K=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).continueCheckout=function(){var e=0;for(var t in n.props.ingredients)Number(n.props.ingredients[t])>0&&e++;0===e?n.props.history.push("/"):n.props.history.replace("/checkout/contact-data")},e.ingredients||(console.log("setting ingredients to zero if not set"),e.fetchIngredients()),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=a.a.createElement(p.a,{to:"/"});return this.props.ingredients&&(e=a.a.createElement(a.a.Fragment,null,a.a.createElement(G,Object.assign({},this.props,{continueClick:this.continueCheckout})),a.a.createElement(p.b,{path:this.props.match.path+"/contact-data",render:function(e){return a.a.createElement(J,e)}}))),e}}]),t}(a.a.Component),Q=Object(m.b)((function(e){return{ingredients:e.ingredients,price:e.price}}),(function(e){return{fetchIngredients:function(){return e(_())}}}))(K),X=function(e){var t=[];for(var n in e.ingredients)t.push(n+" : "+e.ingredients[n]+" ");return a.a.createElement("div",{className:"order"},a.a.createElement("p",null,"Ingredients: ",a.a.createElement("strong",null,t.join(" , "))),a.a.createElement("p",null,"Price: ",a.a.createElement("strong",null,"USD ",e.price.toFixed(2))))},ee=(n(74),function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={showSpinner:!0,orders:[]},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="?auth="+this.props.token+'&orderBy="userId"&equalTo="'+this.props.userId+'"';U.get("/orders.json"+t).then((function(t){var n=[];for(var r in t.data)n.push(Object(w.a)({},t.data[r],{id:r}));e.setState({showSpinner:!1,orders:n})})).catch((function(t){console.log(t),e.setState({showSpinner:!1})}))}},{key:"render",value:function(){var e;this.state.showSpinner?e=a.a.createElement(F,null):e=this.state.orders.reverse().map((function(e){return a.a.createElement(X,{price:e.price,ingredients:e.ingredients,key:e.id})}));return a.a.createElement("div",{className:"OrdersContainer"},e)}}]),t}(a.a.Component)),te=Object(m.b)((function(e){return{token:e.idToken,userId:e.localId}}))(H(ee,U)),ne=RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),re=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={email:"",password:"",formFieldsValidation:{email:!1,password:!1},showError:!1,isSignUp:!0},n.handleSubmit=function(e){e.preventDefault(),n.setState({showSpinner:!0});var t=!0;for(var r in n.state.formFieldsValidation)t=n.state.formFieldsValidation[r]&&t;t?(n.setState({showError:!1}),n.props.auth(n.state.email,n.state.password,n.state.isSignUp,n.props.history),n.setState({email:"",password:"",showSpinner:!1}),n.resetInputField()):n.setState({showSpinner:!1,showError:!0})},n.resetInputField=function(){Object.keys(n.state.formFieldsValidation).forEach((function(e){var t=document.getElementsByName(e)[0];t.classList.remove("touched"),t.classList.remove("inputSuccess")}))},n.inputChangedHandler=function(e){var t;e.target.classList.contains("touched")||e.target.classList.add("touched");var r=e.target,a=r.name,i=r.value,o=Object(w.a)({},n.state),s=Object(w.a)({},o.formFieldsValidation);switch(e.persist(),a){case"password":i.trim().length>6?s[a]=!0:s[a]=!1;break;case"email":ne.test(i)?s[a]=!0:s[a]=!1;break;default:i.trim().length>=6?s[a]=!0:s[a]=!1}n.setState((t={},Object(W.a)(t,a,i),Object(W.a)(t,"formFieldsValidation",s),t),(function(){!1===n.state.formFieldsValidation[a]?(e.target.classList.add("inputError"),e.target.classList.remove("inputSuccess")):n.state.formFieldsValidation[a]?(e.target.classList.remove("inputError"),e.target.classList.add("inputSuccess")):"route"===e.target.name&&(e.target.classList.remove("inputError"),e.target.classList.add("inputSuccess"))}))},n.accountSwitchHandler=function(){n.props.resetLoginError(),n.setState((function(e){return{isSignUp:!e.isSignUp}}))},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=a.a.createElement(F,null);this.props.showSpinner||(e=a.a.createElement("form",{className:"Form",onSubmit:this.handleSubmit},a.a.createElement("input",{type:"text",name:"email",placeholder:"Your Email",onChange:this.inputChangedHandler,value:this.state.email}),a.a.createElement("input",{type:"password",name:"password",placeholder:"Password",onChange:this.inputChangedHandler,value:this.state.password}),a.a.createElement("button",{type:"submit",className:"contBtn"},this.state.isSignUp?"Sign Up":"Login")));var t=null;return this.state.showError&&(t=a.a.createElement("p",{className:"errorMesssage"},"Please fill the Fields correctly and then submit the Form.")),this.props.responseError&&(t=a.a.createElement("p",{className:"errorMesssage"},this.props.responseError.error.errors[0].reason," !! ",this.props.responseError.error.message)),a.a.createElement("div",{className:"formContainer"},a.a.createElement("h1",null,this.state.isSignUp?"Sign Up":"Login"),t,e,a.a.createElement("button",{onClick:this.accountSwitchHandler,className:"cancelBtn"},"Switch to",this.state.isSignUp?" Login":" Sign Up"))}}]),t}(a.a.Component),ae=Object(m.b)((function(e){return{showSpinner:e.showAuthSpinner,responseError:e.loginError}}),(function(e){return{auth:function(t,n,r,a){return e(function(e,t,n,r){return function(a,i){a({type:"START_AUTH"});var o={email:e,password:t,returnSecureToken:!0},s="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCI8e7bc0bCvZB8wrHDRbz8zDbuD8OI7qI";n||(s="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCI8e7bc0bCvZB8wrHDRbz8zDbuD8OI7qI"),L.a.post(s,o).then((function(e){if(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("userId",e.data.localId),localStorage.setItem("expireDate",t),a(x(e.data.idToken,e.data.localId)),a(V(e.data.expiresIn)),i().autheFromHome?r.push("/checkout"):r.push("/")}})).catch((function(e){console.log(e.response),e.response||(e.response={data:null}),a(function(e){return{type:"AUTH_FAILED",error:e}}(e.response.data))}))}}(t,n,r,a))},resetLoginError:function(){return e({type:"RESET_LOGIN_ERROR"})}}}))(H(re,L.a)),ie=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.logout()}},{key:"render",value:function(){return a.a.createElement(p.a,{to:"/"})}}]),t}(a.a.Component),oe=Object(m.b)(null,(function(e){return{logout:function(){return e(P())}}}))(ie),se=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).props.checkLocalStorage(),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=a.a.createElement(p.d,null,a.a.createElement(p.b,{path:"/auth",excat:!0,component:ae}),a.a.createElement(p.b,{path:"/",component:Z}),a.a.createElement(p.a,{to:"/"}));return this.props.isAuth&&(e=a.a.createElement(p.d,null,a.a.createElement(p.b,{path:"/checkout",excat:!0,component:Q}),a.a.createElement(p.b,{path:"/orders",excat:!0,component:te}),a.a.createElement(p.b,{path:"/logout",excat:!0,component:oe}),a.a.createElement(p.b,{path:"/",component:Z}),a.a.createElement(p.a,{to:"/"}))),a.a.createElement(C,null,e)}}]),t}(a.a.Component),ce=Object(m.b)((function(e){return{isAuth:null!==e.idToken}}),(function(e){return{checkLocalStorage:function(){return e((function(e){var t=localStorage.getItem("token");if(!t)return null;var n=localStorage.getItem("userId"),r=localStorage.getItem("expireDate");new Date(r).getTime()-(new Date).getTime()>0?(e(x(t,n)),e(V(new Date(r).getTime()/1e3-(new Date).getTime()/1e3))):e(P())}))}}}))(se),le=n(20),ue={ingredients:null,price:1,error:null,orderError:null,idToken:null,localId:null,loginError:null,showAuthSpinner:!1,autheFromHome:!1},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INGREDIENTS":return Object(w.a)({},e,{ingredients:Object(w.a)({},t.ingredients),error:null});case"PRICE":return Object(w.a)({},e,{price:t.price});case"FETCH_ERROR":return Object(w.a)({},e,{error:t.error});case"START_AUTH":return Object(w.a)({},e,{showAuthSpinner:!0});case"AUTH_SUCCESS":return Object(w.a)({},e,{idToken:t.idToken,localId:t.localId,showAuthSpinner:!1,loginError:null});case"AUTH_FAILED":return Object(w.a)({},e,{showAuthSpinner:!1,loginError:t.error});case"AUTH_TIMEOUT":return Object(w.a)({},e,{idToken:null,localId:null,loginError:null,autheFromHome:!1});case"RESET_LOGIN_ERROR":return Object(w.a)({},e,{loginError:null});case"HOME_TO_AUTH":return Object(w.a)({},e,{autheFromHome:!0});default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=Object(le.c)(de,Object(le.a)((function(e){var t=e.dispatch,n=e.getState;return function(e){return function(r){return"function"===typeof r?r(t,n):e(r)}}}))),me=a.a.createElement(f.a,{basename:"/burger-builder/"},a.a.createElement(m.a,{store:pe},a.a.createElement(ce,null)));o.a.render(me,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.e5307474.chunk.js.map