import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Grid from "@material-ui/core/Grid";

export function Homeeng() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Grid container maxWidth>
      <Grid item xs={12} sm={12} md={12}>
        <Carousel
          style={{ zIndex: "-1" }}
          activeIndex={index}
          onSelect={handleSelect}
        >
          <Carousel.Item style={{ marginTop: "50px" }}>
            <img
              className="d-block w-100"
              src={require("./images/slide_1.jpg")}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item style={{ marginTop: "50px" }}>
            <img
              className="d-block w-100"
              src={require("./images/tenda.jpg")}
              alt="Second slide"
              style={{ top: "50px" }}
            />
          </Carousel.Item>
          <Carousel.Item style={{ marginTop: "50px" }}>
            <img
              className="d-block w-100"
              src={require("./images/past.jpg")} //alt:3250px
              alt="Third slide"
              style={{ top: "50px" }}
            />
          </Carousel.Item>
        </Carousel>
      </Grid>

      <Grid item xs={12} sm={12} md={6}>
        <div
          style={{
            marginTop: "50px",
            marginLeft: "20px",
            fontFamily: "Nunito",
          }}
        >
          <h2>The pastry shop:</h2>
        </div>
        <div
          style={{
            //padding: "20px",
            marginLeft: "20px",
            marginRight: "20px",
            textAlign: "justify",
            fontSize: "16px",
            fontFamily: "Nunito",
          }}
        >
          The pastry shop is a family business run by Tere and Marcel.
          The pastry chef Marcel Casanovas studied at Terrassa's pastry guild
          and after having worked in several pastry shops, he decided to make
          his wishes come true, thus creating his own pastry shop, which was
          founded on September 3, 2010 at Barceloneta's neighborhood from
          Begues. An intimate space where we invite you to stroll.
        </div>
        <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            fontFamily: "Nunito",
          }}
        >
          <h2>Schedule (August 2021):</h2>
        </div>
        <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            fontSize: "16px",
            fontFamily: "Nunito",
          }}>
          {/* CLOSED for HOLIDAYS from August 16 th to 23 rd (inclusive).
          <br />
          <u>Rest of the days:</u>
          <br /> */}
          
            <div
            style={{
              marginTop: "5px",
              marginLeft: "5px",
              fontSize: "16px",
              fontFamily: "Nunito",
            }}>
          Monday Closed
          <br />
          Tuesday from 07:00 a.m. to 15.00 p.m.
          <br />
          Wednesday from 07:00 a.m. to 15.00 p.m.
          <br />
          Thursday from 07:00 a.m. to 15.00 p.m.
          <br />
          Friday from 07:00 a.m. to 15.00 p.m.
          <br />
          Saturday from 07:00 a.m. to 15.00 p.m.
          <br />
          Sunday from 07:00 a.m. to 14:30p.m.
          <br />
          </div>  
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <div
          style={{
            marginTop: "50px",
            marginLeft: "20px",
            fontFamily: "Nunito",
          }}
        >
          <h2>Where to find us:</h2>
        </div>
        <div
          style={{
            marginLeft: "20px",
            marginRight: "20px",
            textAlign: "justify",
            fontSize: "16px",
            fontFamily: "Nunito",
          }}
        >
          At Sant Francesc, 30. Begues. 08859.
          <br /> We have free parking exclusively for clients.
          <br />Tel.: (+34) 936391249
        </div>
        <div
          style={{
            marginTop: "5px",
            marginLeft: "20px",
            marginRight: "20px",
            marginBottom: "30px",
          }}
        >
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=pastisseria%20marcel+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="295"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </Grid>
    </Grid>
  );
}

export default Homeeng;
