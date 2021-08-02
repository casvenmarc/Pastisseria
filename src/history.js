//import { createBrowserHistory } from "history";
//export default createBrowserHistory(); 


import { createBrowserHistory } from "history"
import ReactGA from "react-ga"



const history = createBrowserHistory()
ReactGA.initialize('UA-173493498-1')
history.listen((location) => {
    window.ga('set', 'page', location.pathname + location.search);
    window.ga('send', 'pageview');
});


export default history