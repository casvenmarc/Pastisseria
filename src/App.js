import React, { Component, useState, useContext } from "react";
import "./App.css";
import history from "./history";

import Header from "./Components/header/Header";
import Headeresp from "./Components/header/Headeresp";
import Headereng from "./Components/header/Headereng";



import Productes from "./Components/header/productes/Productes";
import Productesesp from "./Components/header/productes/Productesesp";
import Producteseng from "./Components/header/productes/Producteseng";

import Home from "./Components/home/Home";
import Homeesp from "./Components/home/Homeesp";
import Homeeng from "./Components/home/Homeeng";

import PagepastCat from "./Components/header/productes/pagepastCat";
import PagepastEsp from "./Components/header/productes/pagepastEsp";
import PagepastEng from "./Components/header/productes/pagepastEng";

import PagebrioixCat from "./Components/header/productes/pagebrioixCat";
import PagebrioixEsp from "./Components/header/productes/pagebrioixEsp";
import PagebrioixEng from "./Components/header/productes/pagebrioixEng";

import Avis_legal_Cat from "./Components/footer/Avis_legal_Cat";
import Avis_legal_Esp from "./Components/footer/Avis_legal_Esp";
import Avis_legal_Eng from "./Components/footer/Avis_legal_Eng";



import Footer from "./Components/footer/Footer";
import Footeresp from "./Components/footer/Footeresp";
import Footereng from "./Components/footer/Footereng";

import { Router } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { OpenContext } from "./Components/header/hooks";
//import PDF from "react-pdf-js-infinite";

import ScrollUpButton from "react-scroll-up-button";




const theme = createMuiTheme({
  typography: {
    fontFamily: ["Nunito"].join(","),
  },
});

//////////////////////////////////////////////////////////////////
function HEADERDECIDER() {
  const { estadoHeadercat } = React.useContext(OpenContext);
  const { estadoHeaderesp } = React.useContext(OpenContext);
  const { estadoHeadereng } = React.useContext(OpenContext);

  if (estadoHeadercat == 1) {
    return <Header />;
  }
  if (estadoHeaderesp == 1) {
    return <Headeresp />;
  }
  if (estadoHeadereng == 1) {
    return <Headereng />;
  }
  if (estadoHeadercat == 0 && estadoHeaderesp == 0 && estadoHeadereng == 0) {
    return <Header />;
  }
}

//////////////////////////////////////////////////////////////////////////////
function FOOTERDECIDER() {
  const { estadoFootercat } = React.useContext(OpenContext);
  const { estadoFooteresp } = React.useContext(OpenContext);
  const { estadoFootereng } = React.useContext(OpenContext);

  if (estadoFootercat == 1) {
    return <Footer />;
  }
  if (estadoFooteresp == 1) {
    return <Footeresp />;
  }
  if (estadoFootereng == 1) {
    return <Footereng />;
  }
  if (estadoFootercat == 0 && estadoFooteresp == 0 && estadoFootereng == 0) {
    return <Footer />;
  }
}

///////////////////////////////////////////////////////////////

  
class App extends Component {

  render() {

    return (
      <div>
         
      <ScrollUpButton style={{backgroundColor: '#3B0404'}}/>
      <ThemeProvider theme={theme}>
          <HEADERDECIDER />
          <Router history={history}>
          <Switch>
            {/*Es molt important el ordre!! De mes a dins cap a /  -->*/}
            <Route path="/Footer/AvislegalEng" component={Avis_legal_Eng} />
            <Route path="/Footer/AvislegalEsp" component={Avis_legal_Esp} />
            <Route path="/Footer/AvislegalCat" component={Avis_legal_Cat} />
            <Route path="/Products/Productes/pagebrioixEng" component={PagebrioixEng} />
            <Route path="/Products/Productes/pagebrioixEsp" component={PagebrioixEsp} />
            <Route path="/Products/Productes/pagebrioixCat" component={PagebrioixCat} />
            <Route path="/Products/Productes/pagepastEng" component={PagepastEng} />
            <Route path="/Products/Productes/pagepastEsp" component={PagepastEsp} />
            <Route path="/Products/Productes/pagepastCat" component={PagepastCat} />
            <Route path="/Home/Home_esp" component={Homeesp} />
            <Route path="/Home/Home_eng" component={Homeeng} />
            <Route path="/Products/Productes" component={Productes} />
            <Route path="/Products/Productesesp" component={Productesesp} />
            <Route path="/Products/Producteseng" component={Producteseng} />
            <Route path="/" component={Home} />
          </Switch>
          </Router>
          <FOOTERDECIDER />
         {/*<PAGEDECIDER />*/}
         {/*<Footer />*/}
      </ThemeProvider>
      </div>


    );
  }
}

export default App;
