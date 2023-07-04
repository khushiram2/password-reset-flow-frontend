import './App.css';
import { Header } from './components/Header';
import { Loginpage } from './components/Loginpage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Registerpage } from './components/Registerpage';
import {Forgotpassword} from './components/Fotgotpassword.js'
import {Dashboard} from "./components/Dashboard"
import { InValidUser } from './components/InValidUser';
import { Passwordreset } from './components/Passwordreset';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
       <Route exact path='/' element={<Navigate replace to="/login"/>}/>
      <Route path='/login' element={<Loginpage/>}/>
      <Route path='/register' element={<Registerpage/>}/>
      <Route path='/forgotpassword' element={<Forgotpassword/>}/>
      <Route path='/reset/:id/:token' element={<Passwordreset/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/invaliduser' element={<InValidUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
