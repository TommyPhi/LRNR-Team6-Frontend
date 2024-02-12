import React from "react";
import vernerImg from "../assets/images/transparent-turtle.png";
import { Button } from "react-bootstrap";

export default function Error() {
  return (
    <div>
      <div class="container-fluid px-5">
        <div class="row">
          <div class="col-md-8 d-flex justify-content-center align-items-center column flex-column">
            <h1 class="text-center">It seems you have lost your way...</h1>
            <Button href="/">Home</Button>
          </div>
          <div class="col-md-4">
            <img
              src={vernerImg}
              class="img-fluid"
              alt="Verner the Turtle"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
