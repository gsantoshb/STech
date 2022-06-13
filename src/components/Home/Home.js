import * as React from "react";
import { Link } from "react-router-dom";


function Home() {
    return (
      <div>
        <h2>Welcome to Home</h2>
        
        <nav>
        <Link to="/upload">Upload!!!!</Link>
      </nav>

      </div>
    );
  }

  export default Home;