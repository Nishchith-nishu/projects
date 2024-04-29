import {react} from "react"
import { Container,Col,Row,Card } from "react-bootstrap"
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

let Service=()=>{
    return(
        <Container fluid  className="service_name mt-5 mx-3">
            <h1 className="mb-5"><i>Top Society Experts</i></h1>
            <Row>
                <Col>
<Card style={{ width: '18rem', borderRadius:"15px" }} className="Box_s">
  <Card.Body>
    <Card.Title style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ backgroundColor: 'bisque', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
        <b style={{ fontSize: '1.5rem', color: 'white' }}>V</b>
      </span>
      <b>Venugopal Verma</b>
    </Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Serving Societies Since 2006</Card.Subtitle>
    <Card.Text>
      Societies served: L and T Raintree Boulevard
    </Card.Text>
    {/* <Card.Link href="#">View all 20 Flats</Card.Link> */}
    <Card.Link href="/view.js" style={{ color: 'red', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
  View all 20 Flats
  <span style={{ marginLeft: '5px' }}>&rarr;</span>
</Card.Link>


  </Card.Body>
</Card>



                </Col>

                <Col>
                <Card style={{ width: '18rem', borderRadius:"15px" }} className="Box_s">
  <Card.Body>
    <Card.Title style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ backgroundColor: 'bisque', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
        <b style={{ fontSize: '1.5rem', color: 'white' }}>A</b>
      </span>
      <b>ALPHA REALESTATE</b>
    </Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Serving Societies Since 2019</Card.Subtitle>
    <Card.Text>
Societies served: Bhartiya City Nikoo Homes Phase 2
    </Card.Text>
    <Card.Link href="#" style={{ color: 'red', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
  View all 38 Flats
  <span style={{ marginLeft: '5px' }}>&rarr;</span>
</Card.Link>
  </Card.Body>
</Card>
                </Col>

                <Col>
                <Card style={{ width: '18rem', borderRadius:"15px" }} className="Box_s">
  <Card.Body>
    <Card.Title style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{ backgroundColor: 'bisque', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
        <b style={{ fontSize: '1.5rem', color: 'white' }}>L</b>
      </span>
      <b>LIVING BANGALORE</b>
    </Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Serving Societies Since 2014</Card.Subtitle>
    <Card.Text>
Societies served: Embassy Lake Terraces
    </Card.Text>
    <Card.Link href="#" style={{ color: 'red', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
  View all 31 Flats
  <span style={{ marginLeft: '5px' }}>&rarr;</span>
</Card.Link>
  </Card.Body>
</Card>

                </Col>

            </Row>
        </Container>
    )
}

export default Service

