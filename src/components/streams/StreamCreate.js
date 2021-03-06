import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect} from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
    
    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.toched ? 'error':''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                <div>{this.renderError(meta)}</div>
            </div>
        )
    }

    renderError  ({error, touched}) {
       if(touched && error){
        return(
            <div className="ui error message">
                <div className="header">{error}</div>
            </div>
            )
       }
    }
    onSubmit(formValues){
        console.log(formValues);
        this.props.createStream();
    }

    render(){
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}> 
                <Field name="title" component={this.renderInput} label="Enter title"/>
                <Field name="description" component={this.renderInput} label="Enter description"/>
                <button className="ui button primary">Submit</button>
            </form>       
        )
    }
    
}
const validate = formValues => {

    const errors={};
    if(!formValues.title){
        errors.title = "You must enter a title";
    }
    if(!formValues.description){
        errors.description  = "You must enter a description"
    }
    return errors;
}

const mapStateToProps = (state) => {
    return { state }
}
const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);
export default connect(null,{createStream})(formWrapped);