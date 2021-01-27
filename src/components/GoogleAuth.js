import React from 'react';

class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load('client:auth2',() => {
            window.gapi.client.init(
                {
                    ClientId:'860256405110-nv6rme82m6k1hr46hfa5n9d3nfm4unu3.apps.googleusercontent.com',
                    scope: 'email'
                }
            )
        })
    }
    render(){
        return (
            <div>googleAuth</div>
        )
    }
}

export default GoogleAuth;
//hooking up this component to header.js