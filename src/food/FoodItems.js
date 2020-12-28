import React, {useState, useEffect} from 'react';
// import { connect } from "react-redux";
import FoodCard from './FoodCard';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import { connect } from "react-redux";
import {food} from '../store/actions';
// import { food } from "../store/actions";

const FoodItems = (props) => {
    const [foodList, setFoodList] = useState([]);

    const getFoodItems = () => {
        axiosWithAuth()
        .get('/api/foodItems')
        .then((res) => {
            setFoodList(res.data)
        })
        .catch(err => console.log('ERROR'));
    }

    useEffect(() => {
        getFoodItems();
        props.fetchAllFoods();
        // food.fetchFood();
    }, []);

    if (!foodList.length) {
        return <tbody></tbody>;
    };

    // console.log('FoodItems:', Object.values(props.foodItems))
    return(
        <tbody>
            {props.foodItems && Object.values(props.foodItems).map(x => {
                return <FoodCard key={x.id} {...x}/>
            })}
        </tbody>
    )
};

const mapStateToProps = state => {
    return {
        foodItems: state.food,
    };
};

export default connect(
    mapStateToProps,
    {...food}
)(FoodItems);
