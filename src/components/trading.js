
import React, { useState } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

const Bulidings = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <Container fluid className="mt-3 mx-3">
      <Row>
        <h2 className="sedan-sc-regular mb-2 ">
          Trending Societies near you
        </h2>
        {properties.map((property, index) => (
          <Col key={index}>
            <Card
              style={{ width: '20rem', height: '21rem', position: 'relative' }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Img
                variant="top"
                src={property.imageUrl}
                style={{width:' 100%',height:'150px'}}
                
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
    imageUrl: "https://img.staticmb.com/mbimages/project/Photo_h300_w450/2022/12/16/Project-Photo-125-Embassy-Lake-Terraces-Bangalore-5026406_345_1366_300_450.jpg",
    title: "3 BHK Flat",
    price: "₹56,000",
    area: "1578 sqft",
    location: "Krishnarajapura, Bangalore",
    status: "Ready to move",
  },
  {
    imageUrl: "https://img.staticmb.com/mbimages/project/Photo_h300_w450/2019/09/10/Project-Photo-53-Raintree-Boulevard-Bangalore-5086183_345_1366_300_450.jpg",
    title: "2 BHK Flat",
    price: "₹15,000",
    area: "1000 sqft",
    location: "Chandapura, Bangalore",
    status: "Ready to move",
  },
  {
    imageUrl: "https://img.staticmb.com/mbimages/project/Photo_h300_w450/Project-Photo-38-Nikoo-Homes-II-Bangalore-5086476_345_1366_300_450.jpg",
    title: "3 BHK Flat",
    price: "₹48,000",
    area: "1376 sqft",
    location: "Phase 1 Electronics City, Bangalore",
    status: "Ready to move"
  },
//   {
//     imageUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/17/Photo_h180_w240/71908817_4_hatsAppImage20240317at8.17.43PM2_180_240.jpeg",
//     title: "3 BHK Flat",
//     price: "₹30,000",
//     area: "1398 sqft",
//     location: "Sahakar Nagar, Bangalore",
//     status: "Ready to move"
//   }
];

export default Bulidings;


