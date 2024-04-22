// import React from "react";
// import { Card, Col, Container, Row } from "react-bootstrap";
// import PlayCircleIcon from '@mui/icons-material/PlayCircle';
// import DescriptionIcon from '@mui/icons-material/Description';

// let Guid = () => {
//     return (
//         <Container className="mt-5">
//             <h1><i>Your Real Estate Guide</i></h1>
//             <Row>
//                 <Col xs={4}>
//                     <Card className="me-2" style={{ width: '25rem' }}>
//                         <Card.Body>
//                             <div className="Bricks">
//                                 <h4>Locality Review</h4>
//                                 <iframe className="me-3" style={{ borderRadius: "10px" }} width="250" height="150" src="https://www.youtube.com/embed/eF8KDcxyhwo?si=4k_qZ4q2oFXz1m97" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//                                 <iframe width="250" style={{ borderRadius: "10px" }} height="150" src="https://www.youtube.com/embed/eF8KDcxyhwo?si=4k_qZ4q2oFXz1m97" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//                             </div>
//                             <Card.Title>
//                                 <div className="bricks_1 me-3">
//                                     <span className="me-5">Locality Review - BTM Layout, Bengaluru</span><span>Locality Review -Vijaynagar, Bengaluru</span>
//                                 </div>
//                             </Card.Title>
//                             <Card.Link href="#" style={{ color: 'red', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
//                                 See all
//                                 <span style={{ marginLeft: '5px' }}>&rarr;</span>
//                             </Card.Link>
//                         </Card.Body>
//                     </Card>
//                 </Col>

//                 <Col xs={4}>
//                     <Card className="me-2" style={{ width: '25rem' }}>
//                         <Card.Body>
//                             <div className="Bricks">
//                                 <h4>Industry Insights</h4>
//                                 <PlayCircleIcon className="Bricks_4 me-2" style={{ color: 'red' }}></PlayCircleIcon>What is Rent Agreement - Rent Agreement Sam...<hr></hr>
//                                 <DescriptionIcon className="Bricks_4 me-2" style={{ color: 'red' }}></DescriptionIcon>10 Cheapest Platforms to Pay Rent Using a Credit ...<hr></hr>
//                                 <DescriptionIcon className="Bricks_4 me-2" style={{ color: 'red' }}></DescriptionIcon>12 Best and Posh Societies In Bangalore<hr></hr>
//                                 <PlayCircleIcon className="Bricks_4 me-2" style={{ color: 'red' }}></PlayCircleIcon>Kanakapura Road - Green Suburb of Bangalore<hr></hr>
//                                 <DescriptionIcon className="Bricks_4 me-2" style={{ color: 'red' }}></DescriptionIcon>Lease vs Rent Agreement: Differences, Features &<hr></hr>
//                             </div>
//                             <Card.Link href="#" style={{ color: 'red', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
//                                 See all
//                                 <span style={{ marginLeft: '5px' }}>&rarr;</span>
//                             </Card.Link>
//                         </Card.Body>
//                     </Card>
//                 </Col>

//                 <Col xs={4}>
//                     <Card className="me-2" style={{ width: '25rem' }}>
//                         <Card.Body>
//                             <div className="Bricks">
//                                 <h4>Legal Updates</h4>
//                                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                                     <iframe className="me-3" style={{ borderRadius: "10px" }} width="230" height="150" src="https://www.youtube.com/embed/eF8KDcxyhwo?si=4k_qZ4q2oFXz1m97" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//                                     <div>
//                                         <p>Model Tenancy Act 2021: Protects the rights of landlords and tenants</p>
//                                         <p>the rights of landlords and tenants</p>
//                                     </div>
//                                 </div>
//                             </div><hr></hr>
//                             <div className="Bricks mt-3">
//                                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                                     <iframe className="me-3" style={{ borderRadius: "10px" }} width="230" height="150" src="https://www.youtube.com/embed/eF8KDcxyhwo?si=4k_qZ4q2oFXz1m97" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//                                     <div>
//                                         Pay BBMP Property Tax Online @ bbmptax.karnataka.gov.in
//                                         <Card.Link href="#" style={{ color: 'red', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
//                                             Read article
//                                             <span style={{ marginLeft: '5px' }}>&rarr;</span>
//                                         </Card.Link>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div style={{ display: 'flex', alignItems: 'center' }}>
//                                 <Card.Link className="mt-3 me-3" href="#" style={{ color: 'red', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
//                                     See all
//                                     <span style={{ marginLeft: '5px' }}>&rarr;</span>
//                                 </Card.Link>
//                                 <Card.Link className="mt-3" href="#" style={{ color: 'red', textDecoration: 'none', display: 'flex', alignItems: 'center', marginLeft: "400px", backgroundColor: "red", color: "white" }}>
//                                     Explore Service
//                                 </Card.Link>
//                             </div>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     )
// }

// export default Guid;


// import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import { Link } from "react-router-dom";


const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

let Guid = () => {
    return (
        <Container fluid className="mt-5 mx-3">
            <h1><i>Your Real Estate Guide</i></h1>
            <Row>
                <Col xs={4}>
                    <Card className="vido_h me-2" style={{ width: '25rem' }}>
                        <Card.Body>
                            <div className="Bricks">
                                <h4>Locality Review</h4>
                                <iframe className="me-3" style={{ borderRadius: "10px" }} width="170" height="150" src="https://www.youtube.com/embed/eF8KDcxyhwo?si=4k_qZ4q2oFXz1m97" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                <iframe width="170" style={{ borderRadius: "10px" }} height="150" src="https://www.youtube.com/embed/eF8KDcxyhwo?si=4k_qZ4q2oFXz1m97" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                            <Card.Title>
                                <div className="bricks_1 me-4">
                                    <span className="me-5">Locality Review - BTM Layout,</span><span>Locality Review -Vijaynagar, Bengaluru</span>
                                </div>
                            </Card.Title>
                            <Card.Link className="top" href="#" style={{ color: 'red', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                                See all
                                <span style={{ marginLeft: '5px' }}>&rarr;</span>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={4}>
                    <Card className="vido_h me-2" style={{ width: '25rem' }}>
                        <Card.Body>
                        <div className="Bricks">
  <h4>Industry Insights</h4>
  {/* <p><PlayCircleIcon className="Bricks_4 me-2" style={{ color: 'red' }} />{truncateText("What is Rent Agreement - Rent Agreement...", 50)}</p>
  <p><DescriptionIcon className="Bricks_4 me-2" style={{ color: 'red' }} />10 Cheapest Platforms to Pay Rent credit card</p>
  <p><DescriptionIcon className="Bricks_4 me-2" style={{ color: 'red' }} />12 Best and Posh Societies In Bangalore</p>
  <p><PlayCircleIcon className="Bricks_4 me-2" style={{ color: 'red' }} />Kanakapura Road - Green Suburb of Bangalore</p>
  <p><DescriptionIcon className="Bricks_4 me-2" style={{ color: 'red' }} />Lease vs Rent Agreement: Differences, Features &</p> */}
 <Card.Link className="Bricks_11"> <p><PlayCircleIcon className="Bricks_4 me-2" style={{ color: 'red' }} />{truncateText("What is Rent Agreement - Rent Agreement...", 50)}</p></Card.Link>
<hr />
<Card.Link className="Bricks_11"><p><DescriptionIcon className="Bricks_4 me-2" style={{ color: 'red' }} />10 Cheapest Platforms to Pay Rent credit card</p></Card.Link>
<hr />
<Card.Link className="Bricks_11"><p><DescriptionIcon className="Bricks_4 me-2" style={{ color: 'red' }} />12 Best and Posh Societies In Bangalore</p></Card.Link>
<hr />
<Card.Link className="Bricks_11"><p><PlayCircleIcon className="Bricks_4 me-2" style={{ color: 'red' }} />Kanakapura Road - Green Suburb of Bangalore</p></Card.Link>
<hr />
<Card.Link className="Bricks_11"><p><DescriptionIcon className="Bricks_4 me-2" style={{ color: 'red' }} />Lease vs Rent Agreement: Differences, Features</p></Card.Link>


</div>
                            <Card.Link href="#" style={{ color: 'red', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                                See all
                                <span style={{ marginLeft: '5px' }}>&rarr;</span>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={4}>
                    <Card className="vido_h me-2" style={{ width: '25rem' }}>
                        <Card.Body>
                            <div className="Bricks">
                                <h4>Legal Updates</h4>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <iframe className="me-3" style={{ borderRadius: "10px" }} width="100" height="100" src="https://www.youtube.com/embed/eF8KDcxyhwo?si=4k_qZ4q2oFXz1m97" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    <div>
                                        <p>Model Tenancy Act 2021: Protects the rights of landlords and tenants</p>
                                        <p>the rights of landlords and tenants</p>
                                    </div>
                                </div>
                            </div><hr></hr>
                            <div className="Bricks mt-3">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <iframe className="me-3" style={{ borderRadius: "10px" }} width="100" height="100" src="https://www.youtube.com/embed/eF8KDcxyhwo?si=4k_qZ4q2oFXz1m97" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    <div>
                                        Pay BBMP Property Tax Online @ bbmptax.karnataka.gov.in
                                        <Card.Link href="#" style={{ color: 'red', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                                            Read article
                                            <span style={{ marginLeft: '5px' }}>&rarr;</span>
                                        </Card.Link>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {/* <Card.Link className="mt-3 me-3" href="#" style={{ color: 'red', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                                    See all
                                    {/* <span style={{ marginLeft: '5px' }}>&rarr;</span> */}
                                {/* </Card.Link> */} 
                                <Card.Link className="mt-4" href="#" style={{ color: 'red', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                                See all
                                <span style={{ marginLeft: '5px' }}>&rarr;</span>
                            </Card.Link>
                                {/* <Card.Link className="mt-3" href="#" style={{ color: 'red', textDecoration: 'none', display: 'flex', alignItems: 'center', marginLeft: "400px", backgroundColor: "red", color: "white" }}>
                                    Explore Service
                                </Card.Link> */}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Guid;

