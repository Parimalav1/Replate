import React, {useState} from 'react';
// import { connect } from "react-redux";
import UpdateUser from './UpdateUser';
// import { user } from "../store/actions";


 export default function UserCard (props) {
    // const {id} = props;
    const [editing, setEditing] = useState(false);
    // console.log('UserCard:', props);
    

    return (
        
        <div className="UserCard">
            {/* <h2 id='number'>{props.user.id}</h2> */}
            <p >Name: {props.user.name}</p>
            <p>Username: {props.user.username}</p>
            <p>Address: {props.user.address}</p>
            <p>Phone-no: {props.user.phoneNumber}</p>
            {editing && <UpdateUser {...props} setEditing={setEditing}/>}
            {!editing && <button onClick={() => setEditing(true)}>Edit</button>}
        </div>
       
    )
};

// const mapStateToProps = state => {
//     return {
//         id: state.user.id,
//         name: state.res.name,
//         username: state.res.username,
//         error: state.error,
//         isLoading: state.isLoading
//     };
// };

// export default connect(
//     mapStateToProps,
//     {user}
// )(UserCard);

