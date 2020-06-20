import React from 'react';
import Modal from '../../components/UI/Modal';

const withErrorHandler =(WrappedComponent,axios)=>{

    return class extends React.Component{

        _isMounted = false;

        constructor(props){
            super(props);

            this.state={
                error:null
            };


            this.reqInterceptor = axios.interceptors.request.use(req=>{
                if(this._isMounted)
                    this.setState({error:null});
                return req;

            }, function (error) {
                if(this._isMounted)
                    this.setState({
                    error:error
                });
                return Promise.reject(error);
            });


            this.resInterceptor= axios.interceptors.response.use(value => value,error => {
                if(this._isMounted)
                    this.setState({error:error});
                return Promise.reject(error);

            })




        }

        componentDidMount(){
            this._isMounted = true;
        }


        componentWillUnmount(){
            this._isMounted = false;
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        resetError=()=>{
            this.setState({error:null})
        };

        render(){


            return(
                <>
                    <Modal show={this.state.error} backdropClick={this.resetError}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </>

            )

        }

    }

};


export default withErrorHandler;

