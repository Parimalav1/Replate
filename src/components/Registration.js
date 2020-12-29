import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, input } from "react-hook-form";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { object, string} from "yup";
import { login } from '../store/actions';
import {connect} from 'react-redux';

// initial values
const initialFormValues = {
  name: "",
  username: "",
  password: "",
  phoneNumber: '',
  address: "",
};
const initialFormErrors = {
  name: "",
  username: "",
  password: "",
  phoneNumber: '',
  address: "",
}

const initialUsers = []
const initialDisabled = true    

const Registration = (props) => {
    // state
    const [users, setUsers] = useState(initialUsers)
    const [formErrors] = useState(initialFormErrors)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [disabled, setDisabled] = useState(initialDisabled);

    //additional hooks (not side effects)
    const history = useHistory()

    // axios calls
    const postNewUser = newUser => {
        axiosWithAuth()
        .post("api/auth/register", newUser)
        .then(res => {
          setUsers([res.data, ...users])
          localStorage.setItem('userId', res.data.id)
          localStorage.setItem('username', res.data.username)
          setFormValues(initialFormValues)
          console.log("Registration data sent to server:", res.data)
          axiosWithAuth()
          .post("api/auth/login", newUser)
          .then(res => {
            localStorage.setItem('token', res.data.token)
            props.updateLoginState(true);

            history.push("/");
          })
        })
        .catch(err => {
          console.log("Failed to register, error:", err)
        })
      }

    // form validation via yup //props destructuring
    const schema = object().shape({
      name: string()
              .min(6, "Firstname and last name must be at least 6 characters long.")
              .required("Firstname and last name are required"),
      username: string()
              .min(6, "Username must be at least 6 characters long.")
              .required("Username is required"),
      password: string()
              .min(6, "Password must be at least 6 characters long.")
              .required("Should be a mix of letters and numbers"),
      phoneNumber: string()   
              .min(10, 'Phonenumber must be at least 10 numbers')
              .required('A phone number is required')
              .typeError("That doesn't look like a phone number"),
      address: string()
              .min(3, "Address must be at least 3 characters long.")
              .required("Address is required"),
    });
  
    const { handleSubmit } = useForm({
      validationSchema: schema,
    });

    const onInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
          ...formValues,
          [name]: value
        //   [e.target.name]: e.target.value,
        });
    };

    // form functionality
    const onSubmit = (e) => {
        //e.preventDefault()
        const newUser = {
          name: formValues.name.trim(),
          username: formValues.username.trim(),
          password: formValues.password.trim(),
          phoneNumber: formValues.phoneNumber.trim(),
          address: formValues.address.trim(),
        } 
        postNewUser(newUser)
    };  

    //side effects
    useEffect(() => {
        schema.isValid(formValues).then(valid => {
          setDisabled(!valid);
        });
    }, [formValues, schema]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='formDiv'>
            <div className='form'>
                <h2 id='h2'>Create An Account</h2>
                <div className="inputC">
                  <input 
                      required
                      type='text' 
                      placeholder='Full Name'
                      name='name'
                      onChange={onInputChange}
                  />
                </div>
                    <div className="loginError">{formErrors.first_name}</div>
                  <div className="inputC">
                    <input 
                      required
                      type='text'
                      placeholder='Username'
                      name='username'
                      onChange={onInputChange}
                    />
                  </div>
                        <div className="loginError">{formErrors.username}</div>
                    <div className="inputC">
                      <input 
                        required
                        onChange={onInputChange}
                        placeholder='Password'
                        name="password"
                        type='password'
                      />
                    </div>
                    <div className="loginError">{formErrors.password}</div>
                    <div className="inputC">
                      <input 
                          required
                          type='text' 
                          placeholder='Phone No'
                          name='phoneNumber'
                          onChange={onInputChange}
                      />
                    </div>
                    <div className="loginError">{formErrors.last_name}</div>
                    <div className="inputC">
                      <input 
                          required
                          type='text' 
                          placeholder='Address'
                          name='address'
                          onChange={onInputChange}
                      />
                    </div>
                    <div className="loginError">{formErrors.email}</div>
                <button className="btn" disabled={disabled}>Register</button>
                <p id="para-one">{formErrors.username}</p>
                <p id="para-two">{formErrors.password}</p>
              </div>
            </div>
        </form>
    )
  };

// export default Registration;
const mapStateToProps = state => {
  return {
      loggedIn: state.loggedIn,
  };
};

export default connect(
  mapStateToProps,
  {...login}
)(Registration);
