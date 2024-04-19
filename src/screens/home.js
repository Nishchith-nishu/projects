import Bulid from "../components/card1";
import Cards from "../components/cards";
import Header from "../components/header";
import BasicExample from "../components/navbar";
import Nav2 from "../components/navbar2";

const Home=()=>{
    return(
        <div>
            <BasicExample></BasicExample>
            <Nav2/>
            <hr className="mt-2"></hr>
            <Header/>

            <Cards></Cards>
            <Bulid></Bulid>
            
            
        </div>
    )
}
export default Home