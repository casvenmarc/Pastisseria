import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import CopyrightIcon from "@material-ui/icons/Copyright";

import history from "../../history";

const useStyles = makeStyles((theme) => ({
  rooty: {
    flexGrow: 1,
    backgroundColor: "rgb(59, 4, 4)",
  },
  Carta: {

    backgroundColor: "transparent",
  },
}));

const today = new Date();

export default function Footer() {
  const classes = useStyles();
  return (
    <div  style={{ zIndex: "1", width: "100%" }}>
      <Grid container maxWidth className={classes.rooty}>
        <Grid item xs={12} sm={12} md={4} alignItems="center">
          <Card
            className={classes.Carta}
            elevation={0}
            style={{
              textAlign: "center",
            }}
          >
            <p
              style={{
                marginTop: "40px",
                marginLeft: "20px",
                marginRight: "20px",
                fontSize: "20px",
                fontFamily: "Nunito",
                fontWeight: "normal",
                color: "white",
              }}
            >
              <CopyrightIcon fontSize="small" /> &nbsp; {today.getFullYear()}, Pastisseria Marcel
            </p>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={4} alignItems="center">
          <Card
            className={classes.Carta}
            elevation={0}
            style={{
              textAlign: "center",
            }}
          >
            <p
              style={{
                marginTop: "40px",
                marginLeft: "20px",
                marginRight: "20px",
                fontSize: "20px",
                fontFamily: "Nunito",
                fontWeight: "normal",
                color: "white",
                cursor: 'pointer'
              }}
              onClick={() => {

                history.push("/Footer/AvislegalCat")
                window.scrollTo(0, 0)
              }}
            >
              Avís legal
            </p>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={4} alignItems="center">
          <Card
            className={classes.Carta}
            elevation={0}
            style={{
              textAlign: "center",
            }}
          >
            <p
              style={{
                marginTop: "10px",
                marginLeft: "20px",
                marginRight: "20px",
                fontSize: "20px",
                fontFamily: "Nunito",
                fontWeight: "normal",
                color: "white",
              }}
            >
              Segueix-nos a:{" "}
              <a href="https://www.facebook.com/pages/category/Bakery/Pastisseria-Marcel-146807665351995/">
                {" "}
                <FacebookIcon
                  style={{
                    color: grey[50],
                    marginTop: "30px",
                    marginBottom: "20px",
                    fontSize: "40px",
                  }}
                />
              </a>
              <a href="https://www.instagram.com/pastisseriamarcel/">
                <InstagramIcon
                  style={{
                    color: grey[50],
                    marginTop: "30px",
                    marginBottom: "20px",
                    fontSize: "40px",
                  }}
                />
              </a>
            </p>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
