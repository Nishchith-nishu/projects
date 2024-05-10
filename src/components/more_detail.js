// import { Container,Card } from "react-bootstrap";
// import ReportIcon from '@mui/icons-material/Report';
// import { colors } from "@mui/material";

// const More_Details=()=>{
//     return(
//         <div>
//               <Container fluid className="mx-3 mt-3" style={{ width: "25rem" }}>
//                 {/* <h1>hloooooo</h1> */}
//                 <Card className="poo">
//                     <Card.Body>
//                       <h3> <p><b> More_Details</b></p></h3>
//                       <h5>   <span className="me-5 mt-3"> Rental Value</span><span className="mon"><b>₹40,000 | ₹5,000</b> Monthly Maintenance</span></h5>


//                   <h5><span className="me-5 mt-3">Address</span><span className="tu"><b>
// B-1601., Thanisandra Main Road, Bangalore - North, Karnataka</b></span></h5>


// <h5><span className="mo">Move your household goods.
// Packers and Movers
// starting at ₹ 3900/-</span></h5>

// <h5 ><span className="me-5 mt-5">Furnishing</span><span className="mon">
// <b>Semi-Furnished</b></span></h5>


// <h5 ><span className="me-5 mt-5">Overlooking
// </span><span className="tues">
// <b>Main Road</b></span></h5>


// <h5 ><span className="me-5">Age of Construction

// </span><span className="thu">
// <b>New Construction</b></span></h5>

// <h5 ><span className="me-5">Lift

// </span><span className="fri">
// <b>2</b></span></h5>
// <p><button className="btn btn-danger me-5 mt-3">Contact_Owner</button>
// <span className="rip"><ReportIcon></ReportIcon>Report_Owner</span></p>

        
//                     </Card.Body>
//                 </Card>
//             </Container>
//         </div>
//     )
// }
// export default More_Details



// // import React, { useState } from 'react';
// // import { Container, Card } from 'react-bootstrap';
// // import ReportIcon from '@mui/icons-material/Report';
// // // import Popup from './Popup'; // Import Popup component
// // import Popup from './pop';

// // const More_Details = () => {
// //     const [anchorEl, setAnchorEl] = useState(null);

// //     const handleClick = (event) => {
// //         setAnchorEl(event.currentTarget);
// //     };

// //     const handleClose = () => {
// //         setAnchorEl(null);
// //     };

// //     const open = Boolean(anchorEl);

// //     return (
// //         <div>
// //             <Container fluid className="mx-3 mt-3" style={{ width: "25rem" }}>
// //                 <Card className="poo">
// //                     <Card.Body>
// //                         <h3><b>More Details</b></h3>
// //                         <h5><span className="me-5 mt-3">Rental Value</span><span className="mon"><b>₹40,000 | ₹5,000</b> Monthly Maintenance</span></h5>
// //                         <h5><span className="me-5 mt-3">Address</span><span className="tu"><b>B-1601., Thanisandra Main Road, Bangalore - North, Karnataka</b></span></h5>
// //                         <h5><span className="mo">Move your household goods. Packers and Movers starting at ₹ 3900/-</span></h5>
// //                         <h5><span className="me-5 mt-5">Furnishing</span><span className="mon"><b>Semi-Furnished</b></span></h5>
// //                         <h5><span className="me-5 mt-5">Overlooking</span><span className="tues"><b>Main Road</b></span></h5>
// //                         <h5><span className="me-5">Age of Construction</span><span className="thu"><b>New Construction</b></span></h5>
// //                         <h5><span className="me-5">Lift</span><span className="fri"><b>2</b></span></h5>
// //                         <p><button className="btn btn-danger me-5 mt-3" onClick={handleClick}>Contact Owner</button>
// //                             <span className="rip"><ReportIcon /> Report Owner</span></p>
// //                         <Popup open={open} anchorEl={anchorEl} handleClose={handleClose} />
// //                     </Card.Body>
// //                 </Card>
// //             </Container>
// //         </div>
// //     );
// // }

// // export default More_Details;

// import { useState } from 'react';
// import { Container, Card, Button, Modal, Form,Row,Col } from 'react-bootstrap';
// import ReportIcon from '@mui/icons-material/Report';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// const More_Details = () => {
//     const [showModal, setShowModal] = useState(false);
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [countryCode, setCountryCode] = useState('91');

//     const handleCloseModal = () => setShowModal(false);
//     const handleShowModal = () => setShowModal(true);

//     const handlePhoneNumberChange = (event) => {
//         setPhoneNumber(event.target.value);
//     };

//     const handleCountryCodeChange = (event) => {
//         setCountryCode(event.target.value);
//     };

//     return (
//         <div>
//             <Container fluid className="mx-3 mt-3" style={{ width: "25rem" }}>
//                 <Card className="poo">
//                     <Card.Body>
//                         <h3><b>More Details</b></h3>
//                         <h5><span className="me-5 mt-3">Rental Value</span><span className="mon"><b>₹40,000 | ₹5,000</b> Monthly Maintenance</span></h5>
//                         <h5><span className="me-5 mt-3">Address</span><span className="tu"><b>B-1601., Thanisandra Main Road, Bangalore - North, Karnataka</b></span></h5>
//                         <h5><span className="mo">Move your household goods. Packers and Movers starting at ₹ 3900/-</span></h5>
//                         <h5><span className="me-5 mt-5">Furnishing</span><span className="mon"><b>Semi-Furnished</b></span></h5>
//                         <h5><span className="me-5 mt-5">Overlooking</span><span className="tues"><b>Main Road</b></span></h5>
//                         <h5><span className="me-5">Age of Construction</span><span className="thu"><b>New Construction</b></span></h5>
//                         <h5><span className="me-5">Lift</span><span className="fri"><b>2</b></span></h5>
//                         <p>
//                             <Button variant="danger" className="me-5 mt-3" onClick={handleShowModal}>Contact Owner</Button>
//                             <span className="rip"><ReportIcon />Report_Owner</span>
//                         </p>
//                     </Card.Body>
//                 </Card>
//             </Container>

//             {/* Modal for Contact Owner */}
//             <Modal show={showModal} onHide={handleCloseModal}>
//     <Modal.Header closeButton className='remove-border'>
//         <Modal.Title className='tite'>
//             Enter your WhatsApp No
//             <WhatsAppIcon style={{ color: "green", marginLeft: '0.5rem' }} />
//             to get Contact Details of the Owner
//         </Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//     <Container>
//         <Row>
//             <Col className="bor md-1" controlId="formBasicName">
//                 <Form.Label></Form.Label>
//                 <Form.Control type="text" placeholder=" your name" style={{ border: 'none', borderBottom: '1px solid #ced4da' }} autoFocus />
//             </Col>
//         </Row>
//         <Row>
//             <Col className="bor md-1" controlId="formBasicEmail">
//                 <Form.Label></Form.Label>
//                 <Form.Control type="email" placeholder=" email" style={{ border: 'none', borderBottom: '1px solid #ced4da' }} />
//             </Col>
//         </Row>
//         <Row>
//             <Col className="bor md-1" controlId="formBasicPhoneNumber">
//                 <Form.Label></Form.Label>
//                 <div className="d-flex">
//                     <Form.Select className="me-2" style={{border:"none",borderBottom:"1px solid #ced4da"}} value={countryCode} onChange={handleCountryCodeChange}>
//                         <option value="91">+91 (India)</option>
//                         <option value="1">+1 (United States)</option>
//                     </Form.Select>
//                     <Form.Control
//                         type="text"
//                         placeholder="Phone number"
//                         value={phoneNumber}
//                         onChange={handlePhoneNumberChange}
//                         style={{ border: 'none', borderBottom: '1px solid #ced4da' }}
//                     />
//                 </div>
//             </Col>
//         </Row>
//     </Container>
// </Modal.Body>
//     <Modal.Footer className="d-flex justify-content-center remove-border">
//     <Button variant="primary" className='clic' onClick={handleCloseModal} style={{ backgroundColor: 'red', borderRadius: '20px' }}>Do Contact</Button>
// </Modal.Footer>
// </Modal>

//         </div>
//     );
// }

// export default More_Details;



import { useState ,useEffect} from 'react';
import { Container, Card, Button, Modal, Form, Row, Col } from 'react-bootstrap';
import ReportIcon from '@mui/icons-material/Report';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const More_Details = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userNumber, setUserNumber] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('91');

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleCountryCodeChange = (event) => {
        setCountryCode(event.target.value);
    };
    useEffect(() => {
        const storedUserName = localStorage.getItem("userName");
        const storedUserEmail = localStorage.getItem("userEmail");
        const storedUserNumber = localStorage.getItem("userNumber");
      
        if (storedUserName || storedUserEmail || storedUserNumber) {
          setIsLoggedIn(true);
          setUserName(storedUserName);
          setUserEmail(storedUserEmail);
          setUserNumber(storedUserNumber);
        } else {
          setIsLoggedIn(false);
        }
      }, []);

    return (
        <Container fluid className="mx-auto mt-3" style={{ maxWidth: "82rem" }}>
            <Card className="poo">
                <Card.Body>
                    <h3 className="text-center"><b>More Details</b></h3>
                    <div className="mb-3">
                        <span className="me-3">Rental Value:</span>
                        <span className="mon"><b>₹40,000 | ₹5,000</b> Monthly Maintenance</span>
                    </div>
                    <div className="mb-3">
                        <span className="me-3">Address:</span>
                        <span className="tu"><b>B-1601., Thanisandra Main Road, Bangalore - North, Karnataka</b></span>
                    </div>
                    <div className="mb-3">
                        <span className="mo">Move your household goods. Packers and Movers starting at ₹ 3900/-</span>
                    </div>
                    <div className="mb-3">
                        <span className="me-3">Furnishing:</span>
                        <span className="mon"><b>Semi-Furnished</b></span>
                    </div>
                    <div className="mb-3">
                        <span className="me-3">Overlooking:</span>
                        <span className="tues"><b>Main Road</b></span>
                    </div>
                    <div className="mb-3">
                        <span className="me-3">Age of Construction:</span>
                        <span className="thu"><b>New Construction</b></span>
                    </div>
                    <div className="mb-3">
                        <span className="me-3">Lift:</span>
                        <span className="fri"><b>2</b></span>
                    </div>
                    <div>
                        <Button variant="danger" className="me-3" onClick={handleShowModal}>Contact Owner</Button>
                        <span className="rip"><ReportIcon /> Report Owner</span>
                    </div>
                </Card.Body>
            </Card>

            {/* Modal for Contact Owner */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton className='remove-border'>
                    <Modal.Title className='tite'>
                        Enter your WhatsApp No
                        <WhatsAppIcon style={{ color: "green", marginLeft: '0.5rem' }} />
                        to get Contact Details of the Owner
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col controlId="formBasicName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Your name" autoFocus  value={isLoggedIn ? userName : ''} />
                            </Col>
                        </Row>
                        <Row>
                            <Col controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" value={isLoggedIn ? userEmail : '' }/>
                            </Col>
                        </Row>
                        <Row>
                            <Col controlId="formBasicPhoneNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <div className="d-flex">
                                    <Form.Select className="me-2" value={countryCode}> 
                                    {/* onChange={handleCountryCodeChange}> */}
                                        <option value="91">+91 (India)</option>
                                        <option value="1">+1 (United States)</option>
                                    </Form.Select>
                                    <Form.Control
                                        type="text"
                                        placeholder="Phone number"
                                        value={isLoggedIn ? userNumber : ''} 
                                        // onChange={handlePhoneNumberChange}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center remove-border">
                    <Button variant="primary" className='clic' onClick={handleCloseModal} style={{ backgroundColor: 'red', borderRadius: '20px' }}>Do Contact</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}
export default More_Details;