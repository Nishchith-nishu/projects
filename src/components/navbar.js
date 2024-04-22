
// import React, { useState } from 'react';
// import { Container, Nav, Navbar, NavDropdown, Card, Button ,Badge } from 'react-bootstrap';

// function BasicExample() {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showPrimeDropdown, setShowPrimeDropdown] = useState(false);

//   const handleMouseEnter = () => {
//     setShowDropdown(true);
//   };

//   const handleMouseLeave = () => {
//     setShowDropdown(false);
//   };

//   const handlePrimeMouseEnter = () => {
//     setShowPrimeDropdown(true);
//   };

//   const handlePrimeMouseLeave = () => {
//     setShowPrimeDropdown(false);
//   };
 

//   // Array of cities
//   const cities = [
//     'INDIA',
//     'Nearby Cities',
//     'Bangalore - East',
//     'Bangalore - South',
//     'Bangalore - West',
//     'Bangalore - Central',
//     'Bangalore - North',
//     'Popular Cities',
//     'Ahmedabad',
//     'Chennai',
//     'Gurgaon',
//     'Hyderabad',
//     // Add more cities as needed
//   ];

//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid className='bg-danger'>
//         <Navbar.Brand href="#home" className='text-white'>Magicbricks</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <NavDropdown
//               title="Bangalore"
//               id="basic-nav-dropdown"
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//               show={showDropdown}
//             >
//               {cities.map((city, index) => (
//                 <NavDropdown.Item key={index} href={`#action/${index}`}>
//                   {city}
//                 </NavDropdown.Item>
//               ))}
//             </NavDropdown>
//           </Nav>
//           <Nav>
//             <NavDropdown
//               title="MB Prime"
//               id="basic-nav-dropdown"
//               onMouseEnter={handlePrimeMouseEnter}
//               onMouseLeave={handlePrimeMouseLeave}
//               show={showPrimeDropdown}
//             >
//               <Card style={{ width: '18rem' }}>
//               <Card.Img variant="top" src="data:image/jpeg;base64,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" />
//                 <Card.Body>
//                   <Card.Title>MB Prime</Card.Title>
//                   <Card.Text>
//                     <ul>
//                       <li>Contact upto 30 Owners directly</li>
//                       <li>Access to Prime Exclusive Properties</li>
//                     </ul>
//                   </Card.Text>
//                   <Button variant="danger">Join Now</Button>
//                 </Card.Body>
//               </Card>
//             </NavDropdown>
//           </Nav>
//           <Nav>
//             <NavDropdown
//              title="LOGIN" id="basic-nav-dropdown">
//     <Card style={{ width: '18rem' }}>
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Card.Link href="#">Card Link</Card.Link>
//         <Card.Link href="#">Another Link</Card.Link>
//       </Card.Body>
//     </Card>
// export default TextExample;
//             </NavDropdown>
//           </Nav>
//           <Navbar.Text href="#home" className='text-white'>Post Property</Navbar.Text>
//           <Badge pill bg="warning" text="dark">
//         Free
//       </Badge>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BasicExample;

import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Card, Button, Badge } from 'react-bootstrap';

function BasicExample() {
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

export default BasicExample;


