import React from 'react';

class GoogleAuth extends React.Component{
    state = {
        isSignedIn: null
    }
    componentDidMount(){
        window.gapi.load('client:auth2',() => {
            window.gapi.client.init(
                {
                    clientId:'860256405110-nv6rme82m6k1hr46hfa5n9d3nfm4unu3.apps.googleusercontent.com',
                    scope: 'email'
                }
            ).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                //current authentication status of user if signed in or not
                this.setState({
                    state: this.auth.isSignedIn.get()
                })

            })
        })
    }

    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return(
                <div>Don't know if signedin or not</div>
            )
        }else if(this.state.isSignedIn === true){
            return(
                <div>Signed in</div>
            )
        }else{
            return(
                <div>Not signed in</div>
            )
        }
    }
    render(){
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

export default GoogleAuth;
//hooking up this component to header.js