import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/basic">
        <MDBBtn className="m-3">Basic</MDBBtn>
      </Link>
      <Link to="/card-group-footers">
        <MDBBtn className="m-3">Card Group With Footers</MDBBtn>
      </Link>
      <Link to="/grid-cards">
        <MDBBtn className="m-3">Grid Cards</MDBBtn>
      </Link>
    </MDBContainer>
  );
}
