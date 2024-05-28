// import React from "react";
import { Container ,Navbar ,Dropdown,Form,Button,Modal, Col,Card,InputGroup } from "react-bootstrap";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddHomeIcon from '@mui/icons-material/AddHome';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import SearchIcon from '@mui/icons-material/Search';
// import { useState } from "react";
import React, { useState,useEffect } from 'react';
// import { Carousel } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import FmdGoodIcon from '@mui/icons-material/FmdGood';


let Header=()=>{

  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [notFound, setNotFound] = useState(false);
  // const [profileImage, setProfileImage] = useState(null);
 

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toUpperCase());
    setNotFound(false);
    if (e.target.value === '') {
      setSuggestions([]);
    }
  };

  const handleSubmit = () => {
    fetch("http://localhost:3002/allproducts")
      .then(res => res.json())
      .then(products => {
        const filteredSuggestions = products.filter(product =>
          product.address.toUpperCase().startsWith(inputValue)
        );
        setSuggestions(filteredSuggestions);
        if (filteredSuggestions.length > 0) {
          setShowModal(true);
        } else {
          setNotFound(true);
        }
      })
      .catch(error => console.error('Error fetching products:', error));
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
    setNotFound(false);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

    return(
<>
        <div>
            <Container className=" fo col-4 mt-5 mb-5">
                <h3>Find your prefect <i><b>Rental home</b></i></h3>
            </Container >
            <Container className=" d-flex justify-content-center ms-4 mb-3">
            <Navbar.Text href="#home" className=' nav_bold text-dark ms-4'>Buy</Navbar.Text>
            <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>Rent</Navbar.Text>
            <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>New Projects</Navbar.Text>
            <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>PG</Navbar.Text>
            <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>Plot</Navbar.Text>
            <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>Commercial</Navbar.Text>
            <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>Post Free Property Ad</Navbar.Text>
            </Container>

            {/* <div className="srchround  border   p-3"> */}
            <div className=" searchRoundeed border  p-3 mt-3" style={{width:'60%', marginLeft:'14rem',borderRadius:'10px'}}>


<Navbar expand="lg" className="bg-body-tertiary">
  <Container>
    
    <Form className="d-flex flex-grow-1 justify-content-center align-items-center">
      

      <div className="d-flex align-items-center w-100 justify-content-between">

        <Form className="d-flex align-items-center flex-grow-1 me-2 mt-1" style={{ maxWidth: '300px' }}>
          <span className="input-group-text" style={{ backgroundColor: 'transparent', border: 'none' }}>
            <FmdGoodIcon style={{ color: 'red' }} />
          </span>
          <Form.Control
            type="search"
            value={inputValue}
            onChange={handleInputChange}
            style={{ borderRadius: 20, minWidth: 200 }}
            placeholder="Enter city, location, projects"
            aria-label="Search"
          />
        </Form>

        <Dropdown className="me-2 ms-4">
          <Dropdown.Toggle variant="light" id="budget-dropdown">
            <AddHomeIcon style={{ color: 'red' }}></AddHomeIcon>Flate+1
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">1 BHK</Dropdown.Item>
            <Dropdown.Item href="#">2 BHK</Dropdown.Item>
            <Dropdown.Item href="#">3 BHK</Dropdown.Item>
            <Dropdown.Item href="#">4 BHK</Dropdown.Item>
          
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="me-2 ms-4">
          <Dropdown.Toggle variant="light" id="budget-dropdown">
            <CurrencyRupeeIcon style={{ color: 'red' }}></CurrencyRupeeIcon>Budget
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">₹5000</Dropdown.Item>
            <Dropdown.Item href="#">₹10000</Dropdown.Item>
            <Dropdown.Item href="#">₹15000</Dropdown.Item>
            <Dropdown.Item href="#">₹20000</Dropdown.Item>
            <Dropdown.Item href="#">₹100000</Dropdown.Item>
            <Dropdown.Item href="#">₹10000</Dropdown.Item>
          
          </Dropdown.Menu>
        </Dropdown>

        <Button variant="danger" className="mt-1 ms-4" onClick={handleSubmit} style={{ borderRadius: 10 }}>
          Search
        </Button>
      </div>
  
   </Form> 


   
   </Container>
</Navbar>



    </div>
    <Card className="caard" style={{ width: '17rem' }}>
      <Carousel indicators={true} controls={false}>
        <Carousel.Item>
          <img src="https://cdn.staticmb.com/magicservicestatic/images/bangalore-homepage-web.png" alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://cdn.staticmb.com/magicservicestatic/images/bangalore-homepage-web.png" alt="Second slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/tvc/tvc-campaign-web-home-buy.png" alt="Third slide"/>
        </Carousel.Item>
      </Carousel>
    </Card>


        </div>
        
        <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{notFound ? 'Product Not Found' : (selectedProduct ? selectedProduct.name: 'Search Suggestions')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {notFound ? (
            <p>No products found</p>
          ) : (
            selectedProduct ? (
              <div>
                <p><b>Title:</b> {selectedProduct.address}</p>
                <img src={`http://localhost:3002/${selectedProduct.image}`} alt={selectedProduct.image} width={200} height={200} />
                {/* <p><b>Description:</b> ${selectedProduct.description}</p> */}
                {/* <p><b>Price:</b> ${selectedProduct.price}</p> */}
                {/* <p><b>Rating:</b> {selectedProduct.rating.rate}</p> */}
              </div>
            ) : (
              <ul>
                {suggestions.map(product => (
                  <li key={product.id} onClick={() => handleProductClick(product)}>{product.address}</li>
                ))}
              </ul>
            )
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    {/* </div> */}
    </>
   
    )
}

export default Header