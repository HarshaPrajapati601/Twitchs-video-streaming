import React from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamCreate extends React.Component {
    renderInput({input, label}){
        return (
            <div className="feild">
                <label>{label}</label>
                <input {...input.input} />
            </div>
        )
    }
    render(){
        return (
            <form className="ui form"> 
                <Field name="title" component={this.renderInput} label="Enter title"/>
                <Field name="description" component={this.renderInput} label="Enter description"/>
            </form>
        )
    }
    
}

export default reduxForm({
    form: 'streamCreate'
}) (StreamCreate);