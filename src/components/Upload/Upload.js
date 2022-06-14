import * as React from "react";
import { Link } from "react-router-dom";


function Upload() {
    return (
      <div>

        <main className="container py-5">
  <div className="px-4 py-5 my-5 text-center">
    <img className="d-block mx-auto mb-4" src="background-remover.png" alt="" width="150" height="80" />
    <h1 className="display-5 fw-bold">Background Remover</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Quickly and Easily Remove backgrounds from Images!!</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-success btn-lg px-4 gap-3">Upload Image</button>
      </div>
    </div>
  </div>

      </main>
        <nav>
        <Link to="/">&lt;--- Back to home</Link>
      </nav>
      </div>
    );
  }

  export default Upload;