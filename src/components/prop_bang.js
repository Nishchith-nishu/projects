import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import Arrrowaction from './arrowAction'; // Import arrow action logic
import Arrrowaction from './arrowAction';
import { Link } from 'react-router-dom';

function Prop() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const { index, handleNext, handlePrev } = Arrrowaction(properties.length, itemsPerPage, startIndex, setStartIndex);

  return (
    <Container fluid className="mt-3 mx-3">
      <Row>
        <Typography variant='p' style={{ marginTop: '50px', fontSize: '35px' }} className='nav_boldB'>
          Popular Owner Properties
        </Typography>
        {properties.slice(index, index + itemsPerPage).map((property, idx) => (
          <Col key={idx}>
            <Card
              style={{ width: '15rem', height: '21rem', position: 'relative' }}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Img
                variant="top"
                src={property.imageUrl}
                style={{ width: '100%', height: '150px' }}
              />
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>
                  {property.price} || {property.area}<br />
                  {property.location}<br />
                  {property.status}
                </Card.Text>
                {hoveredIndex === idx && (
                <Link to="/View">  <button className="ButtonStyle bg-danger" onClick={() => console.log('View Details clicked')}>
                    View Details
                  </button></Link>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {index > 0 && (
        <button className='ArrowButton2' onClick={handlePrev}>
          <ArrowBackIcon />
        </button>
      )}
      {index < properties.length - itemsPerPage && (
        <button className='ArrowButton1' onClick={handleNext}>
          <ArrowForwardIcon />
        </button>
      )}
    </Container>
  );
}

const properties = [
  {
    imageUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Feb/08/Photo_h300_w450/71111891_2_PropertyImage1707391665895_300_450.jpg",
    title: "3 BHK Flat",
    price: "₹56,000",
    area: "1578 sqft",
    location: "Krishnarajapura, Bangalore",
    status: "Ready to move",
  },
  {
    imageUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/19/Photo_h300_w450/71939711_1_f6ef40af-737c-4893-9ce3-2b11f718680d_300_450.jpeg",
    title: "2 BHK Flat",
    price: "₹15,000",
    area: "1000 sqft",
    location: "Chandapura, Bangalore",
    status: "Ready to move",
  },
  {
    imageUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Feb/08/Photo_h180_w240/71111891_2_PropertyImage1707391665895_180_240.jpg",
    title: "3 BHK Flat",
    price: "₹48,000",
    area: "1376 sqft",
    location: "Phase 1 Electronics City, Bangalore",
    status: "Ready to move"
  },
  {
    imageUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Apr/10/Photo_h180_w240/69804051_1_PropertyImage1712475883341_180_240.jpg",
    title: "3 BHK Flat",
    price: "₹30,000",
    area: "1398 sqft",
    location: "Sahakar Nagar, Bangalore",
    status: "Ready to move"
  },
  {
    imageUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Oct/10/Photo_h180_w240/69494999_15_4fc62166a554b46b91dde0f5f2ee6fa_180_240.jpg",
    title: "3 BHK Flat",
    price: "₹30,000",
    area: "1398 sqft",
    location: "Sahakar Nagar, Bangalore",
    status: "Ready to move"
  },  {
    imageUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/17/Photo_h180_w240/71908817_4_hatsAppImage20240317at8.17.43PM2_180_240.jpeg",
    title: "3 BHK Flat",
    price: "₹30,000",
    area: "1398 sqft",
    location: "Sahakar Nagar, Bangalore",
    status: "Ready to move"
  },{
    imageUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/19/Photo_h300_w450/71939711_1_f6ef40af-737c-4893-9ce3-2b11f718680d_300_450.jpeg",
    title: "2 BHK Flat",
    price: "₹15,000",
    area: "1000 sqft",
    location: "Chandapura, Bangalore",
    status: "Ready to move",
  }
];

export default Prop;