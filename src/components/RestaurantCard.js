import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestaurantCard({restaurant}) {
    console.log(restaurant)
  return (
    // <Link to={`/view-restaurant/${restaurant.id}`} style={{textDecoration:'none'}}>
    <Link to={'/view-restaurant/'+restaurant.id} style={{textDecoration:'none', color:'white'}}>

    <Card style={{width:'18rem',padding:'.5rem'}}>
      <Card.Img style={{ height: '18rem'}} variant="top" src={restaurant.photograph} />
      <Card.Body>
        <Card.Title style={{fontSize:'1.5rem'}}>{restaurant.name.slice(0,20)}</Card.Title>
        <Card.Text>
            <p>Cuisine: {restaurant.cuisine_type}</p>
        </Card.Text>  

        <Card.Text>
        <p>{restaurant.neighborhood}</p>
        </Card.Text>

      </Card.Body>
    </Card>
    </Link>
  )
}

export default RestaurantCard
