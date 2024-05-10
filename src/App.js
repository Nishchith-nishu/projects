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
     

      {/* </Route> */}
  </Routes>
  </Router>
     
      // {/* <View></View> */}
      //  {/* <View_detail></View_detail> */} 
  );
}

export default App;
