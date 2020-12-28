import React from 'react';
import Users from './Users';

export default function VolunteerList(){

    return(
        <div className='section'>
          <h1>List of Volunteers</h1>
          <Users showVolunteers={true} showDonors={false} />
        </div>
      
    )
};