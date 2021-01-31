import React from 'react';
import {Field, reduxForm} from 'redux-form';

class StreamCreate extends React.Component {
    renderInput({input, label}){
        return (
            <div className="feild">
                <label>{label}</label>
                <input {...input} />
            </div>
        )
    }
    onSubmit(formValues){
        console.log(formValues);
    }

    render(){
        console.log(this.props)
        return (
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}> 
                <Field name="title" component={this.renderInput} label="Enter title"/>
                <Field name="description" component={this.renderInput} label="Enter description"/>
                <button className="ui button primary">Submit</button>
            </form>
            
        )
    }
    
}
const validate = (formValues) => {
    const errors={};
    if(!formValues.title){
        errors= "You must enter a title";
    }
    else if(!formValues.description){
        errors = "You must enter a description"
    }
}
export default reduxForm({
    form: 'streamCreate'
}) (StreamCreate);