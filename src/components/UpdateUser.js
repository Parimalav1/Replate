import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { settings } from "../store/actions";

const UpdateUser = (props)  => {
    const [values, setValues] = useState(props.user);

    const onSubmit = (e) => {
        e.preventDefault(); 
        const req = {
            ...values
        };
        props.updateUser({
            id: props.user.id,
            req: req
        });
        props.setEditing(false);
    };

    const onInputChange = (e) => {
        const {name, value} = e.target;
        setValues({
          ...values,
          [name]: value
        //   [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        settings.updateUser();
    }, []);

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input
                    placeholder='name'
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onInputChange}
                />
                <input
                    placeholder='Username'
                    type='text'
                    name="username"
                    value={values.username}
                    onChange={onInputChange}
                />
                <input
                    placeholder='address'
                    type='text'
                    name="address"
                    value={values.address || ''}
                    onChange={onInputChange}
                />
                <input
                    placeholder='phoneNumber'
                    type="text"
                    name="phoneNumber"
                    value={values.phoneNumber || ''}
                    onChange={onInputChange}
                />
                <button className='Btn'>Update</button>
                {props.error && props.error.length && <p>Failed to update: {props.error}</p>}
                <br />
            </form>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        name: state.name,
        username: state.username,
        address: state.address,
        phoneNumber: state.phoneNumber,
        updated: state.updated,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {...settings}
)(UpdateUser);