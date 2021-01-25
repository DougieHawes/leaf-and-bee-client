import { useEffect, useState } from "react";

import { Switch, Route } from "react-router-dom";

import "./style.min.css";

// import layout components
import Banner from "./components/layout/Banner.js";

// import route components
import Home from "./components/routes/Home.js";
import Services from "./components/routes/Services.js";
import Design from "./components/routes/Design.js";
import About from "./components/routes/About.js";
import News from "./components/routes/News.js";
import Contact from "./components/routes/Contact.js";

const App = () => {
  return (
    <div className="app">
      <Banner />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/design" component={Design} />
        <Route path="/about" component={About} />
        <Route path="/news" component={News} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default App;
