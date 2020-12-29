import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import {food} from '../store/actions';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import UpdateFood from './UpdateFood';
import Moment from 'react-moment';

const FoodCard = (props) => {
    const [dateOfPickup, setDateOfPickup] = useState(new Date());
    const [pickingFood, setPickingFood] = useState(false);
    const [editing, setEditing] = useState(false);

    useEffect(()=> {
        // console.log('FetchFood:', props.id)
        getAFoodItem();
        // eslint-disable-next-line
    }, []);

    const getAFoodItem = () => {
        props.fetchFood(props.id);
    }

    const handleCalendar = (d) =>{
        setDateOfPickup(d);
        props.updateFoodPickup({
            id: props.id,
            vol_id: localStorage.getItem('userId'),
            req: {
                pickupTime: d.toString()
            }
        })
        setPickingFood(false);
    };

    const renderPickupButton = () => {
        if (pickingFood) {
            return <Calendar
            onChange={handleCalendar}
            value={dateOfPickup}
            setPickingFood={setPickingFood}
            />
        } else {
            return <button className='fCardBtn' 
            onClick={() => {setPickingFood(true)}}> 
                Pickup
            </button>
        }
    }

    const renderEditButton = () => {
        if (editing) {
            return <UpdateFood {...props} setEditing={setEditing} />
        } else {
            return <button className='fCardBtn' onClick={() => setEditing(true)}>
                Edit 
            </button>
        }
    }

    const renderFoodItem = () => {
        if (props.foodItems && props.foodItems[props.id]) {
            return <tr>
                <td className='td'>{props.foodItems[props.id]['name']}</td>
                <td className='td'>{props.foodItems[props.id]['type']}</td>
                <td className='td'>{props.foodItems[props.id]['quantity']}</td>
                <td className='td'>{props.foodItems[props.id]['donor_name']}</td>
                <td className='td'>{props.foodItems[props.id]['volunteer_name']}</td>
                <td className='td'>{renderPickupTime()}</td>
                <td className='td'>{renderPickupButton()}</td>
                <td className='td'>{renderEditButton()}</td>
            </tr>
        } else {
            return <tr></tr>
        }
    }

    const renderPickupTime = () => {
        let pickupTime = '';
        if (props.foodItems && props.foodItems[props.id] && props.foodItems[props.id]['pickupTime']) {
            pickupTime =  new Date(props.foodItems[props.id]['pickupTime']);
            return <Moment format="Do MMMM YYYY - HH:mm">{pickupTime}</Moment>
        }
        return ''
    }
    // console.log('pickupTime: ', props.foodItems[props.id]['pickupTime']);
    // console.log('foodItems:', props.foodItems);
    return(
        renderFoodItem()
    )
};

const mapStateToProps = state => {
    return {
        foodItems: state.food,
        // name: state.name,
        // quantity: state.quantity,
        error: state.error,
        isLoading: state.isLoading
    };
};

export default connect(
    mapStateToProps,
    {...food}
)(FoodCard);