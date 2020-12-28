import React from 'react';
// import styled from 'styled-components';
import {Link} from 'react-router-dom';
import PostFoodItem from '../food/PostFoodItem';

// const Button = styled.button`
//   margin: 0px auto;
//   font-size: 1.1rem;
//   padding: 2px 10px;
// `;

export default function DonorsFood(){

    return(
        <div>
            <div className='donateDiv'>                
            </div>
            <div className='donorsLink'>
                <Link id='link' to='/donorList'>
                    <svg>
                            <rect height="70" width="400" fill="transparent" />
                    </svg>
                    <span>See All Donors</span>
                </Link>
                <PostFoodItem /> 
            </div>
        </div>
    )
};
