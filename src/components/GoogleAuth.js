import React from 'react';
import { connect } from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component{
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
                // this.setState({
                //     isSignedIn: this.auth.isSignedIn.get()
                // });
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);

            })
        })
    }

    onAuthChange = (isSignedIn) => {
        console.log("this",this.props)
        if (isSignedIn){
            this.props.signIn();
        } else{
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        }else if(this.props.isSignedIn === true){
            return(
                <div> 
                    <button className="ui red google button"
                    onClick={this.onSignOutClick}>
                        <i className="google icon">
                            Sign Out
                        </i>
                    </button>
                </div>
            )
        }else{
            return(
                <div>
                    <button className="ui red google button"
                    onClick={this.onSignInClick}>
                        <i className="google icon">
                            Sign In with Google
                        </i>
                    </button>
                </div>
            )
        }
    }
    render(){
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("state",state)
    return{ isSignedIn: state.auth.isSignedIn}
}
export default connect(mapStateToProps,{signOut,signIn}) (GoogleAuth);
//hooking up this component to header.js