import React from "react";
import { Col, Container, Row,Card } from "react-bootstrap";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
let Cards=()=>{
    return(
        <div>
            <Container>
                <Row>
                <h2><i>Because you searched Bangalore</i></h2>
                    <Col >
    <Card className="card_color" style={{ width: '14rem' , height:'10rem' }}>
      <Card.Body>
        <Card.Title><span className="text-danger"><b>48+</b></span></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Properties Listed <p>for you</p></Card.Subtitle>
        <Card.Text>
         <span >continue Last Search<ArrowForwardIcon style={{color:'red'}}/></span>
        </Card.Text>
       
      </Card.Body>
    </Card>
   </Col>

     <Col>
    <Card className="card_color" style={{ width: '14rem' , height:'10rem' }}>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Subtitle className="mb-2 text-muted ">Get Personalised Property Recommendations from us</Card.Subtitle>
        <Card.Text>
            <br></br>
            


        <span>See all<ArrowForwardIcon style={{color:'red'}}/></span>

        </Card.Text>
      </Card.Body>
    </Card>
   </Col>

   <Col >
    <Card className="card_color" style={{ width: '14rem', height:'10rem'}}>
      <Card.Body>
        <Card.Title className="text-danger"><b>100+</b></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Owners Properties in Banglore</Card.Subtitle>
        <Card.Text>
        <span>See all<ArrowForwardIcon style={{color:'red'}}/></span>

        </Card.Text>
     </Card.Body>
    </Card>
  </Col>
   <Col>
    <Card className="card_color" style={{ width: '14rem', height:'10rem' }}>
      <Card.Body>
        <Card.Title className="text-danger"><b>200+</b></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Properties in popular localities</Card.Subtitle>
        <Card.Text>
        <span>See all<ArrowForwardIcon style={{color:'red'}}/></span>

        </Card.Text>
       
      </Card.Body>
    </Card>

                </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Cards