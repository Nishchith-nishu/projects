import View_detail from "../components/New";
import Footer from "../components/footer";
import More_Details from "../components/more_detail";
import Nav3 from "../components/nav3";
// import New from "../components/New";
import BasicExample from "../components/navbar";
import Prop from "../components/prop_bang";
import MediaCard from "../components/property";
import Advice from "../components/advice";
import { Container } from "react-bootstrap";
const View=()=>{
    return(
        <div style={{ maxWidth: "100%", overflowX: "hidden" }} >
            {/* <Container> */}
        {/* <Nav3></Nav3> */}
      <BasicExample></BasicExample>
       <View_detail></View_detail>
       <More_Details></More_Details>
       {/* <Prop></Prop> */}
       <Advice></Advice>
       <MediaCard></MediaCard>
       <Footer></Footer>
       {/* </Container> */}
        </div>
    )
}
export default View
