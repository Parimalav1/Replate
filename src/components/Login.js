import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {Link, useHistory} from 'react-router-dom';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { ToastProvider } from 'react-toast-notifications';
import { useAlert } from 'react-alert';
import { login } from '../store/actions';
import {connect} from 'react-redux';
import '../login.css';

// const eye = <FontAwesomeIcon icon={faEye} />;

const initialLoginValues={
    username: '',
    password: '',
}

function LoginFormInner(props) {
    const [loginValues, setLoginValues] = useState(initialLoginValues);
    const [disabled, setDisabled] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    // const { addToast } = useToasts();
    const history = useHistory();
    const alert = useAlert();

    const onSubmit = event => {
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
    
      const { handleSubmit } = useForm({
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
                    return x
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
    }, [loginValues, schema]);

    return (
        <div>
            <div className="loginFormDiv">
                <form onSubmit={handleSubmit(onSubmit)}>

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
                    <FontAwesomeIcon onClick={togglePasswordVisiblity} icon={faEye} />
                </div>
                <div className="inputC">
                    <button type="submit" className='btn'disabled={disabled} >
                        Submit
                    </button>
                </div>
                <h4 className='h4'>
                    Not a user?  <Link className="links" to="/register">Signup</Link>
                </h4>
                <Link to='/register'><p>Create an account</p></Link>
                </form>
            </div>
            <div className="loginFormContainer">
                <p></p>
            </div>
        </div>

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

    