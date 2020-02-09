import React from 'react';

const FormBtn = props => (
    <button {...props} style={{float:"right", marginBotton:10}} className="btn btn-success">
        {props.children}
    </button>
);
export default FormBtn;