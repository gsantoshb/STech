import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Upload from "./components/Upload/Upload";
import './App.css';

function App() {
  return (
    <div className="App">
   

  <div className="col-lg-8 mx-auto p-3 py-md-5">
  <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
    <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
    <img src="hand-scissors-skin-type-1.png" alt="HandScissors" width="50" height="50"  border="0"  className="img-thumbnail img-responsive" />
    </a>
  </header>

  <main>
  <div className="container">

{/* Body content */}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="upload" element={<Upload />} />
  </Routes>

  

</div>
  </main>
  <footer className="pt-5 my-5 text-muted border-top">
    Created by the GSB team &middot; &copy; 2022
  </footer>
</div>
     

      
      
    </div>
  );
}



export default App;