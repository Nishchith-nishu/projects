import Card from 'react-bootstrap/Card';
import { Container,Badge } from 'react-bootstrap';

function Post() {
  return (
    <Container fluid className='mt-3 mx-3'>
        {/* <h1>Bangalore Property Snapshot</h1> */}
    <Card className='post'>
      <Card.Body className='post1'>Post your Property for <span className='fon'><b><i>Free</i></b></span><h6>
List it on Magicbricks and get genuine leads</h6>
<span className='font bg-warning'>Post property <span className='baa'> <Badge pill bg="light" text="dark">
        free
      </Badge></span></span>
</Card.Body>
    </Card>
    </Container>
  );
}

export default Post;