import React from 'react';
import Users from './Users';

export default function DonorList(){

    return(
        <div className='section'>
          <h1>List of donors</h1>
          <Users showVolunteers={false} showDonors={true} />
      </div>
    )
};