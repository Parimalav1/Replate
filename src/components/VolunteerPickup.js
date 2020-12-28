import React from 'react';
// import styled from 'styled-components';
import FoodItems from '../food/FoodItems';
import {Link} from 'react-router-dom';

// const Button = styled.button`
//   margin: 0px auto;
//   font-size: 1.1rem;
//   padding: 2px 10px;
// `;

export default function VolunteerPickup(){
    
    return(
        <div >
            <div className='volunteersLink'>
                <Link id='link' to='/volunteerList'>
                        <svg>
                            <rect height="70" width="400" fill="transparent" />
                        </svg>
                    <span>See All Volunteers</span>  
                </Link>
            </div>
            <h2>Food</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='th'>Name</th>
                        <th className='th'>Type</th>
                        <th className='th'>Quantity</th>
                        <th className='th'>Donor Name</th>
                        <th className='th'>Volunteer Name</th>
                        <th className='th'>Pickup Time</th>
                        <th className='th'>Pickup</th>
                        <th className='th'>Edit</th>
                    </tr>
                </thead>
                <FoodItems />
            </table>
        </div>
    )
};