import Advice from "../components/advice";
import Agent from "../components/agents";
import Bulid from "../components/card1";
import Cards from "../components/cards";
import Guid from "../components/guid";
import Header from "../components/header";
import BasicExample from "../components/navbar";
import Nav2 from "../components/navbar2";
import Post from "../components/post";
import Prop from "../components/prop_bang";
import MediaCard from "../components/property";
import Snap from "../components/snap";
import Service from "../components/society";
import Bulidings from "../components/trading";


// import Property from "../components/property";

const Home=()=>{
    return(
        <div>
            <BasicExample></BasicExample>
            <Nav2/>
            <hr className="mt-2"></hr>
            <Header/>

            <Cards></Cards>
            <Bulid></Bulid>
            <Agent></Agent>
            {/* <Property></Property> */}
            <MediaCard></MediaCard>
            <Service></Service>
            <Advice></Advice>
            <Guid></Guid>
            <Prop></Prop>
            {/* <Trand></Trand> */}
            {/* <Bulidings></Bulidings> */}
            {/* <Snap></Snap> */}
            {/* <Post></Post> */}
            
        </div>
    )
}
export default Home