import { Container,Card } from "react-bootstrap";
import ReportIcon from '@mui/icons-material/Report';
import { colors } from "@mui/material";

const More_Details=()=>{
    return(
        <div>
              <Container fluid className="mx-3 mt-3" style={{ width: "25rem" }}>
                {/* <h1>hloooooo</h1> */}
                <Card className="poo">
                    <Card.Body>
                      <h3> <p><b> More_Details</b></p></h3>
                      <h5>   <span className="me-5 mt-3"> Rental Value</span><span className="mon"><b>₹40,000 | ₹5,000</b> Monthly Maintenance</span></h5>


                  <h5><span className="me-5 mt-3">Address</span><span className="tu"><b>
B-1601., Thanisandra Main Road, Bangalore - North, Karnataka</b></span></h5>


<h5><span className="mo">Move your household goods.
Packers and Movers
starting at ₹ 3900/-</span></h5>

<h5 ><span className="me-5 mt-5">Furnishing</span><span className="mon">
<b>Semi-Furnished</b></span></h5>


<h5 ><span className="me-5 mt-5">Overlooking
</span><span className="tues">
<b>Main Road</b></span></h5>


<h5 ><span className="me-5">Age of Construction

</span><span className="thu">
<b>New Construction</b></span></h5>

<h5 ><span className="me-5">Lift

</span><span className="fri">
<b>2</b></span></h5>
<p><button className="btn btn-danger me-5 mt-3">Contact_Owner</button>
<span className="rip"><ReportIcon></ReportIcon>Report_Owner</span></p>

        
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
export default More_Details

