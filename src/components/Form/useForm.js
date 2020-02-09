// useForm is a FUNCTION which takes 1 perameter: callback
// callback is a FUNCTION that is passed into this 'custom Hook' from the component
// callback will be used whenever the form submits
//////////////////////////////////////////////////


import { useState } from 'react';

const useForm = (callback) => {

    const [values, setValues] = useState({});

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        callback();
    };

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    };

    return{
        handleChange,
        handleSubmit,
        values,
    }

};
export default useForm;