import logo from './logo.svg';
import './App.css';
import Home from './screens/home';
import View from './screens/view';
// import View_detail from './components/New';
// import { BrowserRouter as R} from "react-router-dom"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
// import Login from './screens/log';

function App() {
  return (
    
      <Router>
     <Routes>
      <Route path='/'>
     {/* <Home></Home> */}
     <Route index element={<Home/>}/>
      <Route path="/View" element={<View/>}/>
      <Route path='/deat' element={<Home/>}/>
     

      </Route>
  </Routes>
  </Router>
     
      // {/* <View></View> */}
      //  {/* <View_detail></View_detail> */} 
  );
}

export default App;
