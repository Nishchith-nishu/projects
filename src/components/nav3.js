

import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Card, Button, Badge } from 'react-bootstrap';

function Nav3() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPrimeDropdown, setShowPrimeDropdown] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handlePrimeMouseEnter = () => {
    setShowPrimeDropdown(true);
  };

  const handlePrimeMouseLeave = () => {
    setShowPrimeDropdown(false);
  };

  const handleLoginMouseEnter = () => {
    setShowLoginDropdown(true);
  };

  const handleLoginMouseLeave = () => {
    setShowLoginDropdown(false);
  };

  // Array of cities
  const cities = [
    'INDIA',
    'Nearby Cities',
    'Bangalore - East',
    'Bangalore - South',
    'Bangalore - West',
    'Bangalore - Central',
    'Bangalore - North',
    'Popular Cities',
    'Ahmedabad',
    'Chennai',
    'Gurgaon',
    'Hyderabad',
    // Add more cities as needed
  ];

  return (
    <Navbar expand="lg" className=" nav_ffix bg-body-tertiary">
      <Container fluid className='  bg-danger'>
        <Navbar.Brand href="#home" className='text-white'>Magicbricks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Bangalore"
              id="basic-nav-dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              show={showDropdown}
            >
              {cities.map((city, index) => (
                <NavDropdown.Item key={index} href={`#action/${index}`}>
                  {city}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
              title="MB Prime"
              id="basic-nav-dropdown"
              onMouseEnter={handlePrimeMouseEnter}
              onMouseLeave={handlePrimeMouseLeave}
              show={showPrimeDropdown}
            >
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDg0NDQ0NDQ8NDg0NFhEWFxURFRMYHyggGBooGxUVITEhMSkrLi4zFx8zODMsNygtLisBCgoKDQ0OFQ8PFS0dFR4rKysrLSsrKy0tKysrLS4rKysrKy0rLSstKystKy0tKysrKy0tLSstLSstKystLS0tK//AABEIAJ8BPgMBEQACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQMEAgUGBwj/xAA+EAACAQIDBQENBwQCAwAAAAAAAQIDEQQFEgYTITFRQQciMjNSYXFyc5GSsbIUFTRTgaHBNUNU0UJiFiN0/8QAGwEBAQADAQEBAAAAAAAAAAAAAAEDBAUCBgf/xAA0EQEAAgECAwQIBQUBAQAAAAAAAQIDBBEFEjETIVFxFDIzQVJTkaEiNGGB0RUWscHh8Qb/2gAMAwEAAhEDEQA/APt+oBqAagGoBqAagGoBrAawGsBrAmtANaAa0TcNaAbxAN4ujKG8XQBvF0YE3q6Mgb1dGUN6uhA3q6MbhvV0ZQ3q6Mm4b5dGUTfLoyBvl0Y3DfLoxuG+XRjcN8ujG4b5dGNw3y6MBvl0Y3DfLoxuG+XRjcN8ujG4b5dGNw3y6Mbhvl0YFAFEChEAAAoEAABAAUCAVAgBAAUCIwAUAAAiAAqAABAKARAoAAAABAAACjOVAKEQAAAAAABCgRQAACIAAgUCAECgAAEQAACoAAAAgFQAAAEAAUCAUQDYKgQAAAAUCABABQIAUAgQKIQAAEABQAACIAAgUAAAARAoAAEAAUCAUAgFZyoEAAAAAAIAAAAIAAhQIAUCIACgAAEQABAoAAAAEAAAACARsBcCXCLcAFLBEYFSCqBQIEAAVQiBWQIXAXAAAAUAgACgAiAAIFAAAABAAAIAQKjYHFsCNhBAc0gLYC2CoACKBAqgQIBQItwFwrmEAIAAXAgAKAVAUIgACBRgQIoUAgAohBQIAAjQHGwQcQESDmBSgACliBYBYoWAjA43AaghcBcDKFAAAABAJcBcCgAKEQKAQCgQAACAABYKAQAwiAGRRAcgBRUgKkBysAsAAMIxzAxAcooDlYBYg5lUAAAAEYHC4FuBUBQAQCoAAAAAQABVAgAgFEAWIFgFgOSAAckEEVXIAEADAwzAxMDkmBUwrkBzIBQCAUAxVJAY9YRzTA5oDkVUuEAoEQgBQChAAFAAAAAAEAAAAXKGogayi6wGoIagqOQHCTA4AACYRziQf/Z" />
                <Card.Body>
                  <Card.Title>MB Prime</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>Contact upto 30 Owners directly</li>
                      <li>Access to Prime Exclusive Properties</li>
                    </ul>
                  </Card.Text>
                  <Button variant="danger">Join Now</Button>
                </Card.Body>
              </Card>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
              title="LOGIN"
              id="basic-nav-dropdown"
              onMouseEnter={handleLoginMouseEnter}
              onMouseLeave={handleLoginMouseLeave}
              show={showLoginDropdown}
            >
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>My Activity</Card.Title>
                  <li><Card.Link href="#">Requested Properties</Card.Link></li>
                  <li><Card.Link href="#">Contacted Properties</Card.Link></li>
                  <li><Card.Link href="#">Viewed Properties</Card.Link></li>
                 <li> <Card.Link href="#">Shortlisted Properties</Card.Link></li>
                 <li> <Card.Link href="#">Searches</Card.Link></li>
                 <li> <Card.Link href="#">Recommendations</Card.Link></li>
                 <li> <Card.Link href="#">My Profile</Card.Link></li>
                 <li> <Card.Link href="#" className='btn btn-danger'>Login</Card.Link></li>
                </Card.Body>
              </Card>
            </NavDropdown>
          </Nav>
          <Navbar.Text href="#home" className='hea'><span className=' hlo bg-light'>Post Property 
        </span>
          </Navbar.Text>

{/* <Navbar.Text href="#home" className=" mx-4 rounded-white-bg text-link-decoration"  style={{marginRight:'30px'}}>Post Property
          <Badge bg="warning" text="dark" className="rounded-white-bg">FREE</Badge>
          </Navbar.Text> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav3;


