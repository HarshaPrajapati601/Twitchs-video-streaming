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
    onSubmit(formValues){
        console.log(formValues);
    }

    render(){
        return (
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}> 
                <Field name="title" component={this.renderInput} label="Enter title"/>
                <Field name="description" component={this.renderInput} label="Enter description"/>
                <button className="ui button primary">Submit</button>
            </form>
            
        )
    }
    
}

export default reduxForm({
    form: 'streamCreate'
}) (StreamCreate);