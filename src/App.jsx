import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";
import ReactGA from "react-ga4";
import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import News from "./pages/News";
import Podcasts from "./pages/Podcasts";
import Privacy from "./pages/Privacy";
import Memoir from "./pages/Memoir";
import Speaking from "./pages/Speaking";
import Resources from "./pages/Resources";
import {
  developmentBanner,
  podcastBanner,
  podcasts,
  resources,
  resourcesBanner,
  tikTokVideos,
  videoBanner,
} from "./utils/Data";
import Videos from "./pages/Videos";
import Development from "./pages/Development";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Send pageview with a custom path
    ReactGA.initialize("G-R6CNTSBPN0");
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
      title: location.pathname,
    });
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
          path="/podcasts"
          element={
            <Resources
              banner={podcastBanner}
              header={"Podcasts"}
              list={podcasts}
            />
          }
        />
        <Route exact path="/news" element={<News type="news" />} />
        <Route exact path="/memoir" element={<Memoir type="memior" />} />
        <Route exact path="/speaking" element={<Speaking />} />
        <Route
          exact
          path="/resources"
          element={
            <Resources
              banner={resourcesBanner}
              header={"Resources / Foundations"}
              list={resources}
            />
          }
        />
        <Route
          exact
          path="/videos"
          element={<Videos banner={videoBanner} header={"Videos"} />}
        />
        <Route
          exact
          path="/development"
          element={
            <Development
              banner={developmentBanner}
              header={"Currently Deployed"}
            />
          }
        />
        <Route exact path="/privacy" element={<Privacy />} />
      </Routes>
      {/* <CookieConsent
        location="bottom"
        buttonText="I Understand"
        cookieName="KatieKicksCancerCookieConsent"
        style={{ background: "#181818",  fontSize: "13px" }}
        buttonStyle={{ color: "white", backgroundColor: "#5552C7", fontSize: "10px", rounded: "true", borderRadius: "5px", padding: "10px 20px"  }}
        expires={150} // The cookie will expire after 150 days
      >
        This site uses cookies. <a href="/privacy" style={{ color: "gray",  fontSize: "13px" }} className="text-blue" target="_blank">Privacy Policy</a> for details.{" "}
    
      </CookieConsent> */}
    </>
  );
}

export default App;
