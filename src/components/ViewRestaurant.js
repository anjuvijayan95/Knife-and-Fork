import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ViewRestaurant.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch,useSelector } from "react-redux";
import {RestaurantList} from '../actions/homeAction'


import 'swiper/css';


function ViewRestaurant() {
  const [show,setShow]=useState(false)
  const handleClose=()=>setShow(false)
  const handleShow=()=>setShow(true)

  const {restaurants}=useSelector(state=>state.restaurantReducer)
  console.log(restaurants);

  // const [restaurants, setRestaurants] = useState([]);
  const param = useParams();

  // const fetchData = async () => {
  //   const res = await fetch("/restaurants.json");
  //   res.json().then((data) => {
  //     setRestaurants(data.restaurants);
  //   });
  // };

  // console.log(restaurants);


  const dispatch=useDispatch()

  useEffect(() => {
    // fetchData();
    dispatch(RestaurantList())
  }, []);

  const particularRest = restaurants.find((item) => item.id == param.id);
  console.log(particularRest);


  return (
  <>
{
particularRest?(  
  <section id="restaurant">
    <div className="banner2">
    <h1>Choose your taste</h1>
    </div>
    
    <div className="oneRestau">
    <div className="image">
      <img src={particularRest.photograph}/>
    </div>
    <div className="details">
      <h2 className="head">{particularRest.name}</h2>
      <hr/>
      <h3><span style={{fontSize:"1.2rem"}}>Cuisine type: </span> {particularRest.cuisine_type}</h3>
      <hr/>
      <h3><span style={{fontSize:"1.2rem"}}>Neighborhood: </span> {particularRest.neighborhood}</h3>
      <hr/>
      <h3><span style={{fontSize:"1.2rem"}}>Address: </span> {particularRest.address}</h3>
      <hr/>
      <button onClick={handleShow}>Open Time</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Open Time</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Monday: {particularRest.operating_hours.Monday}
          <hr/>
          Tuesday: {particularRest.operating_hours.Tuesday}
          <hr/>
          Wednesday: {particularRest.operating_hours.Wednesday}
          <hr/>
          Thursday: {particularRest.operating_hours.Thursday}
          <hr/>
          Friday: {particularRest.operating_hours.Friday}
          <hr/>
          Saturday: {particularRest.operating_hours.Saturday}
          <hr/>
          Sunday: {particularRest.operating_hours.Sunday}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>

    </div>
    </div>

    {/* review area */}

    <div className="reviews">
        <h1>Reviews</h1>
        <div className="swipe">
        <Swiper
        slidesPerView={3}
        slidesPerGroup={3}
        spaceBetween={10}
        loop={true}
        className="slide">
          {
            particularRest.reviews.map((review,i)=>(
              <SwiperSlide>
                <div className="eachReview">
                  <h2 style={{fontWeight:'800'}}>{review.name}</h2>
                  <hr/>
                  <p style={{fontSize:".8rem"}}>{review.comments}</p>
                  <p style={{fontSize:".8rem"}}>Rating:{review.rating}</p>
                  <p style={{fontSize:".8rem"}}>{review.date}</p>

                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        </div>
    </div>
  </section>
  ):'Nothing to diplay'
  }
  </>
  )
}

export default ViewRestaurant;
