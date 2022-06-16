import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home';
import IndividualUserDetail from './Pages/Home/IndividualUserDetail/IndividualUserDetail';
import Footer from './Pages/Shared/Footer'
import Login from './Pages/Home/Login/Login/Login';
import SignUp from './Pages/Home/Login/SignUp/Signup';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='/details/:id' element={
          <IndividualUserDetail></IndividualUserDetail>
        }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
