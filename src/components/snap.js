import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Snap() {
  return (
    <div>
      <Container fluid className='mt-3 mx-3'>
        <h2 className='sedan-sc-regular mb-2 '>Bangalore Property Snapshot</h2>
        <Card className='snap'>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body className='fooo'>
            <Card.Text>
              A home to about 11 million people, Bangalore, now known as Bengaluru, is India''s fourth largest city after Delhi, Kolkata and Mumbai. There is no doubt about the fact that Bangalore unique climate has always attracted people to relocate from all parts of India. The climate in Bangalore is so pleasant and calming that it lets you have a whale of a time. The city has become the 4th largest technology hub in the world after London, Boston and San F....{' '}
              <span className='ho' style={{ color: 'red' }}>Read more &rarr;</span>
              <Card.Link href="#" style={{ color: 'red', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              </Card.Link>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Card.Text className=' propert mt-3'>
                <span className='mt-3'>1008+<br></br>Low Budget Flats<br></br>in Bangalore</span>
              </Card.Text>
              <Card.Text className='propert mt-3'>
                <span className='mt-3'>49799+<br></br>Properties for Rent<br></br>in Bangalore</span>
              </Card.Text>
              <Card.Text className='propert mt-3'>
                <span className='mt-3'>72+<br></br>

                Residential Property
<br></br>Agents in Bangalore</span>
              </Card.Text>

              <Card.Text className='prop mt-3'>
                <span className='mt-3'>18393+<br></br>

                Residential Projects
<br></br>in Bangalore</span>
              </Card.Text>
            </div>
            </Card.Text>
            
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Snap;
