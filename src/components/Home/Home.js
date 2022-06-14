import * as React from "react";
import { Link } from "react-router-dom";


function Home() {
    return (
      <div>
        <h2>Tools by GSB Team</h2>
        <br/>

        <main>
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-success">
          <div className="card-header py-3 text-white bg-success border-success">
            <h4 className="my-0 fw-normal">Background Remover</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">Free!<small className="text-muted fw-light"></small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Remove background easily!</li>
              <li>HD Images included!</li>
              <li>Fast and Secure!</li>
            </ul>
            <Link to="/upload">
            <button type="button" className="w-100 btn btn-lg btn-success">Go to Background remover!</button>
            </Link>
          </div>
        </div>
      </div>
    </div>


  </main>
</div>
    );
  }

  export default Home;