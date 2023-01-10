import React from 'react'
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import GetBlogs from "./components/GetBlogs"
import DogsCom from './components/dogs'
import CreateBlogs from "./components/CreateBlogs"

const App = () => {


  return (
    <div>

      
      <Router>
        <Routes>
        
        <Route  path="/" element={
        <div>
          <h1>Blogs Project frontend</h1>
          <Link to="/show" ><button > GetBlogs</button></Link>
          <br/>          <br/>
          <Link to="/dogs" ><button > Dogs</button></Link>          <br/>          <br/>
          <Link to="/blogs" ><button > Create Blogs</button></Link>

          </div>
        
        } />
          <Route  path="/show" element={<GetBlogs/>} />
          <Route  path="/dogs" element={<DogsCom/>} />
          <Route  path="/blogs" element={<CreateBlogs/>} />
        
        </Routes>
          
      </Router>


    </div>
  )
}
export default App