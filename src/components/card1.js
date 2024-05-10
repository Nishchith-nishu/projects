
// import React, { useState } from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { Typography } from '@mui/material';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// // import Arrrowaction from './arrowAction'; // Import arrow action logic
// import Arrrowaction from './arrowAction';
// import { Link } from 'react-router-dom';

// function Bulid() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [startIndex, setStartIndex] = useState(0);
//   const itemsPerPage = 4;

//   const handleMouseEnter = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null);
//   };

//   const { index, handleNext, handlePrev } = Arrrowaction(properties.length, itemsPerPage, startIndex, setStartIndex);

//   return (
//     <Container fluid className="mt-3 mx-3">
//       <Row>
//         <Typography variant='p' style={{ marginTop: '50px', fontSize: '35px' }} className='nav_boldB'>
//           Popular Owner Properties
//         </Typography>
//         {properties.slice(index, index + itemsPerPage).map((property, idx) => (
//           <Col key={idx}>
//             <Card
//               style={{ width: '15rem', height: '21rem', position: 'relative' }}
//               onMouseEnter={() => handleMouseEnter(idx)}
//               onMouseLeave={handleMouseLeave}
//             >
//               <Card.Img
//                 variant="top"
//                 src={property.imageUrl}
//                 style={{ width: '100%', height: '150px' }}
//               />
//               <Card.Body>
//                 <Card.Title>{property.title}</Card.Title>
//                 <Card.Text>
//                   {property.price} || {property.area}<br />
//                   {property.location}<br />
//                   {property.status}
//                 </Card.Text>
//                 {hoveredIndex === idx && (


//                <Link to="/View"> <button className="ButtonStyle" onClick={() => console.log('View Details clicked')}>
//                     View Details
//                   </button></Link>
//                 )}
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//       {index > 0 && (
//         <button className='ArrowButtonLeft' onClick={handlePrev}>
//           <ArrowBackIcon />
//         </button>
//       )}
//       {index < properties.length - itemsPerPage && (
//         <button className='ArrowButtonRight' onClick={handleNext}>
//           <ArrowForwardIcon />
//         </button>
//       )}
//     </Container>
//   );
// }

// const properties = [
//   {
//     imageUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Feb/08/Photo_h300_w450/71111891_2_PropertyImage1707391665895_300_450.jpg",
//     title: "3 BHK Flat",
//     price: "₹56,000",
//     area: "1578 sqft",
//     location: "Krishnarajapura, Bangalore",
//     status: "Ready to move",
//   },
//   {
//     imageUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/19/Photo_h300_w450/71939711_1_f6ef40af-737c-4893-9ce3-2b11f718680d_300_450.jpeg",
//     title: "2 BHK Flat",
//     price: "₹15,000",
//     area: "1000 sqft",
//     location: "Chandapura, Bangalore",
//     status: "Ready to move",
//   },
//   {
//     imageUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Feb/08/Photo_h180_w240/71111891_2_PropertyImage1707391665895_180_240.jpg",
//     title: "4 BHK Flat",
//     price: "₹48,000",
//     area: "1376 sqft",
//     location: "Phase 1 Electronics City, Bangalore",
//     status: "Ready to move"
//   },
//   {
//     imageUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Apr/10/Photo_h180_w240/69804051_1_PropertyImage1712475883341_180_240.jpg",
//     title: "5 BHK Flat",
//     price: "₹30,000",
//     area: "1398 sqft",
//     location: "Sahakar Nagar, Bangalore",
//     status: "Ready to move"
//   },
//   {
//     imageUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Oct/10/Photo_h180_w240/69494999_15_4fc62166a554b46b91dde0f5f2ee6fa_180_240.jpg",
//     title: "2 BHK Flat",
//     price: "₹30,000",
//     area: "1398 sqft",
//     location: "Sahakar Nagar, Bangalore",
//     status: "Ready to move"
//   },  {
//     imageUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/17/Photo_h180_w240/71908817_4_hatsAppImage20240317at8.17.43PM2_180_240.jpeg",
//     title: "3 BHK Flat",
//     price: "₹30,000",
//     area: "1398 sqft",
//     location: "Sahakar Nagar, Bangalore",
//     status: "Ready to move"
//   },{
//     imageUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/19/Photo_h300_w450/71939711_1_f6ef40af-737c-4893-9ce3-2b11f718680d_300_450.jpeg",
//     title: "2 BHK Flat",
//     price: "₹15,000",
//     area: "1000 sqft",
//     location: "Chandapura, Bangalore",
//     status: "Ready to move",
//   }
// ];

// export default Bulid;



// import React, { useEffect, useState } from "react";
// import { Card, Col, Row, Modal, Button } from 'react-bootstrap';

// const ListProduct = () => {
//   const [allProducts, setAllProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const fetchInfo = async () => { 
//     try {
//       const response = await fetch('http://localhost:3002/allproducts');
//       if (!response.ok) {
//         throw new Error('Failed to fetch products');
//       }
//       const data = await response.json();
//       setAllProducts(data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   useEffect(() => {
//     fetchInfo();
//   }, []);

//   const handleOwnerDetailsClick = (product) => {
//     setSelectedProduct(product);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div>
//       <h1>Owner Details</h1>
//       <Row xs={1} md={2} lg={3} className="g-4">
//         {allProducts.map((product) => (
//           <Col key={product._id}>
//             <Card>
//               <Card.Img variant="top" src={`http://localhost:3002/${product.image}`} style={{ width: "100%", height:"200px" }} />
//               <Card.Body>
//                 {/* <Card.Title><b>ownerName:</b>{product.name}</Card.Title> */}
//                 <Card.Text>
//                   {/* <p><b>Email:</b>{product.email}</p>
//                   <p><b>Number:</b>{product.number}</p> */}
//                   {/* <p><b>Flat:</b>{product.flat}</p>
//                   <p><b>Price:</b>{product.price}</p>
//                   <p><b>SquareFeet:</b>{product.sqft}</p> */}
//                   <p><b>Address:</b>{product.address}</p>
//                 </Card.Text>
//               </Card.Body>
//               <Button variant="danger" onClick={() => handleOwnerDetailsClick(product)}>Owner details</Button>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Owner Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedProduct && (
//             <div>
//                               <Card.Img variant="top" src={`http://localhost:3002/${selectedProduct.image}`} style={{ width: "100%", height:"200px" }} />

//               <p><b>Owner Name:</b> {selectedProduct.name}</p>
//               <p><b>Email:</b> {selectedProduct.email}</p>
//               <p><b>Number:</b> {selectedProduct.number}</p>
//               <p><b>Flat:</b> {selectedProduct.flat}</p>
//               <p><b>Price:</b> {selectedProduct.price}</p>
//               <p><b>Square Feet:</b> {selectedProduct.sqft}</p>
//               <p><b>Address:</b> {selectedProduct.address}</p>
//             </div>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default ListProduct;



// import React, { useEffect, useState } from "react";
// import { Card, Col, Row, Modal, Button } from 'react-bootstrap';

// const ListProduct = () => {
//   const [allProducts, setAllProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const fetchInfo = async () => { 
//     try {
//       const response = await fetch('http://localhost:3002/allproducts');
//       if (!response.ok) {
//         throw new Error('Failed to fetch products');
//       }
//       const data = await response.json();
//       setAllProducts(data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   useEffect(() => {
//     fetchInfo();
//   }, []);

//   const handleOwnerDetailsClick = (product) => {
//     setSelectedProduct(product);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div>
//       <h1>Owner Details</h1>
//       <Row xs={1} md={2} lg={3} className="g-4">
//         {allProducts.map((product) => (
//           <Col key={product._id}>
//             <Card>
//               <Card.Img variant="top" src={`http://localhost:3002/${product.image}`} style={{ width: "100%", height:"200px" }} />
//               <Card.Body>
//                 <Card.Text>
//                   <p><b>Address:</b> {product.address}</p>
//                 </Card.Text>
//               </Card.Body>
//               <Button variant="danger" onClick={() => handleOwnerDetailsClick(product)}>Owner details</Button>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Owner Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedProduct && (
//             <div>
//               <Card.Img variant="top" src={`http://localhost:3002/${selectedProduct.image}`} style={{ width: "100%", height:"200px" }} />
//               <p><b>Owner Name:</b> {selectedProduct.name}</p>
//               <p><b>Email:</b> {selectedProduct.email}</p>
//               <p><b>Number:</b> {selectedProduct.number}</p>
//               <p><b>Flat:</b> {selectedProduct.flat}</p>
//               <p><b>Price:</b> {selectedProduct.price}</p>
//               <p><b>Square Feet:</b> {selectedProduct.sqft}</p>
//               <p><b>Address:</b> {selectedProduct.address}</p>
//             </div>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default ListProduct;



// import React, { useEffect, useState } from "react";
// import { Card, Col, Row, Modal, Button,Container } from 'react-bootstrap';

// const ListProduct = () => {
//   const [allProducts, setAllProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const fetchInfo = async () => { 
//     try {
//       const response = await fetch('http://localhost:3002/allproducts');
//       if (!response.ok) {
//         throw new Error('Failed to fetch products');
//       }
//       const data = await response.json();
//       setAllProducts(data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   useEffect(() => {
//     fetchInfo();
//   }, []);

//   const handleOwnerDetailsClick = (product) => {
//     setSelectedProduct(product);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div>
//       <h1>Owner Details</h1>
//       <Container fluid>
//       {/* <Row xs={1} md={3} lg={3} className="g-4"> */}
//       <Row className="g-4" style={{ display: "flex", flexWrap: "nowrap", overflowX: "auto" }}>

//         {allProducts.map((product) => (
//           <Col key={product._id}>
//             <Card>
//               <Card.Img variant="top" src={`http://localhost:3002/${product.image}`} style={{ width: "100%", height:"200px" }} />
//               <Card.Body>
//                 <Card.Text>
//                   <p><b>Address:</b> {product.address}</p>
//                 </Card.Text>
//               </Card.Body>
//               <Button variant="danger" onClick={() => handleOwnerDetailsClick(product)}>Owner details</Button>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//       </Container>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Owner Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedProduct && (
//             <div>
//               <Card.Img variant="top" src={`http://localhost:3002/${selectedProduct.image}`} style={{ width: "100%", height:"200px" }} />
//               <p><b>Owner Name:</b> {selectedProduct.name}</p>
//               <p><b>Email:</b> {selectedProduct.email}</p>
//               <p><b>Number:</b> {selectedProduct.number}</p>
//               <p><b>Flat:</b> {selectedProduct.flat}</p>
//               <p><b>Price:</b> {selectedProduct.price}</p>
//               <p><b>Square Feet:</b> {selectedProduct.sqft}</p>
//               <p><b>Address:</b> {selectedProduct.address}</p>
//             </div>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default ListProduct;


import React, { useEffect, useState } from "react";
import { Card, Col, Row, Modal, Button, Container } from 'react-bootstrap';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const fetchInfo = async () => {
    try {
      const response = await fetch('http://localhost:3002/allproducts');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const handleOwnerDetailsClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNext = () => {
    if (startIndex + 2 * itemsPerPage < allProducts.length) {
      setStartIndex(startIndex + itemsPerPage);
    } else {
      setStartIndex(0);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage);
    } else {
      const lastIndex = Math.max(0, allProducts.length - itemsPerPage);
      setStartIndex(lastIndex);
    }
  };

  return (
    <div>
      <h1>Owner Details</h1>
      <Container fluid>
        <Row className="g-4" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          {allProducts.slice(startIndex, startIndex + itemsPerPage).map((product) => (
            <Col key={product._id}>
              <Card>
                <Card.Img variant="top" src={`http://localhost:3002/${product.image}`} style={{ width: "100%", height: "200px" }} />
                <Card.Body>
                  <Card.Text>
                    <p><b>Address:</b> {product.address}</p>
                  </Card.Text>
                </Card.Body>
                <Button variant="danger" onClick={() => handleOwnerDetailsClick(product)}>Owner details</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    <span className="ArrowButtonLeft">  <button onClick={handlePrev}><ArrowBackIcon /></button></span>
    <span className="ArrowButtonRight"> <button onClick={handleNext}><ArrowForwardIcon /></button></span> 
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Owner Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <div>
              <Card.Img variant="top" src={`http://localhost:3002/${selectedProduct.image}`} style={{ width: "100%", height: "200px" }} />
              <p><b>Owner Name:</b> {selectedProduct.name}</p>
              <p><b>Email:</b> {selectedProduct.email}</p>
              <p><b>Number:</b> {selectedProduct.number}</p>
              <p><b>Flat:</b> {selectedProduct.flat}</p>
              <p><b>Price:</b> {selectedProduct.price}</p>
              <p><b>Square Feet:</b> {selectedProduct.sqft}</p>
              <p><b>Address:</b> {selectedProduct.address}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ListProduct;




