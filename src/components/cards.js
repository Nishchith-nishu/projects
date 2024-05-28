// import React from "react";
// import { Col, Container, Row,Card } from "react-bootstrap";
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// let Cards=()=>{
//     return(
//         <div>
//             <Container fluid className="mt-3 mx-3">
//                 <Row>
//                 <h2 className="nav_bold1 mt-3"><i className="sedan-sc-regular mb-2 ">Because you searched Bangalore</i></h2>
//                     <Col >
//     <Card className="card_color" style={{ width: '14rem' , height:'10rem' }}>
//       <Card.Body>
//         <Card.Title><span className="text-danger"><b className="bold">48+</b></span></Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">Properties Listed <p>for you</p></Card.Subtitle>
//         <Card.Text>
//          <span >continue Last Search<ArrowForwardIcon style={{color:'red'}}/></span>
//         </Card.Text>
       
//       </Card.Body>
//     </Card>
//    </Col>

//      <Col>
//     <Card className="card_color" style={{ width: '14rem' , height:'10rem' }}>
//       <Card.Body>
//         <Card.Title></Card.Title>
//         <Card.Subtitle className="mb-2 text-muted ">Get Personalised Property Recommendations from us</Card.Subtitle>
//         <Card.Text>
//             <br></br>
            


//         <span>See all<ArrowForwardIcon style={{color:'red'}}/></span>

//         </Card.Text>
//       </Card.Body>
//     </Card>
//    </Col>

//    <Col >
//     <Card className="card_color" style={{ width: '14rem', height:'10rem'}}>
//       <Card.Body>
//         <Card.Title className="text-danger"><b>100+</b></Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">Owners Properties in Banglore</Card.Subtitle>
//         <Card.Text>
//         <span>See all<ArrowForwardIcon style={{color:'red'}}/></span>

//         </Card.Text>
//      </Card.Body>
//     </Card>
//   </Col>
//    <Col>
//     <Card className="card_color" style={{ width: '14rem', height:'10rem' }}>
//       <Card.Body>
//         <Card.Title className="text-danger"><b>200+</b></Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">Properties in popular localities</Card.Subtitle>
//         <Card.Text>
//         <span>See all<ArrowForwardIcon style={{color:'red'}}/></span>

//         </Card.Text>
       
//       </Card.Body>
//     </Card>

//                 </Col>
//                 </Row>
//             </Container>

//         </div>
//     )
// }

// export default Cards

import React from 'react';
// import './PropertyCard.css';
import HistoryIcon from '@mui/icons-material/History';
import { Container,Row,Col } from 'react-bootstrap';

const Cards = ({ number, description, linkText, icon }) => {
    return (
      <Container fluid>
      <h2 className="nav_bold1 mt-3"><i className="sedan-sc-regular mb-2 ">Because you searched Bangalore</i></h2>
      <Row>
          <Col md={3}>
              <div className="property-card">
                  <div className="property-card-content">
                      <h2>48+</h2>
                      <p>Properties Listed <br /> for you</p>
                      <a href="#">Read more<span style={{ marginLeft: '5px' }}>&rarr;</span></a>
                  </div>
                  {/* <div className="property-card-icon">
                      <HistoryIcon />
                  </div> */}
              </div>
          </Col>
          <Col md={3}>
              <div className="property-card">
                  <div className="property-card-content">
                      <h2>49+</h2>
                      <p>Get Personalised Property from us </p>
                      <a href="#">Read more<span style={{ marginLeft: '5px' }}>&rarr;</span></a>
                  </div>
                  {/* <div className="property-card-icon">
                      <HistoryIcon />
                  </div> */}
              </div>
          </Col>
          <Col md={3}>
              <div className="property-card">
                  <div className="property-card-content">
                      <h2>100+</h2>
                      <p>Bigger homes & Villas <br /> in your budget</p>
                      <a href="#">See all<span style={{ marginLeft: '5px' }}>&rarr;</span></a>
                  </div>
                  {/* <div className="property-card-icon">
                      <HistoryIcon />
                  </div> */}
              </div>
          </Col>
          <Col md={3}>
              <div className="property-card">
                  <div className="property-card-content">
                      <h2>5+</h2>
                      <p>Nearby localities <br /> matching your criteria</p>
                      <a href="#">See all<span style={{ marginLeft: '5px' }}>&rarr;</span></a>
                  </div>
                  {/* <div className="property-card-icon">
                      <HistoryIcon />
                  </div> */}
              </div>
          </Col>
      </Row>
  </Container>


    );
}

export default Cards;

{/* <Card.Link href="#" style={{ color: 'red', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
View all 38 Flats
<span style={{ marginLeft: '5px' }}>&rarr;</span>
</Card.Link> */}





