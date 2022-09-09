import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/NavBar/Navbar.jsx'

import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Gallery from './Pages/Gallery/Gallery'
import Plans from './Pages/Plans/Plans'
import Trainers from './Pages/Trainers/Trainers'
import NotFound from './Pages/NotFound/NotFound'
import Footer from './Components/Footer/Footer.jsx'

function App() {
  return (


    <BrowserRouter>

      <Navbar></Navbar>
      <Routes>
        <Route index element= { <Home> </Home> }></Route>
        <Route path = '/about' element= { <About></About>}></Route>
        <Route path = '/contact' element={<Contact></Contact>}></Route>
        <Route path = '/gallery' element={<Gallery></Gallery>}></Route>
        <Route path = '/gallery' element={<Gallery></Gallery>}></Route>
        <Route path = '/plans' element= {<Plans></Plans>}></Route>
        <Route path = '/trainers' element= { <Trainers></Trainers>}></Route>
        <Route path = '*' element= {  <NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>


      {/* <Home></Home>
      <About></About>
      <Contact></Contact>
      <Gallery></Gallery>
      <Plans></Plans>
      <Trainers></Trainers>
      <NotFound></NotFound> */}

      
 
     </BrowserRouter>

  );
}

export default App;
