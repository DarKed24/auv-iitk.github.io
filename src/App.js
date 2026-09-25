import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/css/variables.css";
import "assets/css/ocean.css";

import Footer from "components/Footers/Footer";
import ScrollToTop from "components/Layout/ScrollToTop";

// pages
import LandingPage from "views/LandingPage/LandingPage";
import AboutUsPage from "views/AboutUsPage/AboutUsPage";
import TeamPage from "views/TeamPage/TeamPage";
import AnahitaPage from "views/Vehicles/AnahitaPage/AnahitaPage";
import VarunPage from "views/Vehicles/VarunPage/VarunPage";
import TarangPage from "views/Vehicles/TarangPage/TarangPage";
import AtalPage from "views/Vehicles/AtalPage/AtalPage";
import EventsPage from "views/EventsPage/EventsPage";
import BlogsPage from "views/BlogsPage/BlogsPage";
import ContactUsPage from "views/ContactUsPage/ContactUsPage";
import SingleBlog from "views/SingleBlogs/SingleBlog";
import Mechanical from "views/MembersPage/Mechanical";
import Software from "views/MembersPage/Software";
import Electrical from "views/MembersPage/Electrical";
import Business from "views/MembersPage/Business";
import NotFound from "views/NotFound/NotFound";

const App = () => (
  <HashRouter>
    <ScrollToTop />
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/landing-page" />} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/about-us" component={AboutUsPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/vehicles/anahita" component={AnahitaPage} />
      <Route path="/vehicles/varun" component={VarunPage} />
      <Route path="/vehicles/tarang" component={TarangPage} />
      <Route path="/vehicles/atal" component={AtalPage} />
      <Route path="/events" component={EventsPage} />
      <Route path="/blogs/:id" component={SingleBlog} />
      <Route path="/blogs" component={BlogsPage} />
      <Route path="/contact-us" component={ContactUsPage} />
      <Route path="/mechanical" component={Mechanical} />
      <Route path="/electrical" component={Electrical} />
      <Route path="/software" component={Software} />
      <Route path="/business" component={Business} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </HashRouter>
);

export default App;
