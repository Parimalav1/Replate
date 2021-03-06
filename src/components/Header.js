import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {login} from '../store/actions';

const Header = (props) => {
  // const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true: false);

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('username')
    window.location.reload();
    props.updateLoginState(false);
    // setLoggedIn(false);
};

  useEffect(() => {
    if (localStorage.getItem('token')) {
      props.updateLoginState(true);
    }
  }, [props])

  return (
    <nav id='nav'>
      <div id="heartHeader">
        <div id="heart">
          <img src="assets/replate13.png" alt='' />
        </div>
        <div id='headerTitle'>
          <h1>REPLATE</h1>
        </div>
      </div>
      <div className="header-container">
        { props.loggedIn && <div className="navele">
            <button className='logout' onClick={handleLogout}>Logout</button>
          </div>
        }
        { !props.loggedIn && <div className="navele">
            <Link to='/register'>Signup</Link>
          </div>
        }
        { !props.loggedIn && <div className="navele line">
            <Link to='/login'>Login</Link>
          </div>
        }
        {/* <div className="navele">
          <Link to="/home">Home</Link>
        </div> */}
        <div className="navele">
          <Link to="/home">Home</Link>
        </div>
        <div className="navele line">
          <Link to="/teamUp">Join Us</Link>
        </div>
        <div className="navele">
          <Link to="/about">About Us</Link>
        </div>
        <div className="navele line">
          <Link to='/volunteerPickup'>Volunteer</Link>
        </div>
        <div className="navele">
          <Link to='/donorsFood'>Donate</Link>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
      loggedIn: state.login,
  };
};

export default connect(
  mapStateToProps,
  {...login}
)(Header);