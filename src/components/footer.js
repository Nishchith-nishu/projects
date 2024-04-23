import React from 'react';

import { Container ,Row,Col} from 'react-bootstrap';
import ReadMoreLess from './readmore';
 
const Footer = () => {
  return (
    <>
    <footer className="footer">
      <Container fluid className=' bgm mt-3 mx-3'>
        <Row className='mt-5'>
          <Col>
      <div  >
        <div className="footer-section about"  >
          <h5>About MSBricks</h5>
          {/* <ReadMoreLess maxLength={80} >
            MSBricks is your trusted partner in the real estate market, providing comprehensive solutions for buying, selling, and renting properties across the globe. With years of experience and a commitment to service excellence, MSBricks helps you navigate the complex world of real estate with ease and confidence.
          </ReadMoreLess> */}
        </div>
        </div>
      
        <div className="footer-section contact">
          <h6>More From Our Network</h6>
        
        </div>
        <div className="footer-section social">
          <h4> </h4>
          <a href="#/" className='footmrgin'target='_blank'>Times Of India</a>
          <a href="#/" className='footmrgin'target='_blank'>Economic Times</a>
          <a href="#/" className='footmrgin'target='_blank'>Navbharat times</a>
          <a href="#/" className='footmrgin'target='_blank'>India Times</a>
          <a href="#/" className='footmrgin'target='_blank'>Filmfare</a><br/>
          <a href="#/" className='footmrgin2'target='_blank'>MensXp</a>
          <a href="#/" className='footmrgin2'target='_blank'>iDiva</a>
          <a href="#/" className='footmrgin2'target='_blank'>TimesJobs</a>
          <a href="#/" className='footmrgin2'target='_blank'>  Gadgets Now</a> 
          <br/>
               
        </div>
        </Col>
        <Col>
        <div>
        </div>
      
        <div className="footer-section contact">
        
        
        </div>
       
        </Col>
        </Row>
        </Container>
         
    </footer>
    <footer className='bg-dark text-light py-1' >
      <p className='mx-4' style={{fontSize:'14px'}}>All trademarks, logo and names are properties of their respective owners. All Rights Reserved. © Copyright 2024 Magicbricks Realty Services Limited.</p>
    </footer>
    </>
  );
};

export default Footer;
