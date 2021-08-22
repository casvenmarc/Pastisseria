import React from "react";
import {useState} from "react";
import Grid from "@material-ui/core/Grid";
import { CardMedia } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import grey from "@material-ui/core/colors/grey";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import WebIcon from "@material-ui/icons/Web";
import LanguageIcon from "@material-ui/icons/Language";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { OpenContext } from "./hooks";
import CardActions from "@material-ui/core/CardActions";

import history from "../../history"; //--> ../ una carpeta cap a dalt

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "rgb(59, 4, 4)",
    height: "50px",
  },
  Carta: {
    maxWidth: 135,
    width: 135,
    backgroundColor: "transparent",
  },
  Carta_logo: {
    cursor: "pointer",
    maxWidth: 135,
    width: 135,
    backgroundColor: "transparent",
  },

  drawerPaper: {
    backgroundColor: "rgb(59, 4, 4)",
  },

  ButtonMenu: {
    variant: "outlined",
    borderRadius: 0,
    borderColor: "transparent",
    backgroundColor: "rgb(59, 4, 4)",
    "&:hover": {
      backgroundColor: "rgb(216, 251, 52)",
    },
  },

  List: {
    fontColor: "rgb(255,255,255)",
    backgroundColor: "rgb(59, 4, 4)",
    "&:hover": {
      backgroundColor: "rgb(216, 251, 52)",
    },
  },

  dividerColor: {
    backgroundColor: "rgb(255,255,255)",
  },

  ButtonArrow: {
    borderRadius: 0,
    backgroundColor: "rgb(59, 4, 4)",
    "&:hover": {
      backgroundColor: "rgb(216, 251, 52)",
    },
  },
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const { setHeadercat } = React.useContext(OpenContext);
  const { setHeaderesp } = React.useContext(OpenContext);
  const { setHeadereng } = React.useContext(OpenContext);
  const { setFootercat } = React.useContext(OpenContext);
  const { setFooteresp } = React.useContext(OpenContext);
  const { setFootereng } = React.useContext(OpenContext);



  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [openit, setOpenit] = React.useState(false);

  const handleClick = () => {
    setOpenit(!openit);
  };

  return (
    <div
      className={classes.root}
      style={{ position: "fixed", zIndex: "1", width: "100%" }}
    >
      <Grid container maxWidth>
        <Grid item xs={1} sm={1} md={1}>
          <Card className={classes.Carta} elevation={0}></Card>
        </Grid>

        <Grid item xs={3} sm={3} md={1}>
          <Card className={classes.Carta_logo} elevation={0}>
            <CardActions
              onClick={() => {
                history.push("/")
                window.scrollTo(0, 0)
              }}
            >
              <CardMedia
                className="Media"
                component="img"
                image={require("./images/logo_marcel.png")}
              />
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={1} sm={1} md={1}>
          <Card className={classes.Carta} elevation={0}></Card>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
          <Card className={classes.Carta} elevation={0}></Card>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
          <Card className={classes.Carta} elevation={0}></Card>
        </Grid>
        <Grid item xs={1} sm={1} md={1}>
          <Card className={classes.Carta} elevation={0}></Card>
        </Grid>
        <Grid item xs={1} sm={1} md={2}>
          <Card className={classes.Carta} elevation={0}></Card>
        </Grid>
        <Grid item xs={1} sm={1} md={3}>
          <Card className={classes.Carta} elevation={0}></Card>
        </Grid>

        <Grid item xs={2} sm={2} md={1}>
          <IconButton
            aria-label="open drawer"
            style={{ color: grey[50] }}
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(classes.ButtonMenu, open && classes.hide)}
            disableRipple={true}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            //variant="persistent"
            anchor="right"
            classes={{
              paper: clsx(classes.drawerPaper),
            }}
            open={open}
          >
             <div className={classes.drawerHeader}>
              <IconButton
                className={classes.ButtonArrow}
                onClick={handleDrawerClose}
                style={{ color: grey[50] }}
                elevation={0}
              >
                {theme.direction === "rtl" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <Divider />
           
            <List>
              {["PRODUCTES"].map((text) => (
                <ListItem
                  button
                  key={text}
                  style={{ color: grey[50] }}
                  className={classes.List}
                  onClick={() => {
                    history.push("/Products/Productes")
                    window.scrollTo(0, 0)
                    handleDrawerClose()
                  }}
                >
                  <ListItemIcon style={{ color: grey[50] }}>
                    <LocalGroceryStoreIcon />
                  </ListItemIcon>

                  <ListItemText primary={text} />
                </ListItem>
              ))}
              

              {["DIADES"].map((text) => (
                <ListItem
                  button
                  key={text}
                  style={{ color: grey[50] }}
                  className={classes.List}
                  onClick={() => {
                    history.push("/Building/Construccio")
                    window.scrollTo(0, 0)
                    handleDrawerClose()
                  }}
                >
                  <ListItemIcon style={{ color: grey[50] }}>
                    <CalendarTodayIcon />
                  </ListItemIcon>

                  <ListItemText primary={text} />
                </ListItem>
              ))}

              {["BLOG"].map((text) => (
                <ListItem
                  button
                  key={text}
                  style={{ color: grey[50] }}
                  className={classes.List}
                  onClick={() => {
      
                    window.scrollTo(0, 0)
                    handleDrawerClose()
                  }}
                >
                  <ListItemIcon style={{ color: grey[50] }}>
                    <WebIcon />
                  </ListItemIcon>

                  <ListItemText primary={text} />
                </ListItem>
              ))}

              {["CONTACTE"].map((text) => (
                <ListItem
                  button
                  key={text}
                  style={{ color: grey[50] }}
                  className={classes.List}
                  onClick={() => {
 
                    window.scrollTo(0, 0)
                    handleDrawerClose()
                  }}
                >
                  <ListItemIcon style={{ color: grey[50] }}>
                    <ContactPhoneIcon />
                  </ListItemIcon>

                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider className={classes.dividerColor}></Divider>

            <ListItem
              button
              style={{ color: grey[50] }}
              className={classes.List}
              onClick={handleClick}
            >
              <ListItemIcon style={{ color: grey[50] }}>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary="IDIOMA" />
              {!openit ? <ExpandMore /> : <ExpandLess />}
            </ListItem>
            <Collapse in={openit} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  style={{ color: grey[50] }}
                  className={classes.List}
                  onClick={() => {
                    history.push("/")
                    setHeadercat(1);
                    setHeaderesp(0);
                    setHeadereng(0);
                    setFootercat(1);
                    setFooteresp(0);
                    setFootereng(0);

                    window.scrollTo(0, 0)
                    handleDrawerClose()
                  }}
                >
                  <ListItemText primary="Català" />
                </ListItem>
              </List>
           
              <List component="div" disablePadding>
                <ListItem
                  button
                  onClick={() => {
                    history.push("/Home/Home_esp")
                    setHeaderesp(1);
                    setHeadercat(0);
                    setHeadereng(0);
                    setFootercat(0);
                    setFooteresp(1);
                    setFootereng(0);

                    window.scrollTo(0, 0)
                    handleDrawerClose()
                  }}
                  style={{ color: grey[50] }}
                  className={classes.List}
                >
                  <ListItemText primary="Castellano" />
                </ListItem>
              </List>
              <List component="div" disablePadding>
                <ListItem
                  button
                  onClick={() => {
                    history.push("/Home/Home_eng")
                    setHeadereng(1);
                    setHeadercat(0);
                    setHeaderesp(0);
                    setFootercat(0);
                    setFooteresp(0);
                    setFootereng(1);

                    window.scrollTo(0, 0)
                    handleDrawerClose()
                  }}
                  style={{ color: grey[50] }}
                  className={classes.List}
                >
                  <ListItemText primary="English" />
                </ListItem>
              </List>
            </Collapse>
          </Drawer>
        </Grid>
      </Grid>
    </div>
  );
}
