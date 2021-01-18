
import SignIn from './signin';
import SignUp from './signup';
import Schoolprofile from './SchoolProfile';
import SchoolFaculty from './SchoolFaculty';
import SchoolFee from './SchoolFee';
import SchoolAcad from './SchoolAcad';
import './App.css';
import SideBar from './SideBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
      <Router className='main'>
        <Route exact path='/' component={SignUp}/> 
        <Route exact path='/signin' component={SignIn}/>  
      </Router>
  );
}

export default App;
