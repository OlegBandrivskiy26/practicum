import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Resume from './Components/Resume';
import SignUp from './Components/SignUp';
import Trainee from './Components/Trainee';
import Profile from './Components/Profile';
import EmployerProfile from './Components/EmployerProfile';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="main__container">

            <Routes>
                <Route exact path="/" element={<Login/>}/>
                <Route path="/resume" element={<Resume/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/trainee" element={<Trainee/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/employer" element={<EmployerProfile/>}/>
            </Routes>
        </div>
       
        <Footer/>
    </div>
  );
}

export default App;
