import React from "react";
import { Container ,Navbar ,Dropdown,Form,Button } from "react-bootstrap";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddHomeIcon from '@mui/icons-material/AddHome';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import SearchIcon from '@mui/icons-material/Search';

let Header=()=>{
    return(

        <div>
            <Container className="col-4 mt-5 mb-5">
                <h3>find your prefect <i><b>Rental home</b></i></h3>
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

            <div className="srchround  border   p-3">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
            <Form className="d-flex flex-grow-1 justify-content-center align-items-center ">
              <Dropdown className="me-2 ms-4">
              <Dropdown.Toggle variant="light" id="budget-dropdown">
              <LocationOnIcon style={{color:'red'}}></LocationOnIcon>location
              </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Option 1</Dropdown.Item>
                  <Dropdown.Item href="#">Option 2</Dropdown.Item>
                  {/* Add more options here */}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="me-2 ms-4">
              <Dropdown.Toggle variant="light" id="budget-dropdown">
              <AddHomeIcon style={{color:'red'}}></AddHomeIcon>Flate+1
              </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">1 BHK</Dropdown.Item>
                  <Dropdown.Item href="#">2 BHK</Dropdown.Item>
                  <Dropdown.Item href="#">3 BHK</Dropdown.Item>
                  <Dropdown.Item href="#">4 BHK</Dropdown.Item>
                  {/* Add more options here */}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="me-2 ms-4">
                <Dropdown.Toggle variant="light" id="budget-dropdown">
                  <CurrencyRupeeIcon style={{color:'red'}}></CurrencyRupeeIcon>   Budget
                 </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">₹5000</Dropdown.Item>
                  <Dropdown.Item href="#">₹10000</Dropdown.Item>
                  <Dropdown.Item href="#">₹15000</Dropdown.Item>
                  <Dropdown.Item href="#">₹20000</Dropdown.Item>
                  <Dropdown.Item href="#">₹100000</Dropdown.Item>
                  <Dropdown.Item href="#">₹10000</Dropdown.Item>
                  {/* Add more options here */}
                </Dropdown.Menu>
              </Dropdown>
              {/* <Form.Control type="text" placeholder="Search"  style={{ width: '150px' }} className="me-2" id="form-control col-3" /> */}
              <Button variant="danger"className="ms-4">Search</Button>
            </Form>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </div>
        </div>
    )
}
export default Header