import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import { HashLink as Link } from 'react-router-hash-link';

//INDIVIDUALS
import indcremacat from "./imgpast/ind_cremacat.jpg";
import indmora from "./imgpast/mora.jpg";
import indpomamango from "./imgpast/indpomamango.jpg";
import indxoc75 from "./imgpast/indxoc75.jpg";
import indtiramisu from "./imgpast/indtiramisu.jpg";
import indllimona from "./imgpast/indllimona.jpg";
import indfruitsbosc from "./imgpast/fruits_bosc.jpg";
import indsacher from "./imgpast/sacher_ind.jpg";
import indfruitssecs from "./imgpast/fruits-secs.jpg";
import indcolada from "./imgpast/indcolada.jpg";
import pcatanies from "./imgpast/pcatanies.jpg";
import indsara from "./imgpast/indsara.jpg";
import bramininata from "./imgpast/bramininata.jpg";
import braminitrufa from "./imgpast/braminitrufa.jpg";
import braminiturro from "./imgpast/braminiturro.jpg";
import tocinet from "./imgpast/tocinet.jpg";
import bulgaro from "./imgpast/bulgaro.jpg";

//PASTISSOS
import music from "./imgpast/music.jpg";
import cremacat from "./imgpast/cremacat.jpg";
import llimfru from "./imgpast/llimfru.jpg";
import pmango from "./imgpast/pmango.jpg";
import selva_negra from "./imgpast/selvanegra.jpg";
import mandarina from "./imgpast/mandarina.jpg";
import mousse_maduixa from "./imgpast/mousse_maduixa.jpg";
import bturro from "./imgpast/bturro.jpg";
import maduixa from "./imgpast/maduixa.jpg";
import pincoco from "./imgpast/pincoco.jpg";
import tiramisu from "./imgpast/tiramisu.jpg";
import llimona from "./imgpast/llimona.jpg";
import tresxoc from "./imgpast/3xoc.jpg";
import m_xocolata from "./imgpast/m_xocolata.jpg";
import sant_marc from "./imgpast/sant_marc.jpg";
import peracanela from "./imgpast/peracanela.jpg";
import massini from "./imgpast/massini.jpg";
import sacher from "./imgpast/sacher.jpg";
import pmaduixa from "./imgpast/pmaduixa.jpg";
import mxoco75 from "./imgpast/mxoco75.jpg";
import trufaviruta from "./imgpast/trufaviruta.jpg";
import iogurt from "./imgpast/iogurt.jpg";
import pnata from "./imgpast/pnata.jpg";
import pnatacremat from "./imgpast/pnatacremat.jpg";
import pllimona from "./imgpast/pllimona.jpg";
import pturro from "./imgpast/pturro.jpg";
import pnatatrufa from "./imgpast/pnatatrufa.jpg";
import sara from "./imgpast/sara.jpg";

//BRAÇOS
import tigreton from "./imgpast/tigreton.jpg";
import braturro from "./imgpast/braturro.jpg";
import bcremacremat from "./imgpast/bcremacremat.jpg";
import bcrema from "./imgpast/bcrema.jpg";
import bnatacremat from "./imgpast/bnatacremat.jpg";
import bnata from "./imgpast/bnata.jpg";
import btrufacremat from "./imgpast/btrufacremat.jpg";

//BANDES-TRENES-REBOSTERIA
import bfruita from "./imgpast/bfruita.jpg";
import lioneses from "./imgpast/lioneses.jpg";
import trenanatatrufa from "./imgpast/trenanatatrufa.jpg";
import rebosteria from "./imgpast/rebosteria.jpg";
import cnata from "./imgpast/cnata.jpg";
import ccorona from "./imgpast/ccorona.jpg";

//GELATS
import gmango from "./imgpast/gmango.jpg";
import gfruits from "./imgpast/gfruits.jpg";
import gmandarina from "./imgpast/gmandarina.jpg";
import gxoco from "./imgpast/gelat_xoco.jpg";
import gvainilla from "./imgpast/gelat_vainilla.jpg";
import gllimona from "./imgpast/gelat_llimona.jpg";


//import { OpenContext } from "../hooks";

const estilos = makeStyles({
  root: {

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

   marginLeft: "auto",
   marginRight: "auto",
   height: 450,
  },

  PAST: {

    "@media (max-width:1400px)": {
      //lg
     width: "450px",
     height:"365px"
    },
    "@media (max-width:1000px)": {
      //md
      width: "450px",
      height:"365px"
    },
    "@media (max-width:600px)": {
      //sm
      width: "320px",
      height:"265px"
    },

    borderRadius: 0,
  }

});

export function pagepastCat() {
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
          elevation={0}
          style={{
            textAlign: "center",
            backgroundColor: '#ffffff'
          }}
        >
          <p className={classes.subtitol} style={{backgroundColor: '#ffffff'}}>
              Els nostres pastissos i productes artesanals d'elaboració pròpia
          </p>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12} md={2} style={{backgroundColor: '#ffffff'}}>
        <Card
          className={classes.root}
          elevation={0}
          style={{
            textAlign: "center",
            backgroundColor: '#ffffff'
          }}
        >
          <p style={{ fontSize: 20,  marginTop:"-10px" }} style={{backgroundColor: '#ffffff'}}>
            <Link to="pagepastCat#Ind" style={{ textDecoration: "none" }} className={classes.a}> Individuals</Link>
          </p>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12} md={2} style={{backgroundColor: '#ffffff'}}>
        <Card
          className={classes.root}
          elevation={0}
          style={{
            textAlign: "center",
            backgroundColor: '#ffffff'
          }}
        >
          <p style={{ fontSize: 20,  marginTop:"-10px" }} style={{backgroundColor: '#ffffff'}}>
          <Link to="pagepastCat#Past" style={{ textDecoration: "none" }} className={classes.a}> Pastissos</Link>

          </p>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12} md={2} style={{backgroundColor: '#ffffff'}}>
        <Card
          className={classes.root}
          elevation={0}
          style={{
            textAlign: "center",
            backgroundColor: '#ffffff'
          }}
        >
          <p style={{ fontSize: 20,  marginTop:"-10px" }} style={{backgroundColor: '#ffffff'}}>
          <Link to="pagepastCat#Bra" style={{ textDecoration: "none" }} className={classes.a}> Braços</Link>
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
          <p style={{ fontSize: 20,  marginTop:"-10px", display: "block"}} style={{backgroundColor: '#ffffff'}}className={classes.BTR}>
          <Link to="pagepastCat#BTR" style={{ textDecoration: "none" }} className={classes.a}> Bandes-Trenes<span>-Rebosteria</span></Link>
          </p>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12} md={2} style={{backgroundColor: '#ffffff'}}>
        <Card
          className={classes.root}
          elevation={0}
          style={{
            textAlign: "center",
            backgroundColor: '#ffffff'
          }}
        >
          <p style={{ fontSize: 20,  marginTop:"-10px" }} style={{backgroundColor: '#ffffff'}}>
          <Link to="pagepastCat#Gelats" style={{ textDecoration: "none" }} className={classes.a}> Gelats</Link>            
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


{/*/////////////////////////////INDIVIDUALS////////////////////////////////////// */}
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
             Individuals
          </p>
        </Card>
      </Grid>

     {/*/////////////////////////////FILA 1////////////////////////////////////// */}

      {/*MOUSSE FRUITS BOSC*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px" , marginTop:"0px"}}>
          <center>
            <img
            src={indfruitsbosc}
            width="340px" 
            height="240px"
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"10px" , marginTop:"-1px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
              Mousse de fruits del bosc
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
              Sense gluten. Pa de pessic de blanc. Interior: melmelada.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*MOUSSE SACHER*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px"}}>
          <center>
            <img
            className="IND"
            src={indsacher}
            style={{ alignSelf: "center" }}
            width="350px" 
            height="230px"
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"10px" , marginTop:"10px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
            Mousse de Sacher
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
            Sense gluten. Pa de pessic blanc de cacao. Interior: melmelada fruits vermells.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>

      {/*MOUSSE FRUITS SECS*/}
        <CardContent style={{padding:"0px"}} >
          <center>
            <img
            className="IND"
            src={indfruitssecs}
            width="350px" 
            height="240px"
            marginLeft= "auto"
            marginRight= "auto"
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"10px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
            Mousse de fruits secs
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
            Sense gluten. Pa de pessic de cacao. Interior: Praliné.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>






{/*/////////////////////////////FILA 2////////////////////////////////////// */}


{/*MOUSSE CREMA CAT*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px" , marginTop:"0px"}}>
          <center>
            <img
            src={indcremacat}
            style={{ alignSelf: "center" }}
            width="350px" 
            height="220px"
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"10px" , marginTop:"10px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
              Mousse de crema catalana
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
              Sense gluten. Pa de pessic blanc. Interior: Dolç de llet.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

{/*MOUSSE IOGURT GREC*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px"}} >
          <center>
            <img
            className="IND"
            src={indmora}
            style={{ alignSelf: "center" }}
            width="360px" 
            height="230px"
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"10px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
            Mousse de iogurt grec
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
            Sense gluten. Pa de pessic blanc. Interior: Mora.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

{/*MOUSSE POMA-MANGO*/}
        <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px"}}>
          <center>
            <img
            className="IND"
            src={indpomamango}
            width="350px" 
            height="220px"
            marginLeft= "auto"
            marginRight= "auto"
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"10px" , marginTop:"10px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
            Mousse de poma i mango
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
            Sense gluten. Pa de pessic blanc.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*/////////////////////////////FILA 3////////////////////////////////////// */}

      {/*MOUSSE XOC75*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px" , marginTop:"-10px"}}>
          <center>
            <img
            src={indxoc75}
            style={{ alignSelf: "center" }}
            width="350px" 
            height="240px"
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"10px" , marginTop:"0px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
              Mousse de xoc. 75% de cacao
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-12px"}}>
              Sense gluten. Pa de pessic de cacao. Interior: Toffee.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*MOUSSE TIRAMISU*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px"}}>
          <center>
            <img
            className="IND"
            src={indtiramisu}
            style={{ alignSelf: "center" }}
            width="350px" 
            height="230px"
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"10px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
            Mousse de tiramisú
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
            Sense gluten. Pa de pessic de cacao. Interior: Café.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>

      {/*MOUSSE LLIMONA*/}
        <CardContent style={{padding:"0px"}} >
          <center>
            <img
            className="IND"
            src={indllimona}
            width="350px" 
            height="240px"
            marginLeft= "auto"
            marginRight= "auto"
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"10px" , marginTop:"-10px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
            Mousse de llimona
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
            Sense gluten. Pa de pessic blanc. Interior: Maracujà.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*/////////////////////////////FILA 4////////////////////////////////////// */}

      {/*MOUSSE PINYA COLADA*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px" , marginTop:"0px"}}>
          <center>
            <img
            src={indcolada}
            style={{ alignSelf: "center" }}
            width="300px" 
            height="260px"
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"10px" , marginTop:"10px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
              Mousse de pinya colada
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-12px"}}>
              Sense gluten. Pa de pessic blanc.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*MOUSSE PASTISSET CATANIES*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px", marginTop:"0px"}}>
          <center>
            <img
            className="IND"
            src={pcatanies}
            style={{ alignSelf: "center" }}
            width="375px" 
            height="270px"
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"10px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Pastisset de catànies
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
            Sense gluten. Pa de pessic blanc. Conté fruits secs. Interior: Crema de catànies.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>

      {/*SARA*/}
        <CardContent style={{padding:"0px",  marginTop:"20px"}} >
          <center>
            <img
            className="IND"
            src={indsara}
            width="270px" 
            height="230px"
            marginLeft= "auto"
            marginRight= "auto"
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"10px" , marginTop:"20px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Sara
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Conté gluten i fruits secs. Pa de pessic blanc. Interior: mantega.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>


{/*/////////////////////////////FILA 5////////////////////////////////////// */}

      {/*BRAÇET NATA*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px" , marginTop:"-15px"}}>
          <center>
            <img
            src={bramininata}
            style={{ alignSelf: "center" }}
            width="300px" 
            height="270px"
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"10px" , marginTop:"2px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
              Braçet de nata cremat
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-12px"}}>
              Conté gluten. 
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*BRAÇET TRUFA*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px", marginTop:"-10px"}}>
          <center>
            <img
            className="IND"
            src={braminitrufa}
            style={{ alignSelf: "center" }}
            width="340px" 
            height="260px"
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"10px" , marginTop:"8px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Braçet de trufa cremat
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

      {/*BRAÇET TURRO*/}
        <CardContent style={{padding:"0px"}} >
          <center>
            <img
            className="IND"
            src={braminiturro}
            width="350px" 
            height="240px"
            marginLeft= "auto"
            marginRight= "auto"
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"10px" , marginTop:"15px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Braçet de turró cremat
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Conté gluten i fruits secs.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*/////////////////////////////FILA 6////////////////////////////////////// */}
      {/*TOCINET*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px", marginTop:"-10px"}}>
          <center>
            <img
            className="IND"
            src={tocinet}
            style={{ alignSelf: "center" }}
            width="230px" 
            height="260px"
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"10px" , marginTop:"10px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Tocinet
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Sense gluten. 
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>

      {/*BULGARO*/}
        <CardContent style={{padding:"0px"}} >
          <center>
            <img
            className="IND"
            src={bulgaro}
            width="350px" 
            height="260px"
            marginLeft= "auto"
            marginRight= "auto"
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"10px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Búlgaro
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Xocolata negre, trufa i pa de pessic de cacao. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>



{/*/////////////////////////////PASTISSOS///////////////////////////////////// */}

{/*/////////////////////////////linea////////////////////////////////////// */}
<Grid item xs={12} sm={12} md={12} style={{backgroundColor: '#ffffff'}}>
         <p id="Past" className={classes.l2} style={{backgroundColor: '#ffffff'}}> 
              <hr 
              style={{
                color: '#3B0404',
                backgroundColor: '#3B0404',
                height: .5,
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
          <a>Pastissos</a> 
          </p>
        </Card>
      </Grid>

     {/*/////////////////////////////FILA 1-PAST////////////////////////////////////// */}
      
      {/*MUSIC*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px" , marginTop:"10px"}}>
          <center>
            <img
            src={music}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"-10px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
              Músic
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
                Conté gluten i fruits secs. Pa de pessic blanc. Interior. Xocolata.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*CREMA CATALANA*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px", marginTop:"0px"}}>
          <center>
            <img
            className="IND"
            src={cremacat}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
            Mousse de crema catalana
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
             Conté gluten i fruits secs (carquinyoli). Pa de pessic blanc.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>


      {/*/////////////////////////////FILA 2-PAST////////////////////////////////////// */}

      {/*LLIMONA I FRUITS VERMELLS*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"30px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"10px" , marginTop:"10px"}}>
          <center>
            <img
            src={llimfru}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
        <CardContent style={{padding:"0px" , marginTop:"-110px"}}>
         <center>
            <p style={{marginTop: "100px", fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
              Mousse de llimona i fruits vermells
           </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
              Conté gluten. Pa de pessic de blanc i de cacao.
            </p>
            </center>
        </CardContent>
          
        </Card>
        </Grid>
{/*POMA I MANGO*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"30px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"10px", marginTop:"10px"}}>
          <center>
            <img
            className="IND"
            src={pmango}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"-10px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
            Mousse de poma i mango
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
             Pa de pessic blanc i de cacao. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

     {/*/////////////////////////////FILA 3-PAST////////////////////////////////////// */}

      {/*SELVA NEGRE*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"100px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"10px" , marginTop:"-10px"}}>
          <center>
            <img
            src={selva_negra}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
        <CardContent style={{padding:"10px" , marginTop:"-30px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
              Pastís selva negra
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
              Nata, melmelada de fruit vermells. Pa de pessic de cacao. Conté gluten i fruits secs.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*MANDARINA*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"80px",backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"10px", marginTop:"5px"}}>
          <center>
            <img
            className="IND"
            src={mandarina}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"-10px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
            Mousse de mandarina, llimona i mojito.
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
            Pa de pessic de mojito i de cacao. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*/////////////////////////////FILA 4-PAST////////////////////////////////////// */}

      {/*MOUSSE DE MADUIXA*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"50px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"10px", marginTop:"5px"}}>
          <center>
            <img
            src={mousse_maduixa}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"10px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
              Barra de maduixa
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
            Nata de maduixa. Pa de pessic blanc. Conté gluten.            
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*BARRA DE TURRO*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"50px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"10px", marginTop:"5px"}}>
          <center>
            <img
            className="IND"
            src={bturro}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"-10px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)", marginTop:"5px"}}>
             Barra de turró
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
             Nata de turró. Pa de pessic de cacao. Conté gluten i fruits secs.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*MOUSSE DE FRUITS VERMELLS*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{ marginTop:"50px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"10px", marginTop:"10px"}}>
          <center>
            <img
            src={maduixa}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"5px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
              Mousse de fruits vermells
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
              Pa de pessic blanc. Conté gluten.          
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*MOUSSE DE PINYA I COCO*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"50px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"10px", marginTop:"10px"}}>
          <center>
            <img
            className="IND"
            src={pincoco}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"-13px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)", marginTop:"0px"}}>
              Mousse de pinya i coco
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
             Pa de pessic blanc. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*MOUSSE DE TIRAMISU*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"50px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px", marginTop:"10px"}}>
          <center>
            <img
            src={tiramisu}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)", marginTop:"0px"}}>
              Mousse de tiramisú
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
            Pa de pessic de cacao i de cafè. Conté gluten.         
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*MOUSSE DE LLIMONA*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"50px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px", marginTop:"10px"}}>
          <center>
            <img
            className="IND"
            src={llimona}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)", marginTop:"0px"}}>
              Mousse de llimona
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
            Gema, Pa de pessic de cítrics i de cacao. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*MOUSSE DE 3XOC*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"90px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px", marginTop:"-10px"}}>
          <center>
            <img
            src={tresxoc}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)", marginTop:"0px"}}>
              Mousse de tres xocolates
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
            Mousse de xocolata blanca i llet. Xocolata negre. Pa de pessic blanc. Conté gluten.         
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*BARRA DE TRUFA*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"90px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px", marginTop:"-10px"}}>
          <center>
            <img
            className="IND"
            src={m_xocolata}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)", marginTop:"0px"}}>
              Barra de trufa amb cruixent de xocolata
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
              Pa de pessic de cacao. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*SANT MARC*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"100px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px", marginTop:"0px"}}>
          <center>
            <img
            src={sant_marc}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)", marginTop:"0px"}}>
              Sant Marc
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
              Trufa, nata i gema cremada. Pa de pessic blanc. Conté gluten.       
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*PERA CANELA*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"100px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px", marginTop:"0px"}}>
          <center>
            <img
            className="IND"
            src={peracanela}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)", marginTop:"0px"}}>
              Mousse de pera i canyella            
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
              Pa de pessic blanc. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*MASSINI*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"100px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px", marginTop:"0px"}}>
          <center>
            <img
            src={massini}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)", marginTop:"0px"}}>
              Massini
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
            Nata, trufa i gema cremada. Pa de pessic de cacao. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*SACHER*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"100px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px", marginTop:"0px"}}>
          <center>
            <img
            className="IND"
            src={sacher}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)", marginTop:"0px"}}>
              Sacher           
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
            Trufa, melmelada de fruits vermells. Pa de pessic de cacao. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*PASTÍS MADUIXA*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"100px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px", marginTop:"-10px"}}>
          <center>
            <img
            src={pmaduixa}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"25px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)", marginTop:"0px"}}>
              Pastís de maduixa
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
              Nata, pa de pessic blanc. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*MOUSSE XOCOLATA 75%*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"100px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px", marginTop:"10px"}}>
          <center>
            <img
            className="IND"
            src={mxoco75}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)", marginTop:"0px"}}>
              Mousse de xocolata 75%           
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
              Pa de pessic de cacao. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*TRUFA VIRUTA*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"50px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px", marginTop:"-10px"}}>
          <center>
            <img
            src={trufaviruta}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"20px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)", marginTop:"0px"}}>
              Pastís de trufa viruta
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
              Pa de pessic de cacao. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
      {/*IOGURT*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"50px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px", marginTop:"10px"}}>
          <center>
            <img
            className="IND"
            src={iogurt}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)", marginTop:"5px"}}>
            Mousse de iogurt grec          
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
            Pa de pessic de mora. Coulis de mora. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*PASTIS DE NATA*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"50px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px", marginTop:"-10px"}}>
          <center>
            <img
            src={pnata}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"20px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
              Pastís de nata
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
            Nata, pa de pessic de blanc. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
      {/*PNATA CREMAT*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"50px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px", marginTop:"-10px"}}>
          <center>
            <img
            className="IND"
            src={pnatacremat}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)", marginTop:"5px"}}>
            Pastís de nata cremat          
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
            Nata, gema cremada, pa de pessic de blanc. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*PASTIS LLIMONA*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"50px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px", marginTop:"-5px"}}>
          <center>
            <img
            src={pllimona}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"45px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)", marginTop:"-35px"}}>
             Pastís de llimona
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
            Nata de llimona, gema cremada, pa de pessic de cítirc. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*PASTIS TURRO*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"50px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px", marginTop:"0px"}}>
          <center>
            <img
            className="IND"
            src={pturro}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)", marginTop:"5px"}}>
              Pastís de turró       
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
             Nata de turró, gema cremada, pa de pessic blanc. Conté gluten i fruits secs.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*PASTIS NATA TRUFA*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"50px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px", marginTop:"-5px"}}>
          <center>
            <img
            src={pnatatrufa}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"25px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)", marginTop:"-8px"}}>
             Pastís de nata-trufa
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-20px"}}>
            Encenalls de xocolata, pa de pessic blanc. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*SARA*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"50px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px", marginTop:"0px"}}>
          <center>
            <img
            className="IND"
            src={sara}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)", marginTop:"5px"}}>
              Sara     
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-12px"}}>
            Conté gluten i fruits secs. Pa de pessic blanc. Interior: mantega.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

{/*/////////////////////////////BRAÇOS///////////////////////////////////// */}

{/*/////////////////////////////linea////////////////////////////////////// */}
<Grid item xs={12} sm={12} md={12} style={{backgroundColor: '#ffffff'}}>
         <p id="Bra" className={classes.l2} style={{backgroundColor: '#ffffff'}}> 
              <hr 
              style={{
                color: '#3B0404',
                marginTop:"40px",
                backgroundColor: '#3B0404',
                height: .5,
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
          <a>Braços</a> 
          </p>
        </Card>
      </Grid>

     {/*/////////////////////////////FILA 1-BRAÇOS////////////////////////////////////// */}

      {/*TIGRETON*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px" , marginTop:"10px"}}>
          <center>
            <img
            src={tigreton}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
            Braç de gitano, "tigretón"
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-12px"}}>
            Xocolata, nata i pa de pessic de cacao. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*BRAÇ DE TURRO CREMAT*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0", marginTop:"10px"}}>
          <center>
            <img
            className="IND"
            src={braturro}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Braç de turró cremat
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Nata de turró, gema cremada, pa de pessic blanc. Conté gluten i fruits secs.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>


     {/*/////////////////////////////FILA 2-BRAÇOS////////////////////////////////////// */}

      {/*braç crema cremat*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"50px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px" , marginTop:"10px"}}>
          <center>
            <img
            src={bcremacremat}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
            Braç de crema cremat
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-12px"}}>
            Gema cremada, pa de pessic blanc. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*Braç crema*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"50px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0", marginTop:"10px"}}>
          <center>
            <img
            className="IND"
            src={bcrema}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
            Braç de crema
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
            Sucre glacé, pa de pessic blanc. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

     {/*/////////////////////////////FILA 3-BRAÇOS////////////////////////////////////// */}
      {/*braç nata cremat*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"50px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px" , marginTop:"10px"}}>
          <center>
            <img
            src={bnatacremat}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
            Braç de nata cremat
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-12px"}}>
            Gema cremada, pa de pessic blanc. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*Braç nata*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"50px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0", marginTop:"10px"}}>
          <center>
            <img
            className="IND"
            src={bnata}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
            Braç de nata
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
            Sucre glacé, pa de pessic blanc. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

      {/*/////////////////////////////FILA 4-BRAÇOS////////////////////////////////////// */}
      {/*braç de trufa cremat*/}
      <Grid item xs={12} sm={12} md={12} lg={12} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"50px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px" , marginTop:"10px"}}>
          <center>
            <img
            src={btrufacremat}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
            Braç de trufa cremat
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-12px"}}>
            Gema cremada, pa de pessic blanc. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>


{/*/////////////////////////////BANDES-TRENES-REBOSTERIA///////////////////////////////////// */}

{/*/////////////////////////////linea////////////////////////////////////// */}
<Grid item xs={12} sm={12} md={12} style={{backgroundColor: '#ffffff'}}>
         <p id="BTR" className={classes.l2} style={{backgroundColor: '#ffffff'}}> 
              <hr 
              style={{
                marginTop:"40px",
                color: '#3B0404',
                backgroundColor: '#3B0404',
                height: .5,
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
          <a>Bandes - Trenes - Rebosteria</a> 
          </p>
        </Card>
      </Grid>

     {/*/////////////////////////////FILA 1-BTR////////////////////////////////////// */}

      {/*BANDA DE FRUITA*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px" , marginTop:"10px"}}>
          <center>
            <img
            src={bfruita}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
            Banda de fruita
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-12px"}}>
            Pasta de full, crema, fruita de la temporada. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*LIONESES*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0", marginTop:"10px"}}>
          <center>
            <img
            className="IND"
            src={lioneses}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
            Lioneses de nata, trufa o crema

            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
            Pasta choux. Sense gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

{/*/////////////////////////////FILA 2-BTR////////////////////////////////////// */}

      {/*TRENA DE NATA TRUFA*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"20px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px" , marginTop:"10px"}}>
          <center>
            <img
            src={trenanatatrufa}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
            Trena de brioix farcida de nata i trufa

            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-12px"}}>
            Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*REBOSTERIA*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"20px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0", marginTop:"10px"}}>
          <center>
            <img
            className="IND"
            src={rebosteria}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
            Rebosteria

            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
            Peçes variades. Poden contenir gluten i fruits secs.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

{/*/////////////////////////////FILA 3-BTR////////////////////////////////////// */}

      {/*CORONA DE NATA*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"20px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px" , marginTop:"10px"}}>
          <center>
            <img
            src={cnata}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Corona de nata
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-12px"}}>
            Sucre glacé, pasta de full. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*corona de crema*/}
      <Grid item xs={12} sm={12} md={12} lg={6} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{marginTop:"20px", backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0", marginTop:"10px"}}>
          <center>
            <img
            className="IND"
            src={ccorona}
            style={{ alignSelf: "center" }}
            className={classes.PAST}
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
            Corona de crema

            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
            Sucre glacé, pasta de full. Conté gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>

{/*/////////////////////////////Gelats///////////////////////////////////// */}

{/*/////////////////////////////linea////////////////////////////////////// */}
<Grid item xs={12} sm={12} md={12} style={{backgroundColor: '#ffffff'}}>
         <p id="Gelats" className={classes.l2} style={{backgroundColor: '#ffffff'}}> 
              <hr 
              style={{
                marginTop:"40px",
                color: '#3B0404',
                backgroundColor: '#3B0404',
                height: .5,
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
          <a>Gelats</a> 
          </p>
        </Card>
      </Grid>

     {/*/////////////////////////////FILA 1-GELATS////////////////////////////////////// */}

 {/*/////////////////////////////FILA 1////////////////////////////////////// */}

      {/*G VAINILLA*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px" , marginTop:"-10px"}}>
          <center>
            <img
            src={gvainilla}
            style={{ alignSelf: "center" }}
            width="250px" 
            height="250px"
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Tarrina de vainilla

            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-12px"}}>
            Llet, aigua, sucre, vainilla. Sense gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*G XOCO*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px"}}>
          <center>
            <img
            className="IND"
            src={gxoco}
            style={{ alignSelf: "center" }}
            width="250px" 
            height="250px"
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Tarrina de xocolata.
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Llet, aigua, sucre, cacao. Sense gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>

      {/*G LLIMONA*/}
        <CardContent style={{padding:"0px"}} >
          <center>
            <img
            className="IND"
            src={gllimona}
            width="250px" 
            height="250px"
            marginLeft= "auto"
            marginRight= "auto"
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Tarrina de llimona
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Llet, aigua, sucre, llimona. Sense gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        
        </Grid>


 {/*/////////////////////////////FILA 2////////////////////////////////////// */}

      {/*G MANGO*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px" , marginTop:"-10px"}}>
          <center>
            <img
            src={gmango}
            style={{ alignSelf: "center" }}
            width="250px" 
            height="250px"
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
         <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Tarrina de mandarina

            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-12px"}}>
            Llet, aigua, sucre, fruita fresca. Sense gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>
{/*G FRUITS*/}
      <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>
      
        <CardContent style={{padding:"0px"}}>
          <center>
            <img
            className="IND"
            src={gfruits}
            style={{ alignSelf: "center" }}
            width="250px" 
            height="250px"
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Tarrina de fruits vermells.
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Llet, aigua, sucre, fruita fresca. Sense gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={4} style={{backgroundColor: '#ffffff'}}>
      <Card className={classes.rooty} elevation={0} style={{backgroundColor: '#ffffff'}}>

      {/*G MANDARINA*/}
        <CardContent style={{padding:"0px"}} >
          <center>
            <img
            className="IND"
            src={gmandarina}
            width="250px" 
            height="250px"
            marginLeft= "auto"
            marginRight= "auto"
            />
            </center>
        </CardContent>
          
          <CardContent style={{padding:"0px" , marginTop:"0px"}}>
            <center>
            <p style={{fontSize:"25px", fontWeight: "450", color: "rgb(59, 4, 4)",}}>
             Tarrina de mango
            </p>
            <p style={{ fontSize:"20px", color: "rgb(59, 4, 4)", marginTop:"-15px"}}>
             Llet, aigua, sucre, fruita fresca. Sense gluten.
            </p>
            </center>
          </CardContent>
        </Card>
        </Grid>



   
          




    </Grid>

  );
}

export default pagepastCat;
