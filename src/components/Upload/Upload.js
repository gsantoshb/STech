import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


function Upload() {

    const [showLoader, setShowLoader]=useState(false);

    function setLoading(value){
        setShowLoader(value);
    }

    return (
      <div>
      <main className="container py-5">
  <div className="px-3 py-3 my-2 text-center">
    <img className="d-block mx-auto mb-4" src="background-remover.png" alt="" width="150" height="80" />
    <h1 className="display-5 fw-bold">Background Remover</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Quickly and Easily Remove backgrounds from Images!!</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <UploadButton setLoading={setLoading} />      
      </div>
      
      {
      showLoader?
      (<div className="spinner-border" role="status" />)
      :(<div></div>)
      }
    </div>
  </div>

      </main>
        <nav>
        <Link to="/">&lt;--- Back to home</Link>
      </nav>
      </div>
    );
  }

  function UploadButton({setLoading}) {
    var FileSaver = require('file-saver');

    const [file, setFile] = useState()
    function handleChange(event) {
      setFile(event.target.files[0])
    }
    
     async function handleSubmit(event) {
      event.preventDefault();
      setLoading(true);
       const url = 'http://34.125.75.72:5000/';
      //const url = 'http://localhost:5000/';

      const formData = new FormData();
      formData.append('file', file);
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
          responseType: 'blob'
        },
      };
      const response=await axios.post(url, formData, config);

      if(response.status===200){
        setLoading(false);
       var file = new Blob([response.data], {type:'image/png'}) ;      
       //var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});

       FileSaver.saveAs(file);
      }

    }
  
    return (
      <div className="App">
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleChange}/>
            <button className="btn btn-lg btn-success" type="submit">Remove background!</button>
          </form>
          <canvas width="100" height="100" id="MyCanvas">You don't have canvases </canvas>

      </div>
    );
  }
  

  export default Upload;