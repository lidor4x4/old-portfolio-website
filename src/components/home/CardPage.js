import {Card, Button} from 'react-bootstrap';


const CardPage = (props) => {
    return(
        <Card style={{ width: '18rem'}} className={props.cardClassName}>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>{props.cardTitle}</Card.Title>
    <Card.Text>
      {props.cardText}
    </Card.Text>
    <Button className='see-project-button' style={{color: 'black'}} variant="primary">{props.buttonText}</Button>
  </Card.Body>
</Card>
    )
}


export default CardPage;