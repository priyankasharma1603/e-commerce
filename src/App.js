import Navbar from './component/navbar';
import About from './component/pages/about';
import Home from './component/pages/home';
import Login from './component/pages/login';
import NavigateM from './component/pages/navigateM';
import Signup from './component/pages/signup';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";

function App() {
  return (
  <div className="App">
  <>
  <Navbar/>   
  <BrowserRouter>
  <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/navigateM' element={<NavigateM/>}/>
      <Route path='/signup' element={<Signup/>}/>
     </Routes>
  </BrowserRouter>
   </>  

  
  </div>
  );
}

export default App;
