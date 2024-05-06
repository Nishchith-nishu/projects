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
                {/* <button className='btn btn-danger'>Add wishlist</button> */}
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
// import React, { useState  } from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { Typography, CardContent, CardMedia, CardActionArea, CardActions, Button } from '@mui/material';
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import axios from 'axios';
// import usePagination from '../actions/pagi';
// function Prop() {
//     const [hoverIndex, setHoverIndex] = useState(-1);
//     const cardsToShow = 4;
//     const cards =  [
//         {
//             title: "2 BHK Flat",
//             price: "1.25cr",
//             size: "1413 sqft",
//             location: "Whitefield Bangalore",
//             image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jun/18/Photo_h180_w240/67579841_1_PropertyImage680-0493997235518_180_240.jpg",
//             readytomove: "Ready to move"
//         },
//         {
//             title: "3 BHK Flat",
//             price: "84 Lac",
//             size: "1150 sqft",
//             location: "Whitefield, Bangalore",
//             image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/26/Photo_h180_w240/70630851_1_PropertyImage645-708314894925_180_240.jpg",
//             readytomove: "Under Construction"
//         },
//         {
//             title: "3 BHK Flat",
//             price: "1.26cr",
//             size: "1149 sqft",
//             location: "Whitefield Bangalore",
//             image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/15/Photo_h180_w240/71874271_5_PropertyImage377-5241042579304_180_240.jpg",
//             readytomove: "Under Construction"
//         },
//         {
//             title: "2 BHK Flat",
//             price: "1.18cr",
//             size: "1140 sqft",
//             location: "Whitefield Bangalore",
//             image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Feb/16/Photo_h180_w240/71421853_4_hatsAppImage20240212at10.59.56AM_180_240.jpeg",
//             readytomove: "Under Construction"
//         },
//         {
//             title: "2 BHK Flat",
//             price: "1.40cr",
//             size: "1918 sqft",
//             location: "Whitefield Bangalore",
//             image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/21/Photo_h180_w240/71972061_7_restigeparkgrovewhitefield_180_240.jpg",
//             readytomove: "Under Construction"
//         }
//     ];
//     const { index, handleNext, handlePrev } = usePagination(cards.length, cardsToShow);  // Assuming a custom hook for pagination
   

//     const addToCart = (property) => {
//         const userId = localStorage.getItem("id") // This should be dynamically set based on the logged-in user
//         console.log("Sending data:", { userId, items: [property] });
//         axios.post('http://localhost:3002/api/cart', {
//             userId,
//             items: [property]
//         })
//         .then(response => {
//             console.log('Cart updated:', response.data);
//             // Optionally update local state to reflect changes
//         })
//         .catch(error => console.error('Failed to update cart:', error));
//     };
//     return (
//         <Container className='mt-5 fresh-properties'>
//             <Typography variant='h4' component="h1" className='header'>
//                 Fresh Properties in Bangalore
//             </Typography>
//             <Row className='property-grid'>
//                 {cards.slice(index, index + cardsToShow).map((card, cardIndex) => (
//                     <Col key={cardIndex} md={3}>
//                         <Card sx={{ maxWidth: 645 }} onMouseEnter={() => setHoverIndex(cardIndex)}
//                               onMouseLeave={() => setHoverIndex(-1)}>
//                             <CardActionArea>
//                                 <CardMedia component="img" height="140" image={card.image} alt={`${card.title} image`} />
//                                 <CardContent>
//                                     <Typography gutterBottom variant="h6">
//                                         {card.title}
//                                     </Typography>
//                                     <Typography variant="body1" color="text.secondary">
//                                         <CurrencyRupeeIcon />
//                                         <strong>{`${card.price} | ${card.size}`}</strong>
//                                         <div>{card.location}</div>
//                                         <div>{card.readytomove}</div>
//                                     </Typography>
//                                 </CardContent>
//                             </CardActionArea>
//                             <CardActions>
//                                 {hoverIndex === cardIndex && (
//                                     <>
//                                         <Button variant="contained" color="primary" className="details-button">
//                                             <Link to="/details">Read Details</Link>
//                                         </Button>
//                                         <Button variant="contained" color="secondary" className="cart-button"
//                                                 onClick={() => addToCart(card)}>
//                                             Add to Cart
//                                         </Button>
//                                     </>
//                                 )}
//                             </CardActions>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//             <nav className='pagination-controls'>
//                 {index > 0 && (
//                     <Button className='arrow-button prev' onClick={handlePrev}>
//                         <ArrowBackIcon />
//                     </Button>
//                 )}
//                 {index < cards.length - cardsToShow && (
//                     <Button className='arrow-button next' onClick={handleNext}>
//                         <ArrowForwardIcon />
//                     </Button>
//                 )}
//             </nav>
//         </Container>
//     );
// }

// export default Prop;