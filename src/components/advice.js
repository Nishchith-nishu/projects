import {react} from "react"
import { Container,Card,Row,Col,Badge} from "react-bootstrap"
import AddHomeIcon from '@mui/icons-material/AddHome';
import DescriptionIcon from '@mui/icons-material/Description';
import CalculateIcon from '@mui/icons-material/Calculate';
// import DescriptionIcon from '@mui/icons-material/Description';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Advice=()=>{
    return(
        <div>
        <Container fluid className="mt-5 mx-3" >
        <h1 className="mb-5"><i>Advice & Tools</i></h1>
            <Row>
                <Col>
                {/* <div> */}
                <Card style={{ width: '16rem', borderRadius:"15px" }} className="Box_s">
  <Card.Body>
    <Card.Title style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{  width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
     <div> <span style={{marginLeft:"120px"}}><AddHomeIcon style={{ fontSize: '2rem', color: 'red' }} /><span className="badge_1" style={{marginLeft:"60px"}}><Badge pill bg="warning" text="dark">
        Certified
      </Badge></span></span><span style={{marginLeft:"300px",marginTop:"20px"}}> </span></div>
      </span>
      {/* <b>Venugopal Verma</b> */}
    </Card.Title>
    <Card.Subtitle className="mb-2 "><b>Property Valuation</b></Card.Subtitle>
    <Card.Text>
    
Know the right value for your Property before you Buy.

    </Card.Text>
    {/* <Card.Link href="#">View all 20 Flats</Card.Link> */}
    <Card.Link href="#" style={{ color: 'red', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
  Read more
  <span style={{ marginLeft: '5px' }}>&rarr;</span>
</Card.Link>


  </Card.Body>
</Card>
{/* </div> */}
                </Col>

                        <Col>
                <Card style={{ width: '16rem', borderRadius:"15px" }} className="Box_s">
  <Card.Body>
    <Card.Title style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{  width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
     <div> <span style={{marginLeft:"120px"}}><DescriptionIcon style={{ fontSize: '2rem', color: 'red' }} /><span className="badge_1" style={{marginLeft:"60px"}}><Badge pill bg="warning" text="dark">
        GetFree
      </Badge></span></span><span style={{marginLeft:"300px",marginTop:"20px"}}> </span></div>
      </span>
      {/* <b>Venugopal Verma</b> */}
    </Card.Title>
    <Card.Subtitle className="mb-2 "><b>Legal Title Check</b></Card.Subtitle>
    <Card.Text>

Get property checked for clean title and no legal claim/bank .


    </Card.Text>
    {/* <Card.Link href="#">View all 20 Flats</Card.Link> */}
    <Card.Link href="#" style={{ color: 'red', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
    Read more
  <span style={{ marginLeft: '5px' }}>&rarr;</span>
</Card.Link>


  </Card.Body>
</Card>
{/* </div> */}
                </Col>

                <Col>
                <Card style={{ width: '16rem', borderRadius:"15px" }} className="Box_s">
  <Card.Body>
    <Card.Title style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{  width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
     <div> <span style={{marginLeft:"120px"}}><TrendingUpIcon style={{ fontSize: '2rem', color: 'red' }} /><span className="badge_2" style={{marginLeft:"60px"}}><Badge pill bg="warning" text="dark">
        Certified
      </Badge></span></span><span style={{marginLeft:"300px",marginTop:"20px"}}> </span></div>
      </span>
      {/* <b>Venugopal Verma</b> */}
    </Card.Title>
    <Card.Subtitle className="mb-2 "><b>Rates & Trends</b></Card.Subtitle>
    <Card.Text>
    
    
Know all about Property Rates & Trends in your city


    </Card.Text>
    {/* <Card.Link href="#">View all 20 Flats</Card.Link> */}
    <Card.Link href="#" style={{ color: 'red', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
    View now
  <span style={{ marginLeft: '5px' }}>&rarr;</span>
</Card.Link>


  </Card.Body>
</Card>
{/* </div> */}
                </Col>

                <Col>
                <Card style={{ width: '16rem', borderRadius:"15px" }} className="Box_s">
  <Card.Body>
    <Card.Title style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{  width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
     <div> <span style={{marginLeft:"120px"}}><CalculateIcon style={{ fontSize: '2rem', color: 'red' }} /><span className="badge_2" style={{marginLeft:"60px"}}><Badge pill bg="warning" text="dark">
        Certified
      </Badge></span></span><span style={{marginLeft:"300px",marginTop:"20px"}}> </span></div>
      </span>
      {/* <b>Venugopal Verma</b> */}
    </Card.Title>
    <Card.Subtitle className="mb-2 "><b>EMI Calculator</b></Card.Subtitle>
    <Card.Text>
    
    
Know how much you'll have to pay every month on your loan


    </Card.Text>
    {/* <Card.Link href="#">View all 20 Flats</Card.Link> */}
    <Card.Link href="#" style={{ color: 'red', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
    View now
  <span style={{ marginLeft: '5px' }}>&rarr;</span>
</Card.Link>


  </Card.Body>
</Card>
{/* </div> */}
                </Col>
            </Row>
        </Container>
        </div>
    )
}
export default Advice