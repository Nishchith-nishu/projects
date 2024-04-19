// import React from "react";
// import { Col, Container, Row,Card,Button } from "react-bootstrap";

// const Bulid=()=>{
//     return(
//         <Container className="mt-3">
//             <Row>
//             <h2><i>Popular Owner Properties</i></h2>
//                 <Col>
//     <Card style={{ width: '15rem' , height:'21rem' }}>
//       <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYNZVuTe49DpYVCikAvNq4fNfSuyfCpmneg&s" height={'120px'} />
//       <Card.Body>
//         <Card.Title>3 BHK Flate</Card.Title>
//         <Card.Text>
//           ₹56,000 || 1578 sqft<br></br>
//           Krishnarajapura, Bangalore<br></br>
//           Ready to move
//         </Card.Text>
//         <Button variant="danger">View Details</Button>
//       </Card.Body>
//     </Card>
//                 </Col>

//                 <Col>
//                 <Card style={{ width: '15rem' , height:'21rem' }}>
//       <Card.Img variant="top" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/03/Photo_h180_w240/2181_WhatsAppImage20240103at12.02.24PM_180_240.jpeg" height={'120px'} />
//       <Card.Body>
//         <Card.Title>2 BHK Flat</Card.Title>
//         <Card.Text>
//        ₹15,000 || 1000 sqft<br></br>
//         Chandapura, Bangalore<br></br>
//         Ready to move
//         </Card.Text>
//         <Button variant="danger">View Details</Button>
//       </Card.Body>
//     </Card>
//                 </Col>
//                 <Col>
//                 <Card style={{ width: '15rem' , height:'21rem' }}>
//       <Card.Img variant="top" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Apr/05/Photo_h180_w240/72190703_5_PropertyImage680-8343916870389_180_240.jpg" height={'120px'} />
//       <Card.Body>
//         <Card.Title>3 BHK Flat</Card.Title>
//         <Card.Text>
//          ₹48,000 || 1376 sqft
//          Phase 1 Electronics City, Bangalore
//          Ready to move
//         </Card.Text>
//         <Button variant="danger">View Details</Button>
//       </Card.Body>
//     </Card>
//                 </Col>

//                 <Col>
//                 <Card style={{ width: '15rem', height:'21rem' }}>
//       <Card.Img variant="top" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/17/Photo_h180_w240/71908817_4_hatsAppImage20240317at8.17.43PM2_180_240.jpeg" height={'120px'} />
//       <Card.Body>
//         <Card.Title> 3 BHK Flat</Card.Title>
//         <Card.Text>     
//         ₹30,000 || 1398 sqft
//         Sahakar Nagar, Bangalore
//         Ready to move
//         </Card.Text>
//         <Button variant="danger">View Details</Button>
//       </Card.Body>
//     </Card>
//                 </Col>


//             </Row>
//         </Container>
//     )
// }
// export default Bulid


// import React, { useState } from "react";
// import { Col, Container, Row, Card, Button } from "react-bootstrap";

// const Bulid = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const handleMouseEnter = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null);
//   };

//   return (
//     <Container className="mt-3">
//       <Row>
//         <h2>
//           <i>Popular Owner Properties</i>
//         </h2>
//         {[1, 2, 3, 4].map((item, index) => (
//           <Col key={index}>
//             <Card
//               style={{ width: '15rem', height: '21rem' }}
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <Card.Img
//                 variant="top"
//                 src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYNZVuTe49DpYVCikAvNq4fNfSuyfCpmneg&s`}
//                 height={"120px"}
//               />
//               <Card.Body>
//                 <Card.Title>3 BHK Flat</Card.Title>
//                 <Card.Text>
//                   ₹56,000 || 1578 sqft<br />
//                   Krishnarajapura, Bangalore<br />
//                   Ready to move
//                 </Card.Text>
//                 {hoveredIndex === index && (
//                   <Button variant="danger">View Details</Button>
//                 )}
//               </Card.Body>
//             </Card>
//           </Col>
//          ))} 
//       </Row>
//     </Container>
//   );
// };
// export default Bulid;


import React, { useState } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

const Bulid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <Container className="mt-3">
      <Row>
        <h2>
          <i>Popular Owner Properties</i>
        </h2>
        {properties.map((property, index) => (
          <Col key={index}>
            <Card
              style={{ width: '15rem', height: '21rem', position: 'relative' }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Img
                variant="top"
                src={property.imageUrl}
                height={"120px"}
              />
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>
                  {property.price} || {property.area}<br />
                  {property.location}<br />
                  {property.status}
                </Card.Text>
                {hoveredIndex === index && (
                  <Button
                    variant="danger"
                    style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', opacity: '1', transition: 'opacity 0.3s' }}
                    onMouseEnter={(e) => e.target.style.opacity = '1'}
                    onMouseLeave={(e) => e.target.style.opacity = '0'}
                  >
                    View Details
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const properties = [
  {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYNZVuTe49DpYVCikAvNq4fNfSuyfCpmneg&s",
    title: "3 BHK Flat",
    price: "₹56,000",
    area: "1578 sqft",
    location: "Krishnarajapura, Bangalore",
    status: "Ready to move"
  },
  {
    imageUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/03/Photo_h180_w240/2181_WhatsAppImage20240103at12.02.24PM_180_240.jpeg",
    title: "2 BHK Flat",
    price: "₹15,000",
    area: "1000 sqft",
    location: "Chandapura, Bangalore",
    status: "Ready to move"
  },
  {
    imageUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Apr/05/Photo_h180_w240/72190703_5_PropertyImage680-8343916870389_180_240.jpg",
    title: "3 BHK Flat",
    price: "₹48,000",
    area: "1376 sqft",
    location: "Phase 1 Electronics City, Bangalore",
    status: "Ready to move"
  },
  {
    imageUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/17/Photo_h180_w240/71908817_4_hatsAppImage20240317at8.17.43PM2_180_240.jpeg",
    title: "3 BHK Flat",
    price: "₹30,000",
    area: "1398 sqft",
    location: "Sahakar Nagar, Bangalore",
    status: "Ready to move"
  }
];

export default Bulid;


