import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import {Home, SingleCourse, Cart, Courses} from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/footer";
import Protected from './Protected/Protected';
import Landing from './pages/Landing';
import "bootstrap/dist/css/bootstrap.min.css";
import CategoriesList from './components/CategoriesList';
import CourseList from './components/CourseList';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
      
        <Route path='/' element={<Protected Component={Home}/>}></Route>
        <Route path="/course/:id" element={<Protected Component={SingleCourse}/>}></Route>
        <Route path='category/:category' element={<Protected Component={Courses}/>}></Route>
        <Route path='/cart' element={<Protected Component={Cart}/>}></Route>
        <Route path="CategoriesList" element={<Protected Component={CategoriesList}/>}></Route>
        <Route path="CourseList" element={<Protected Component={CourseList}/>}></Route>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}


/*function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
            <Route element={<PrivateRoutes />}>
            <Route path = "/" element = {<Home />} />
            <Route path="/course/:id" element={<PrivateRoutes><SingleCourse/></PrivateRoutes>} />
        <Route path = "/category/:category" element = {<Courses />} />
        <Route path = "/cart" element = {<Cart />} /> 
                
            </Route>

        
        <Route path="/login" element={<Login />} />
        
        <Route path="/signin" element={<Signup />} />
      </Routes>
      <Footer />
      
    </BrowserRouter>
    
  );
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/home' element={<Protected Component={Home}/>}></Route>
        <Route path='/about' element={<Protected Component={About}/>}></Route>
        <Route path='/course' element={<Protected Component={Course}/>}></Route>
        <Route path='/html' element={<Protected Component={Htmlpage}/>}></Route>
        <Route path='/css' element={<Protected Component={CSSpage}/>}></Route>
        <Route path='/js' element={<Protected Component={Javpage}/>}></Route>
        <Route path='/react' element={<Protected Component={Reactpage}/>}></Route>
        <Route path='*' element={<h1>Page not found</h1>}></Route>
      </Routes>
    </div>
  );
}
*/

export default App;

