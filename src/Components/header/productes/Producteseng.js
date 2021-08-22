import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import HoverImage from "react-hover-image";
import { OpenContext } from "../hooks";

//images:
import Carta from "./images/carta.png";
import CartaSombra from "./images/logo_carta_sombra.png";
import cake from "./images/cakee.png";
import cakeSombra from "./images/cakee_sombra.png";
import pan from "./images/pst.png";
import panSombra from "./images/pst_sombra.png";
import catering from "./images/catering.png";
import cateringSombra from "./images/catering_sombra.png";

//PDFS
import CartaEng from "./images/CARTA_web_en.pdf";
//import CateringEng from "./images/catering_en.pdf";

import history from "../../../history";

const useStyles = makeStyles({
  root: {
    //minWidth: 400,
    marginTop: "90px",
    marginBottom: "50px",
    marginLeft: "20px",
    marginRight: "20px",
    height: "550px",
    borderRadius: 0,
    shadowColor: "#3B0404",
    border: `2px solid #3B0404`,
    background: "white", // "linear-gradient(45deg, #FFFBF8 50%, #D8BBB0 90%)",
  },

  root2: {
    //minWidth: "400px",
    marginTop: "90px",
    "@media (max-width:1275px)": {
      //md
      marginTop: "20px"
    },
    "@media (max-width:600px)": {
      //sm
      marginTop: "20px",
    },
    marginBottom: "50px",
    marginLeft: "20px",
    marginRight: "20px",
    height: "550px",
    borderRadius: 0,
    shadowColor: "#3B0404",
    border: `2px solid #3B0404`,
    background: "white", // "linear-gradient(45deg, #FFFBF8 50%, #D8BBB0 90%)",
  },

  root3: {
    //minWidth: "400px",
    marginTop: "90px",
    "@media (max-width:1275px)": {
      //md
      marginTop: "20px"
    },
    "@media (max-width:600px)": {
      //sm
      marginTop: "20px",
    },
    marginBottom: "50px",
    marginLeft: "20px",
    marginRight: "20px",
    height: "550px",
    borderRadius: 0,
    shadowColor: "#3B0404",
    border: `2px solid #3B0404`,
    background: "white", // "linear-gradient(45deg, #FFFBF8 50%, #D8BBB0 90%)",
  },

  c1: { height: "300" },

  c2: {
    height: "180",
  },

  im1: {
    //maxWidth: 345,
    cursor: "pointer",
    marginTop: "90px",
    height: "290px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  im2: {
    //maxWidth: 345,
    cursor: "pointer",
    display: "flex",
    marginTop: "10px",
    height: "195px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  im3: {
    //maxWidth: 345,
    cursor: "pointer",
    display: "flex",
    marginTop: "5px",
    height: "215px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  im4: {
    //maxWidth: 345,
    marginTop: "70px",
    cursor: "pointer",
    height: "290px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    fontFamily: "Nunito",
    fontSize: "20px",
    color: "#3B0404",
    //marginLeft: "50px",
    marginTop: "30px",
    textAlign: "center",
  },

  media: {
    height: 400,
  },
});

export function Producteseng() {
  const classes = useStyles();

  //Estados botones imagenes
  const { setCartaeng } = React.useContext(OpenContext);
  const { setPaeng } = React.useContext(OpenContext);
  const { setPasteng } = React.useContext(OpenContext);
  const { setCateringeng } = React.useContext(OpenContext);

  return (
    <Grid container style={{width: "100%" }}>
      <Grid item xs={12} sm={12} md={12} lg={4}>
        <Card className={classes.root} elevation={9}>
          <Typography className={classes.title}>
            <h2>Our menu...</h2>
          </Typography>
          <HoverImage
            className={classes.im1}
            src={Carta}
            hoverSrc={CartaSombra}
            style={{ alignSelf: "center" }}
            onClick={() => {
              window.open(CartaEng);
            }}
          />
        </Card>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={4}>
        <Card className={classes.root2} elevation={9}>
          <Typography className={classes.title}>
            <h2>Find out our products...</h2>
          </Typography>

          <Grid item xs={12} sm={12} md={12}>
            <div maxWidth style={{ alignSelf: "center" }}>
              <Card className={classes.c1} elevation={0}>
                <HoverImage
                  className={classes.im2}
                  src={pan}
                  hoverSrc={panSombra}
                  style={{ alignSelf: "center" }}
                  onClick={() => {
                    history.push("/Products/Productes/pagebrioixEng")
                    window.scrollTo(0, 0)
                  }}
                />
              </Card>
            </div>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <div maxWidth>
                <Card className={classes.c2} elevation={0}>
                  <HoverImage
                    className={classes.im3}
                    src={cake}
                    hoverSrc={cakeSombra}
                    onClick={() => {
                      history.push("/Products/Productes/pagepastEng")
                      window.scrollTo(0, 0)
                    }}
                  />
                </Card>
              </div>
            </Grid>
          </Grid>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={4}>
        <Card className={classes.root3} elevation={9}>
          <Typography className={classes.title}>
            <h2>Our catering...</h2>
          </Typography>
          <HoverImage
            className={classes.im4}
            src={catering}
            hoverSrc={cateringSombra}
             onClick={() => {
              history.push("/Building/ConstruccioEng")
              window.scrollTo(0, 0)
                 //window.open(CateringEng);
             }}
          />
        </Card>
      </Grid>
    </Grid>
  );
}

export default Producteseng;
