import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import BuildIcon from '@material-ui/icons/Build';
import Typography from "@material-ui/core/Typography";
import WarningIcon from '@material-ui/icons/Warning';


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

  title: {
    fontFamily: "Nunito",
    fontSize: "20px",
    color: "#3B0404",
    //marginLeft: "50px",
    marginTop: "30px",
    textAlign: "center",
  },

});

export function ConstruccioEng() {
  const classes = useStyles();

  return (
    <Grid container style={{width: "100%" }}>
      
      <Grid item xs={12} sm={12} md={12}>

        <Card className={classes.root} elevation={1}>
          <Typography className={classes.title}>
            <h2>This section of the website is currently under construction. <br/> We will soon enable it!</h2>
         
          <WarningIcon style={{ color: "#3B0404", fontSize: 50, verticalAlign: 'middle', display: 'inline-flex'}} />
          <BuildIcon style={{ color: "#3B0404", fontSize: 50, verticalAlign: 'middle',  display: 'inline-flex'} } />
          </Typography>
        </Card>

      </Grid>

    </Grid>
  );
}

export default ConstruccioEng;