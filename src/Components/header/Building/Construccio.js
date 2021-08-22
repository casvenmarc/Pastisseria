import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import BuildIcon from '@material-ui/icons/Build';
import Typography from "@material-ui/core/Typography";

import grey from "@material-ui/core/colors/grey";
import WarningIcon from '@material-ui/icons/Warning';

//import grey from "@material-ui/core/colors/grey";


const useStyles = makeStyles({
  root: {
    //minWidth: "400px",
    marginTop: "180px",
    marginBottom: "200px",
    marginLeft: "20px",
    marginRight: "20px",
    height: "auto",
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

export function Construccio() {
  const classes = useStyles();

  return (
    <Grid container style={{width: "100%" }}>
      

     {/*<Grid item xs={12} sm={12} md={12}>
         <div
          style={{
            marginTop: "200px",
            marginLeft: "30px",
            display: "flex",
            fontFamily: "Nunito",
            //marginLeft: "auto",
            marginBottom: "0px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h2>Actualment aquesta secció del web es troba en construcció. <br/> Aviat l'habilitarem!</h2>
        </div>
      </Grid>  */}

      <Grid item xs={12} sm={12} md={12}>

        <Card className={classes.root} elevation={1}>
          <Typography className={classes.title}>
            <h2>Actualment aquesta secció del web es troba en construcció. <br/> Aviat l'habilitarem!</h2>
         
          <WarningIcon style={{ color: "#3B0404", fontSize: 50, verticalAlign: 'middle', display: 'inline-flex'}} />
          <BuildIcon style={{ color: "#3B0404", fontSize: 50, verticalAlign: 'middle',  display: 'inline-flex'} } />
          </Typography>
        </Card>

        {/* <div
            style={{
              marginTop: "20px",
              marginLeft: "30px",
              display: "flex",
              //marginLeft: "auto",
              fontFamily: "Nunito",
              marginBottom: "180px",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
        <WarningIcon style={{ color: grey [900], fontSize: 50}} />
        <BuildIcon style={{ color: grey [900], fontSize: 50}} />

        </div> */}
  
      </Grid>


 
      
    </Grid>
  );
}

export default Construccio;