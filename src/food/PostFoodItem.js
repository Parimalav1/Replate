
import React, { useState } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useAlert } from 'react-alert';

const initialFoodItem = {
    name: '',
    type: '',
    quantity: '',
};

export default function PostFoodItem(){
    const [foodItems, setFoodItems] = useState([]);
    const [formValues, setFormValues] = useState(initialFoodItem);
    const [posted, setPosted] = useState(false);
    const [postedValues, setPostedValues] = useState('');
    const alert = useAlert();


    const addFood = (newFood) => {
        let userId = localStorage.getItem('userId');
        axiosWithAuth()
        .post(`api/users/${userId}/foodItems`, newFood)
        .then(res => {
            setFormValues(initialFoodItem);
            setFoodItems([...foodItems, res.data])
            setPosted(true);
            setPostedValues(res.data);
        })
        .catch((err) => {
            alert.show('Posting a food failed: same food. ' + err.message) 
            console.log("Snake eyes")
        })
    };

    const onSubmit = (e) => {
        console.log('onSubmit food:', formValues)
        e.preventDefault()
        const newFood = {
          name: formValues.name.trim(),
          type: formValues.type.trim(),
          quantity: formValues.quantity.trim(),
        } 
        addFood(newFood);
    };

    const handleChange = (evt) => {
        evt.preventDefault();
        setFormValues({
            ...formValues,
            [evt.target.name]: evt.target.value
        })
    };

    return (
        <form onSubmit={onSubmit} className="postFoodItemForm">
            <div className="postFoodItem">
                <div className="postFoodItemRow">
                    <h3>Enter a Food</h3>
                </div>
                <div className="postFoodItemRow1">
                {/* dropdowm menu for foodItems */}
                    <select className="select"
                        onChange={handleChange}
                        name='type'
                        type="text"
                        value={formValues.type}
                        >
                        <option value=''>- Select an option -</option>
                        <option value='Appetiser1'>Appetiser1</option>
                        <option value='Appetiser2'>Appetiser2</option>
                        <option value='Appetiser3'>Appetiser3</option>
                        <option value='Entree1'>Entree1</option>
                        <option value='Entree2'>Entree2</option>
                        <option value='Entree3'>Entree3</option>
                        <option value='Dessert1'>Dessert1</option>
                        <option value='Dessert2'>Dessert2</option>
                        <option value='Dessert3'>Dessert3</option>
                        <option value='Bread'>Bread</option>
                        <option value='Salad1'>Salad1</option>
                        <option value='Salad2'>Salad2</option>
                        <option value='SoftDrink1'>SoftDrink1</option>
                        <option value='SoftDrink2'>SoftDrink2</option>
                        <option value='Vegetables'>Vegetables</option>
                        <option value='Fruits'>Fruits</option>
                        <option value='Other'>Other</option>
                        {/* <button className='Btn' onClick={handleChange}>Confirm</button> */}
                    </select>
                </div>
                <div className="postFoodItemRow">
                    <div className="foodInput">
                        <input
                            placeholder='Name'
                            type="text"
                            name="name"
                            value={formValues.name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="postFoodItemRow">
                    <div className="foodInput">
                        <input
                            placeholder='Quantity'
                            type="text"
                            name="quantity"
                            value={formValues.quantity}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </div>
                </div>
                <div className="postFoodItemRow1">
                        <button className='postBtn animate yellow'>
                            Add Food Item
                        </button>
                    {posted && <div>
                        <p>Donation initiated:</p>
                        <p>{postedValues.name}</p>
                        <p>{postedValues.type}</p>
                        <p>{postedValues.quantity}</p>                
                    </div>
                    }
                </div>
            </div>
        </form>
    );
};
