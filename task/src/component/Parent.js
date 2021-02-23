import React from 'react'
import {Container, Col, Row, Card} from 'react-bootstrap';
import {useSelector} from 'react-redux';

function Parent() {

    const image = useSelector(state => state.image)
     const {data, loading} = image

     console.log(data)
    return (
        <div>
           <Container>
           <h1>Images</h1>
           <Row>
           {loading ? <h4>Loading...</h4> : 
            data && data.map((x) => (
                <Col>
                <Card>
                <Card.Img variant="top" src={x.image}></Card.Img>
                <Card.Title className="m-2 text-center">{x.text}</Card.Title>
                </Card>
                </Col>
            ))}
           
           </Row>
           </Container>
        </div>
    )
}

export default Parent
