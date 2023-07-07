
import './App.css';
import './style.css';
import Home from './pages/Home';
import List from './pages/List';
import CreateNew from './pages/CreateNew';
import Details from './pages/Details';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Logout from './Logout';


import {BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Routes>                                                                       
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>

      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="list" element= {<List/>}/>
        <Route path="createNew" element= {<CreateNew/>}/>
        <Route path="details" element= {<Details/>}/>

      </Routes>

     
    </div>
    </BrowserRouter>
  );
}

export default App;
