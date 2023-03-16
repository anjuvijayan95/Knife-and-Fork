import React, { useState, useEffect } from "react";
// import {Row,Col} from 'react-bootstrap'
import RestaurantCard from "./RestaurantCard";
import './Home.css'
import {RestaurantList} from '../actions/homeAction'
import { useDispatch,useSelector } from "react-redux";


function Home() {
const {restaurants}=useSelector(state=>state.restaurantReducer)
  console.log(restaurants);


  // hook to hold data from api call
  // const [restaurants, setrestaurants] = useState([]);

  // function to get data from api
  // const fetchData = async () => {
  //   const result = await fetch("/restaurants.json");
  //   result.json().then((data) => {
  //     setrestaurants(data.restaurants);
  //   });
  // };

  // console.log(restaurants);

  const dispatch=useDispatch()

  useEffect(() => {
    // fetchData();
    dispatch(RestaurantList())
  }, []);



  //************************* */ html part \* *****************************\\
  return (
    <>
    <div className="banner1">
    <h1 style={{fontSize:'4.5rem'}}>Just Supeb Taste</h1>
    </div>
    
    <div className="wrapper" >
    {
      restaurants.map(item=>(
        <div className="card">
          <RestaurantCard restaurant={item}/>
        </div>
      ))
    }
    </div>
    </>
  );
}

export default Home;
