import logo from './logo.svg';
import './App.css';
import React from "react";
import {Switch} from "react-router-dom";
import General from "./routes/General/General";
import {Route} from "react-router-dom";
import Courses from "./routes/Courses/Courses";
import News from "./routes/News/News";
import Shop from "./routes/Shop/Shop";


function App() {
    return (
        <Switch>
            <Route path="/" exact component={General}/>
            <Route path="/courses" component={Courses}/>
            <Route path="/news" component={News}/>
            <Route path="/shop" component={Shop}/>
        </Switch>
    );
}

export default App;
