// import { Container } from 'react-bootstrap';
// import Carousel from 'react-bootstrap/Carousel';
// // import ExampleCarouselImage from 'components/ExampleCarouselImage';

// function Caros() {
//   return (
//     <Container fluid>
//     <Carousel className=" mt-5 mx-5 mb-5 ">
//       <Carousel.Item>
//         {/* <ExampleCarouselImage text="First slide" /> */}
//         <img src='https://cdn.staticmb.com/property/microsite/mbimages/trifecta-vanto-phase-1-sarjapur-road-bangalore/images/img3.jpg'/>
     
       
//       </Carousel.Item>
//       <Carousel.Item>
//         <img src='https://cdn.staticmb.com/property/microsite/mbimages/trifecta-vanto-phase-1-sarjapur-road-bangalore/images/img1.jpg'/>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src='https://cdn.staticmb.com/property/microsite/mbimages/trifecta-vanto-phase-1-sarjapur-road-bangalore/images/img.jpg'/>
//       </Carousel.Item>
//     </Carousel>
//     </Container>
//   );
// }

// export default Caros;




import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function Caros() {
  return (
    <Container fluid className='mt-3 mx-3'>
        <h2 className='sedan-sc-regular mb-2  mx-4'>An Exclusive Showcase - Trifecta Vanto Phase 1</h2>
      <Carousel className="mt-1 mx-5 mb-5" interval={3000}>
        <Carousel.Item>
          <img
            src="https://cdn.staticmb.com/property/microsite/mbimages/trifecta-vanto-phase-1-sarjapur-road-bangalore/images/img3.jpg"
            alt="First slide"
            className="d-block w-100"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://cdn.staticmb.com/property/microsite/mbimages/trifecta-vanto-phase-1-sarjapur-road-bangalore/images/img1.jpg"
            alt="Second slide"
            className="d-block w-100"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://cdn.staticmb.com/property/microsite/mbimages/trifecta-vanto-phase-1-sarjapur-road-bangalore/images/img.jpg"
            alt="Third slide"
            className="d-block w-100"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Caros;
