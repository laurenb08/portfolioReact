import React from "react";
// import { Image } from "react-bootstrap";
import { Card } from "react-bootstrap";
import HeaderPicture from "./images/HeaderImage.png";


function HeaderImg() {
  return (

    <Card>
      <Card.Img
        id="header-img"
        src={HeaderPicture}
        className="card-img"
        alt="floral background with my picture and name"
      />
    </Card>

  )
  }

  export default HeaderImg;