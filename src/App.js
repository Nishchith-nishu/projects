import logo from './logo.svg';
import './App.css';
import Home from './screens/home';
import View from './screens/view';
// import View_detail from './components/New';
// import { BrowserRouter as R} from "react-router-dom"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
// import Log from './components/login';
// import Login from './screens/log';
// import Log from './components/login';
import UserLogin from './screens/userLogin';
import UserSignup from './screens/userSignup';
import ProofileDetail from './screens/profiledetail';
import Sellproperty from './components/postproperty2';
import ListProduct from './components/backfetch';
// import ForgotPassword from './components/forgot';
// import ResetPassword from './components/reset';
import ForgotPassword from './actions/forgotemail';
import Buyproducts from './components/buyproducts';
import AgentCard from './components/topagent';



function App() {
  return (
    
      <Router>
     <Routes>
      {/* <Route path='/'> */}
     {/* <Home></Home> */}
     <Route path="*" element={<Home/>}/>
      <Route path="/View" element={<View/>}/>
      <Route path='/deat' element={<Home/>}/>
      {/* <Route path="/Log" element={<Log/>}/> */}
      <Route path='/Login' element={<UserLogin/>}/>
      <Route path='/Signup' element={<UserSignup/>}/>
      <Route path='/UserDetail' element={< ProofileDetail/>}/>
      <Route path='/Sign' element={<Sellproperty/>}/>
      <Route path='/post' element={<ListProduct/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/buy' element={<Buyproducts/>}/>
      <Route path='/top' element={<AgentCard/>}/>
      {/* <Route path="/forgot-password" element={<ForgotPassword />}></Route>

      <Route path="/reset_password/:id/:token" element={<ResetPassword />}></Route> */}
     

      {/* </Route> */}
  </Routes>
  </Router>
     
      // {/* <View></View> */}
      //  {/* <View_detail></View_detail> */} 
  );
}

export default App;
