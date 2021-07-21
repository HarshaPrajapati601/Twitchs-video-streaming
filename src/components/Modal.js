import React from 'react';
import ReactDom from 'react-dom';

const Modal = (props) => {

    return ReactDom.createPortal(
        <div className="ui modals dimmer visible active" onClick={props.onDismiss}>
            <div className="ui standard modal visible active" onClick={ (e)=> e.stopPropagation()}>
                <div className="header" style={{display: 'flex', justifyContent: 'space-between'}}>
                    {props.title}
                    <i className="close icon" onClick={props.onDismiss}></i>
                </div>
                <div className="content">
                    {props.content}
                </div>
                <div className="actions">
                {props.actions}
                </div>
            </div>
        </div>,
        //ref to the element that i want to render it into
        document.querySelector('#modal')
    );
}

export default Modal;