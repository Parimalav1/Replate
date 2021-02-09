import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import {axiosWithAuth} from '../utils/axiosWithAuth';
import UserCard from './UserCard';

const Users = (props) => {
    const[users, setUsers] = useState([]);
    const[donorList, setDonorList] = useState([]);
    const[volunList, setVolunList] = useState([]);

    const getUsers = () => {
        axiosWithAuth()
        .get('/api/users')
        .then((res) => {
            setUsers(res.data)
            let donors = res.data.filter(x => x.id !== 1 && (x.role === 'donor' || x.role === 'both'))
            setDonorList(donors)
            let volunteers = res.data.filter(y => y.id !== 1 && (y => y.role === 'volunteer' || y.role === 'both'))
            setVolunList(volunteers)
        })
        .catch(err => console.log('ERROR'));
    }

    useEffect(() => {
        getUsers();
    }, [props.state]);

    if (!users.length) {
        return <div>Loading users information...</div>;
    };

    return (
        <div className="UserList">
            {props.showVolunteers && props.showDonors && users.map(x => {
                return <UserCard key={x.id} user={x} />
            })}
            {props.showVolunteers && !props.showDonors && volunList.map(x => {
                return <UserCard key={x.id} user={x} />
            })}
            {!props.showVolunteers && props.showDonors && donorList.map(x => {
                return <UserCard key={x.id} user={x} />
            })}
      </div>
    )
};

const mapStateToProps = state => {
    return {
        state: state
    };
};

export default connect(
    mapStateToProps,
    {}
)(Users);