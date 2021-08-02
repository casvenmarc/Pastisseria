import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Grid from "@material-ui/core/Grid";

export function Homeesp() {
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
          <h2>La pasteleria:</h2>
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
          La pasteleria es un negocio familiar dirigido por Tere y Marcel. 
          El pastelero Marcel Casanovas estudió en el gremio de pasteleros de
          Tarrasa y después de haber trabajado en varias pastelerías, decidió
          hacer realidad sus anhelos, creando así su propia pastelería, que fue
          fundada el día 3 de septiembre del año 2010 en el barrio de la
          Barceloneta de Begues. Un espacio entrañable donde os invitamos a
          pasear.
        </div>
        <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            fontFamily: "Nunito",
          }}
        >
          <h2>Horario (Agosto 2021):</h2>
        </div>
        <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            fontSize: "16px",
            fontFamily: "Nunito",
          }}
        >
          Lunes Cerrado.
          <br />
          Martes de 07:00h a 15:00h.
          <br />
          Miércoles de 07:00h a 15:00h.
          <br />
          Jueves de 07:00h a 15:00h.
          <br />
          Viernes de 07:00h a 15:00h.
          <br />
          Sábado de 07:00h a 15:00h.
          <br />
          Domingo de 07:00h a 14:30h.
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
          <h2>Dónde encontrarnos:</h2>
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
          En la calle Sant Francesc, 30 de Begues. 08859. <br /> Disponemos de
          aparcamiento gratuito exclusivo para clientes.<br />Tel.: (+34) 936391249
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

export default Homeesp;
