import React from "react";

export function Contact() : React.ReactElement {
  return (
    <div className="contact">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Contact</h1>
            <p>
              Contact info, again we can prob move this to the footer. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
