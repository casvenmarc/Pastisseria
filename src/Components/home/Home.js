import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Grid from "@material-ui/core/Grid";

export function Home() {
  //const classes = useStyles();
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
              src={require("./images/slide_1.png")}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item style={{ marginTop: "50px" }}>
            <img
              className="d-block w-100"
              src={require("./images/tenda.png")}
              alt="Second slide"
              style={{ top: "50px" }}
            />
          </Carousel.Item>
          <Carousel.Item style={{ marginTop: "50px" }}>
            <img
              className="d-block w-100"
              src={require("./images/past.png")} //alt:3250px
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
          <h2>La pastisseria:</h2>
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
          La pastisseria es tracta d'un negoci familiar dirigit per la Tere i el Marcel. 
          El pastisser Marcel Casanovas va estudiar en el gremi de pastissers de
          Terrassa i després d’haver treballat a vàries pastisseries, va decidir
          fer realitat els seus anhels, creant així la seva pròpia pastisseria,
          que fou fundada el dia 3 de setembre de l’any 2010 al barri de la
          Barceloneta de Begues. Un espai entranyable on us convidem a
          passejar-hi.
        </div>
        <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            fontFamily: "Nunito",
          }}
        >
          <h2>Horari (Agost 2021):</h2>
        </div>
        <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            fontSize: "16px",
            fontFamily: "Nunito",
          }}
        >
          Dilluns Tancat.
          <br />
          Dimarts de 07:00h a 13:30h.
          <br />
          Dimecres de 07:00h a 19:30h.
          <br />
          Dijous de 07:00h a 19:30h.
          <br />
          Divendres de 07:00h a 19:30h.
          <br />
          Dissabte de 07:00h a 19:30h.
          <br />
          Diumenge de 07:00h a 14:30h.
          <br />
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
          <h2>On trobar-nos:</h2>
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
          Al carrer Sant Francesc, 30 de Begues. 08859. <br /> Disposem
          d'aparcament gratuït exclusiu per a clients.<br /> Tel.: (+34) 936391249
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

export default Home;
