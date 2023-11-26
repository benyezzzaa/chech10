import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';
import { NavLink  , Routes,Route} from 'react-router-dom';

function MovieCard({restaurant,index }) {
  return (
    <NavLink to={'Menu/' +index}> 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={restaurant.posterURL} />
      <Card.Body>
        <Card.Title>{restaurant.title}</Card.Title>
        <Card.Text>
          
          {restaurant.description}
        </Card.Text>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={restaurant.rating}
        />
      </Card.Body>
    </Card>
    </NavLink>
  );
}



export default MovieCard
