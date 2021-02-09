import React from 'react';
import {Link} from 'react-router-dom';
import PostFoodItem from '../food/PostFoodItem';

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
