import React, { useState } from "react";
import { connect } from "react-redux";
import { food } from "../store/actions";

const UpdateFood = (props)  => {
    const [values, setValues] = useState({
        name: props.name,
        quantity: props.quantity,
        type: props.type
    });

    const onSubmit = (e) => {
        e.preventDefault(); 
        const req = {
            ...values,
        };
        props.updateFood({
            id: props.id,
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

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input
                    placeholder='Name'
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onInputChange}
                />
                <input
                    placeholder='Type'
                    type="text"
                    name="type"
                    value={values.type}
                    onChange={onInputChange}
                />
                <input
                    placeholder='Quantity'
                    type="text"
                    name="quantity"
                    value={values.quantity}
                    onChange={onInputChange}
                />
                <button type="submit" className='Btn'>Update</button>
                {props.error && props.error.length && <p>Failed to update: {props.error}</p>}
                <br />
            </form>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        updated: state.updated,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {...food}
)(UpdateFood);
