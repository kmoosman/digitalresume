import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";
import ReactGA from "react-ga4";
import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import News from "./pages/News";
import Podcasts from "./pages/Podcasts";
import Query from "./pages/Query";
import Advocacy from "./pages/Advocacy";
import Privacy from "./pages/Privacy";
import CookieConsent from "react-cookie-consent";


function App() {

  const location = useLocation();

  useEffect(() => {
    // Send pageview with a custom path
    ReactGA.initialize('G-R6CNTSBPN0');
    ReactGA.send({ hitType: "pageview", page: location.pathname, title: location.pathname });
  }, [location]);

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Dashboard rates={false} demographics={false} />}
        />
        <Route
          exact
          path="/media-100z2c9kds9"
          element={<Dashboard rates={true} demographics={true} type="media" />}
        />
        <Route
          exact
          path="/media-100z2c9kds9/news"
          element={<News type="news" />}
        />
        <Route
          exact
          path="/media-100z2c9kds9/podcasts"
          element={<Podcasts type="podcasts" />}
        />
        <Route
          exact
          path="/media-123120"
          element={
            <Dashboard rates={false} demographics={false} type="media" />
          }
        />
        <Route exact path="/podcasts" element={<Podcasts type="podcasts" />} />
        <Route exact path="/news" element={<News type="news" />} />
        <Route exact path="/query-123120/news" element={<News type="news" />} />
        <Route
          exact
          path="/query-123120/podcasts"
          element={<Podcasts type="podcasts" />}
        />
        <Route
          exact
          path="/query-123120"
          element={<Query rates={false} demographics={false} type="query" />}
        />
        <Route exact path="/advocacy" element={<Advocacy />} />
        <Route exact path="/privacy" element={<Privacy />} />
      </Routes>
      <CookieConsent
        location="bottom"
        buttonText="I Understand"
        cookieName="KatieKicksCancerCookieConsent"
        style={{ background: "#181818",  fontSize: "13px" }}
        buttonStyle={{ color: "white", backgroundColor: "#5552C7", fontSize: "10px", rounded: "true", borderRadius: "5px", padding: "10px 20px"  }}
        expires={150} // The cookie will expire after 150 days
      >
        This site uses cookies and Google Analytics to track our website traffic.{" "}
    
      </CookieConsent>
    </>
  );
}

export default App;
