import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";

import { HashLink as Link } from 'react-router-hash-link';

//BRIOIXERIA
import bretzel from "./imgbrioix/bretzel.jpg";
import bret_xoc_negre from "./imgbrioix/bret_xoc_negre.jpg";
import bret_xoc_llet from "./imgbrioix/bret_xoc_llet.jpg";
import bret_xoc_blanc from "./imgbrioix/bret_xoc_blanc.jpg";
import croissant from "./imgbrioix/croissant.jpg";
import croissant_negre from "./imgbrioix/croissant_negre.jpg";
import croissant_llet from "./imgbrioix/croissant_llet.jpg";
import croissant_blanc from "./imgbrioix/croissant_blanc.jpg";
import croissant_bikini from "./imgbrioix/croissant_bikini.jpg";
import palmera from "./imgbrioix/palmera.jpg";
import palmera_negre from "./imgbrioix/palmera_negre.jpg";
import palmera_llet from "./imgbrioix/palmera_llet.jpg";
import palmera_blanc from "./imgbrioix/palmera_blanc.jpg";
import madalena from "./imgbrioix/madalena.jpg";
import m_negre from "./imgbrioix/m_negre.jpg";
import m_poma from "./imgbrioix/m_poma.jpg";
import croissanet from "./imgbrioix/croissanet.jpg";
import crnegre from "./imgbrioix/crnegre.jpg";
import crllet from "./imgbrioix/crllet.jpg";
import crblanc from "./imgbrioix/crblanc.jpg";
import crint from "./imgbrioix/crint.jpg";
import pint from "./imgbrioix/pint.jpg";
import pcabell from "./imgbrioix/pcabell.jpg";
import tpoma from "./imgbrioix/tpoma.jpg";
import galeta from "./imgbrioix/galeta.jpg";
import gnegre from "./imgbrioix/gnegre.jpg";
import gllet from "./imgbrioix/gllet.jpg";
import donut from "./imgbrioix/donut.jpg";
import dnegre from "./imgbrioix/dnegre.jpg";
import dblanc from "./imgbrioix/dblanc.jpg";
import xuxo from "./imgbrioix/xuxo.jpg";
import ensaimada from "./imgbrioix/ensaimada.jpg";
import canya from "./imgbrioix/canya.jpg";

//PANS ARTESANALS
import cibada from "./imgbrioix/cibada.jpg";
import multicereals from "./imgbrioix/multicereals.jpg";
import serrai from "./imgbrioix/serrai.jpg";
import xia from "./imgbrioix/xia.jpg";
import alemany from "./imgbrioix/alemany.jpg";
import espelta from "./imgbrioix/espelta.jpg";
import montau from "./imgbrioix/montau.jpg";
import vidre from "./imgbrioix/vidre.jpg";

//PASTA DE TE
import macarons from "./imgbrioix/macarons.jpg";


const estilos = makeStyles({
  root: {
    //minWidth: 400,
    //marginTop: "20px", //20
    "@media (max-width:1400px)": {
      //lg
      marginTop: "10px",
    },
    "@media (max-width:1000px)": {
      //md
      marginTop: "10px"
    },
    "@media (max-width:600px)": {
      //sm
      marginTop: "40px",
    },
    //marginLeft: "20px",
    //marginRight: "20px",
    //height: "50px",
    borderRadius: 0,
  },
  BTR:{
    display: "inline",
    whiteSpace: "nowarp"
  },
  l1: {
    marginTop: "150px",
    color: "rgb(59, 4, 4)"},

  l2: {
     marginTop: "-25px",
      color: "rgb(59, 4, 4)"},

  subtitol:{    
    marginTop: "2px",
    marginBottom: "-1px",
    fontSize: 23,
    fontStyle: "oblique",
    color: "rgb(59, 4, 4)"},
  
  categories:{
    fontSize: 50,
    marginTop: "40px",
    color: "rgb(59, 4, 4)"

    },

  a: {
    position: "relative",
    textDecoration: "none",
    fontWeight: 450,
    fontSize: 30,
    color: "rgb(59, 4, 4)",
    transition: "all .35s ease",
    "&::before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "2px",
      bottom: "0",
      left: "0",
      backgroundColor: "rgb(59, 4, 4)",
      visibility: "hidden",
      WebkitTransform: "scaleX(0)",
      transform: "scaleX(0)",
      WebkitTransition: "all 0.3s ease-in-out 0s",
      transition: "all 0.3s ease-in-out 0s",
    },
    "&:hover": {
      color: "rgb(59, 4, 4)",
      "&::before": {
        visibility: "visible",
        WebkitTransform: "scaleX(1)",
        transform: "scaleX(1)",
      },
    },
  },

  rooty: {
   //minWidth: 420,
   height: 450,
  },

  BRIOIX: {

    "@media (max-width:1400px)": {
      //lg
      width:"340px" ,
      height:"280px",
      marginLeft: "auto",
      marginRight: "auto"
    },

    "@media (max-width:1000px)": {
      //md
      width:"340px" ,
      height:"280px",
      marginLeft: "auto",
      marginRight: "auto"
    },
    "@media (max-width:600px)": {
      //sm
      width: "300px",
      height:"260px",
      marginLeft: "auto",
      marginRight: "auto"
    },

    borderRadius: 0,
  },

  BRIOIX_v2: {

    "@media (max-width:1400px)": {
      //lg
      width:"340px" ,
      height:"280px",
      marginLeft: "auto",
      marginRight: "auto"
    },

    "@media (max-width:1000px)": {
      //md
      width:"340px" ,
      height:"280px",
      marginLeft: "auto",
      marginRight: "auto"
    },
    "@media (max-width:600px)": {
      //sm
      width: "300px",
      height:"240px",
      marginLeft: "auto",
      marginRight: "auto"
    },

    borderRadius: 0,
  }











});

export function pagebrioixCat() {
  const classes = estilos();

  return (
    <Grid container style={{width: "100%" }}>
      
      <Grid item xs={12} sm={12} md={12} style={{backgroundColor: '#ffffff'}}>
         <p className={classes.l1}> 
              <hr 
              style={{
                color: '#3B0404',
                backgroundColor: '#3B0404',
                height: .1,
                borderColor : '#3B0404'
              }}/>
         </p>
      </Grid>

      <Grid item xs={12} sm={12} md={12} style={{backgroundColor: '#ffffff'}}>
        <Card
          //className={classes.root}
          elevation={0}
          style={{
            textAlign: "center",
            backgroundColor: '#ffffff'
          }}
        >
          <p className={classes.subtitol} style={{backgroundColor: '#ffffff'}}>
              Els nostres pans i productes artesanals d'elaboració pròpia
          </p>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12} md={4} style={{backgroundColor: '#ffffff'}}>
        <Card
          className={classes.root}
          elevation={0}
          style={{
            textAlign: "center",
            backgroundColor: '#ffffff'
          }}
        >
          <p style={{ fontSize: 20,  marginTop:"-10px" }} style={{backgroundColor: '#ffffff'}}>
            <Link to="pagebrioixCat#Ind" style={{ textDecoration: "none" }} className={classes.a}> Brioixeria</Link>
          </p>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12} md={4} style={{backgroundColor: '#ffffff'}}>
        <Card
          className={classes.root}
          elevation={0}
          style={{
            textAlign: "center",
            backgroundColor: '#ffffff'
          }}
        >
          <p style={{ fontSize: 20,  marginTop:"-10px" }} style={{backgroundColor: '#ffffff'}}>
          <Link to="pagebrioixCat#Past" style={{ textDecoration: "none" }} className={classes.a}> Pans artesanals</Link>

          </p>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12} md={4} style={{backgroundColor: '#ffffff'}}>
        <Card
          className={classes.root}
          elevation={0}
          style={{
            textAlign: "center",
            backgroundColor: '#ffffff'
          }}
        >
          <p style={{ fontSize: 20,  marginTop:"-10px" }} style={{backgroundColor: '#ffffff'}}>
          <Link to="pagebrioixCat#Bra" style={{ textDecoration: "none" }} className={classes.a}> Pasta de te</Link>
          </p>
        </Card>
      </Grid>

{/*/////////////////////////////linea////////////////////////////////////// */}
      <Grid item xs={12} sm={12} md={12} style={{backgroundColor: '#ffffff'}}>
         <p id="Ind" className={classes.l2} style={{backgroundColor: '#ffffff'}}> 
              <hr 
              style={{
                color: '#3B0404',
                backgroundColor: '#3B0404',
                height: .1,
                borderColor : '#3B0404'
              }}/>
         </p>
      </Grid>


{/*/////////////////////////////BRIOIXERIA////////////////////////////////////// */}
      <Grid item xs={12} sm={12} md={12} style={{backgroundColor: '#ffffff'}}>
        <Card
          //className={classes.root}
          elevation={0}
          style={{
            textAlign: "center",
            backgroundColor: '#ffffff'
          }}
        >
          <p  className={classes.categories}  style={{backgroundColor: '#ffffff'}}>
             Brioixeria
          </p>
        </Card>
      </Grid>

     {/*/////////////////////////////FILA 1////////////////////////////////////// */}

      {/*BRETZEL*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"50px" , marginTop:"-10px"}}>
          <center>
            <img
            src={bretzel}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-80px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
              Bretzel
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-12px"}}>
            Farciment de cabell d'àngel. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
      {/*BRETZEL XOCO NEGRE*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"50px"}}>
          <center>
            <img
            className="IND"
            src={bret_xoc_negre}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-80px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Bretzel de xocolata negre.
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
            Farciment de cabell d'àngel. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>

      {/*BRETZEL XOCO LLET*/}
        <CardContent style={{padding:"50px"}} >
          <center>
            <img
            className="IND"
            src={bret_xoc_llet}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-90px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Bretzel de xocolata de llet
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Farciment de cabell d'àngel. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>






{/*/////////////////////////////FILA 2////////////////////////////////////// */}


{/*BRETZEL XOC BLANCA*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"50px" , marginTop:"2px"}}>
          <center>
            <img
            src={bret_xoc_blanc}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-80px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
              Bretzel de xocolata blanca
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-12px"}}>
              Farciment de cabell d'àngel. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

{/*CROISSANT*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"50px"}} >
          <center>
            <img
            className="IND"
            src={croissant}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX_v2}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-50px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Croissant de mantega
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

{/*CROISSANT NEGRE*/}
        <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"50px"}}>
          <center>
            <img
            className="IND"
            src={croissant_negre}
            className={classes.BRIOIX_v2}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-40px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Croissant de xocolata negre
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Interior: xocolata. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*/////////////////////////////FILA 3////////////////////////////////////// */}

      {/*CROISSANT LLET*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"50px" , marginTop:"-10px"}}>
          <center>
            <img
            src={croissant_llet}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX_v2}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-70px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
              Croissant de xocolata de llet.
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-12px"}}>
              Interior: xocolata. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*CROISSANT BLANC*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"50px"}}>
          <center>
            <img
            className="IND"
            src={croissant_blanc}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-80px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Croissant de xocolata blanca
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Interior: xocolata. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>

      {/*CROISSANT BIKINI*/}
        <CardContent style={{padding:"50px"}} >
          <center>
            <img
            className="IND"
            src={croissant_bikini}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-90px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Croissant bikini
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
            Interior: mantega, pernil dolç i formatge. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*/////////////////////////////FILA 4////////////////////////////////////// */}

      {/*PALMERA*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"50px" , marginTop:"-15px"}}>
          <center>
            <img
            src={palmera}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-80px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
              Palmera
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-12px"}}>
              Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*PALMERA NEGRE*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"50px", marginTop:"-25px"}}>
          <center>
            <img
            className="IND"
            src={palmera_negre}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-70px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Palmera de xocolata negre
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>

      {/*PALMERA DE XOCOLATA AMB LLET*/}
        <CardContent style={{padding:"45px"}} >
          <center>
            <img
            className="IND"
            src={palmera_llet}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-80px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Palmera de xocolata de llet
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>


{/*/////////////////////////////FILA 5////////////////////////////////////// */}

      {/*PALMERA DE XOCO BLANCA*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"50px" , marginTop:"-15px"}}>
          <center>
            <img
            src={palmera_blanc}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-86px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
              Palmera de xocolata blanca
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-12px"}}>
              Conté gluten. 
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*MADALENA*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"50px", marginTop:"-25px"}}>
          <center>
            <img
            className="IND"
            src={madalena}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-85px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
            Magdalena amb o sense sucre
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
            Conté gluten i fruits secs. 
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>

      {/*MAGDALENA NEGRE*/}
        <CardContent style={{padding:"35px" ,marginTop:"-10px"}} >
          <center>
            <img
            className="IND"
            src={m_negre}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-70px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Magdalena de xocolata
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Conté gluten i fruits secs.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*/////////////////////////////FILA 6////////////////////////////////////// */}
      {/*MAGDALENA DE POMA*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"50px", marginTop:"-10px"}}>
          <center>
            <img
            className="IND"
            src={m_poma}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-80px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Magdalena de poma
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
            Conté gluten i fruits secs.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>

      {/*CROISSANET*/}
        <CardContent style={{padding:"50px"}} >
          <center>
            <img
            className="IND"
            src={croissanet}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-90px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Croissanet
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>

      {/*CROISSANET NEGRE*/}
        <CardContent style={{padding:"50px"}} >
          <center>
            <img
            className="IND"
            src={crnegre}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-90px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Croissanet de xocolata negre
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

    {/*/////////////////////////////FILA 7////////////////////////////////////// */}
      {/*CROISSANET DE LLET*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"50px", marginTop:"-10px"}}>
          <center>
            <img
            className="IND"
            src={crllet}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-80px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Croissanet de xocolata de llet
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
            Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>

      {/*CROISSANET BLANC*/}
        <CardContent style={{padding:"50px"}} >
          <center>
            <img
            className="IND"
            src={crblanc}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-90px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Croissanet de xocolata blanca
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>

      {/*CROISSANET INTEGRAL*/}
        <CardContent style={{padding:"50px"}} >
          <center>
            <img
            className="IND"
            src={crint}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-90px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Croissanet integral
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*/////////////////////////////FILA 8////////////////////////////////////// */}
      {/*PALMERETA INTEGRAL*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"50px", marginTop:"20px"}}>
          <center>
            <img
            className="IND"
            src={pint}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-50px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
              Palmereta integral
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
            Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>

      {/*PASTISSET DE CABELL*/}
        <CardContent style={{padding:"50px"}} >
          <center>
            <img
            className="IND"
            src={pcabell}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-73px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Pastisset de cabell d'àngel
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>

      {/*TARTA DE POMA*/}
        <CardContent style={{padding:"50px"}} >
          <center>
            <img
            className="IND"
            src={tpoma}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-90px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)"}}>
              Tarta de poma
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*/////////////////////////////FILA 9////////////////////////////////////// */}
      {/*GALETA*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"50px", marginTop:"-10px"}}>
          <center>
            <img
            className="IND"
            src={galeta}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-80px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
              Galeta
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>

      {/*GALETA XOC NEGRE*/}
        <CardContent style={{padding:"50px"}} >
          <center>
            <img
            className="IND"
            src={gnegre}
            className={classes.BRIOIX}
            />
        </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-90px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Galeta de xocolata negre
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>

      {/*GALETA XOCO LLET*/}
        <CardContent style={{padding:"50px"}} >
          <center>
            <img
            className="IND"
            src={gllet}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-90px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Galeta de xocolata de llet
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*/////////////////////////////FILA 10////////////////////////////////////// */}
      {/*DONUT*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"50px", marginTop:"-10px"}}>
          <center>
            <img
            className="IND"
            src={donut}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-80px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
              Dònut
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>

      {/*DONUT XOCOLATA NEGRE*/}
        <CardContent style={{padding:"50px"}} >
          <center>
            <img
            className="IND"
            src={dnegre}
            className={classes.BRIOIX}
            />
        </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-90px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Dònut de xocolata negre
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>

      {/*DONUT XOCO BLANCA*/}
        <CardContent style={{padding:"50px"}} >
          <center>
            <img
            className="IND"
            src={dblanc}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-90px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Dònut de xocolata de blanca
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*/////////////////////////////FILA 11////////////////////////////////////// */}
      {/*XUXO*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"50px", marginTop:"40px"}}>
          <center>
            <img
            className="IND"
            src={xuxo}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-35px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
              Xuxo
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>

      {/*Ensaimada*/}
        <CardContent style={{padding:"50px"}} >
          <center>
            <img
            className="IND"
            src={ensaimada}
            className={classes.BRIOIX}
            />
        </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-90px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Ensaimada
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>

      {/*CANYA*/}
        <CardContent style={{padding:"50px"}} >
          <center>
            <img
            className="IND"
            src={canya}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-90px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Canya de xocolata
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
        



{/*/////////////////////////////PANS///////////////////////////////////// */}

{/*/////////////////////////////linea////////////////////////////////////// */}
<Grid item xs={12} sm={12} md={12} style={{backgroundColor: '#ffffff'}}>
         <p id="Past" className={classes.l2} style={{backgroundColor: '#ffffff'}}> 
              <hr 
              style={{
                color: '#3B0404',
                backgroundColor: '#3B0404',
                height: .1,
                borderColor : '#3B0404'
              }}/>
         </p>
      </Grid>

        <Grid item xs={12} sm={12} md={12} style={{backgroundColor: '#ffffff'}}>
        <Card
          //className={classes.root}
          elevation={0}
          style={{
            textAlign: "center",
            backgroundColor: '#ffffff'
          }}
        >
          <p className={classes.categories} style={{fontSize:"40px", marginTop:"40px"}} style={{backgroundColor: '#ffffff'}}>
          <a>Pans artesanals</a> 
          </p>
        </Card>
      </Grid>

     {/*/////////////////////////////FILA 1-PANS////////////////////////////////////// */}

      {/*CIBADA*/}
      <Grid item xs={12} sm={12} md={6} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"10px" , marginTop:"10px"}}>
          <center>
            <img
            src={cibada}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-80px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
              Pa de civada
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-12px"}}>
                Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*MULTICEREALS*/}
      <Grid item xs={12} sm={12} md={6} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"50", marginTop:"10px"}}>
          <center>
            <img
            className="IND"
            src={multicereals}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-80px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
            Pa de multicereals
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>


      {/*/////////////////////////////FILA 2-PAST////////////////////////////////////// */}

      {/*SERRAI*/}
      <Grid item xs={12} sm={12} md={6} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"10px" , marginTop:"10px"}}>
          <center>
            <img
            src={serrai}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-80px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
              Pa de serraí
           </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-12px"}}>
              Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*XIA*/}
      <Grid item xs={12} sm={12} md={6} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"10px", marginTop:"0px"}}>
          <center>
            <img
            className="IND"
            src={xia}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-80px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
            Pa de xia
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
            Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

     {/*/////////////////////////////FILA 3-PANS////////////////////////////////////// */}

      {/*ALEMANY*/}
      <Grid item xs={12} sm={12} md={6} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"10px"}}>
          <center>
            <img
            src={alemany}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-80px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
              Pa alemany
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-12px"}}>
              Conté gluten. 
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*ESPELTA*/}
      <Grid item xs={12} sm={12} md={6} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"10px", marginTop:"0px"}}>
          <center>
            <img
            className="IND"
            src={espelta}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-80px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
            Pa d'espelta
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

    {/*/////////////////////////////FILA 4-PANS////////////////////////////////////// */}

      {/*MONTAU*/}
      <Grid item xs={12} sm={12} md={6} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"10px", marginTop:"0px"}}>
          <center>
            <img
            src={montau}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-60px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
              Montau (Pa de pagès)
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-12px"}}>
              Conté gluten.            
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*VIDRE*/}
      <Grid item xs={12} sm={12} md={6} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"10px", marginTop:"0px"}}>
          <center>
            <img
            className="IND"
            src={vidre}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-80px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)", marginTop:"5px"}}>
             Pa de vidre
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

     
{/*/////////////////////////////PASTA DE TE///////////////////////////////////// */}

{/*/////////////////////////////linea////////////////////////////////////// */}
<Grid item xs={12} sm={12} md={12} style={{backgroundColor: '#ffffff'}}>
         <p id="Bra" className={classes.l2} style={{backgroundColor: '#ffffff'}}> 
              <hr 
              style={{
                color: '#3B0404',
                backgroundColor: '#3B0404',
                height: .1,
                borderColor : '#3B0404'
              }}/>
         </p>
      </Grid>

        <Grid item xs={12} sm={12} md={12} style={{backgroundColor: '#ffffff'}}>
        <Card
          //className={classes.root}
          elevation={0}
          style={{
            textAlign: "center",
            backgroundColor: '#ffffff'
          }}
        >
          <p className={classes.categories} style={{fontSize:"40px", marginTop:"40px"}} style={{backgroundColor: '#ffffff'}}>
          <a>Pasta de te</a> 
          </p>
        </Card>
      </Grid>

     {/*/////////////////////////////FILA 1-PDT////////////////////////////////////// */}

      {/*MACARONS*/}
      <Grid item xs={12} sm={12} md={12} lg={12} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"10px" , marginTop:"0px"}}>
          <center>
            <img
            src={macarons}
            style={{ alignSelf: "center" }}
            className={classes.BRIOIX}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"50px" , marginTop:"-90px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Macarons
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-12px"}}>
            | Marró: xocolata | Groc: llimona | Vermell: maduixa | Lila: confitura | Verd: praliné |
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>


    </Grid>

  );
}

export default pagebrioixCat;
