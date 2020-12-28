// form for the login
import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {Link, useHistory} from 'react-router-dom';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { ToastProvider } from 'react-toast-notifications';
import { useAlert } from 'react-alert';
import { login } from '../store/actions';
import {connect} from 'react-redux';

// styles for the login
const I = styled.i`
  padding: 0px 5px;
`;
const DivFormGroup = styled.div`
  width: 30%;
  margin: 200px 35% 0;
  padding: 0 10px;
  border: 1px solid #173d53;
  background-color: #25b3a7;
  color: #173d53;
  border-radius: 5px;
`;

const DivLabel = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;
const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  backgoundcolor: "green";
`;
const Button = styled.button`
  margin: 0px auto;
  font-size: 1.1rem;
  padding: 2px 10px;
`;

const H4 = styled.h4`
  margin: 5px auto;
  padding: 0;
`;

const eye = <FontAwesomeIcon icon={faEye} />;

const initialLoginValues={
    username: '',
    password: '',
}
const initialLoginErrors = {
    username: '',
    password: '',
}

function LoginFormInner(props) {
    const [loginValues, setLoginValues] = useState(initialLoginValues);
    const [formErrors, setFormErrors] = useState(initialLoginErrors);
    const [disabled, setDisabled] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    // const { addToast } = useToasts();
    const history = useHistory();
    const alert = useAlert();

    const onSubmit = event => {
        event.preventDefault();
        getUserData();
        setLoginValues(initialLoginValues)
    };

    const schema = yup.object().shape({
        username: yup.string()
                .min(6, "Username must be at least 6 characters long.")
                .required("Username is required"),
        password: yup.string()
                .min(6, "Password must be at least 6 characters long.")
                .required("Should be a mix of letters and numbers"),
    });
    
      const { register, handleSubmit } = useForm({
        validationSchema: schema,
    });

    const onInputChange = (e) => {
        const {name, value} = e.target;
        setLoginValues({
          ...loginValues,
          [name]: value
        //   [e.target.name]: e.target.value,
        });
    };

    const getUserData = () => {
        axiosWithAuth()
        .post('api/auth/login', loginValues)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            // localStorage.setItem('userId', res.data.id)
            props.updateLoginState(true);
            localStorage.setItem('username', loginValues.username)
            axiosWithAuth()
            .get('api/users')
            .then(res => {
                res.data.map(x => {
                    if(x.username === loginValues.username) {
                        localStorage.setItem('userId', x.id)
                    }
                })
                //addToast('Saved Successfully', { appearance: 'success' })
            })
            history.push("/")
        })
        .catch((err) => {
            alert.show('Login failed: wrong password. ' + err.message);
            //addToast(err.message, { appearance: 'error' })
        });
    };

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    useEffect(() => {
        schema.isValid(loginValues).then((valid) => {
            setDisabled(!valid);
        });
    }, [loginValues]);

    return (
        <form  onSubmit={onSubmit}>
            <div className="form-container">
            </div>
            <div className='form-div'>
                <h2>LOGIN</h2>
                <div className="inputC">
                    <input 
                        required
                        type='text'
                        placeholder='Username'
                        name='username'
                        value={loginValues.username}
                        onChange={onInputChange}
                    />
                    {/* <div className="loginError">{formErrors.username}</div> */}
                </div>
                <div className="inputC" >
                    <input
                        required
                        value={loginValues.password}
                        onChange={onInputChange}
                        placeholder='Password'
                        name="password"
                        type={passwordShown ? "text" : "password"}  
                    />  
                    {/* <div className="loginError">{formErrors.password}</div> */}
                    {/* <I onClick={togglePasswordVisiblity}>{eye}</I> */}
                    <FontAwesomeIcon onClick={togglePasswordVisiblity} icon={faEye} />

                </div>
                <div className="inputC">
                    <button type="submit" className='btn'disabled={disabled} >
                        Submit
                    </button>
                </div>
                <H4>
                    Not a user?  <Link className="links" to="/register">Signup</Link>
                </H4>
                <Link to='/register'><p>Create an account</p></Link>
            </div>
        </form>
    );
};

function Login(props) {
    return (
        <ToastProvider>
            <LoginFormInner {...props}/>
        </ToastProvider>
    );
};

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
    };
};

export default connect(
    mapStateToProps,
    {...login}
)(Login);

    