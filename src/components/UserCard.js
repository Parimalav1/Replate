import React, {useState} from 'react';
import UpdateUser from './UpdateUser';

 export default function UserCard (props) {
    const [editing, setEditing] = useState(false);
    // console.log('UserCard:', props);
    

    return (
        
        <div className="UserCard">
            <p >Name: {props.user.name}</p>
            <p>Username: {props.user.username}</p>
            <p>Address: {props.user.address}</p>
            <p>Phone-no: {props.user.phoneNumber}</p>
            {editing && <UpdateUser {...props} setEditing={setEditing}/>}
            {!editing && <button onClick={() => setEditing(true)}>Edit</button>}
        </div>
       
    )
};


