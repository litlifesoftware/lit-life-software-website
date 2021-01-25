import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./routes";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./util/ScrollToTop";
import CookieConsentModal from "./components/CookieConsentModal/CookieConsentModal";
import SocialMediaLinks from "./social_media_links";

/**
 * Creates a App.
 *
 * This component will display the website pages depending
 * on the current route.
 */
function App() {
  const [agreedPrivacy, setAgreedPrivacy] = useState(
    JSON.parse(window.localStorage.getItem("agreedPrivacy")) ?? false
  );

  const [showCookieConsent, setShowCookieConsent] = useState(
    JSON.parse(window.localStorage.getItem("showCookieConsent")) ?? true
  );

  /**
   * Sets the state once the privacy policy has been agreed to.
   */
  function agreePrivacy() {
    setAgreedPrivacy(true);
    setShowCookieConsent(false);
  }

  /**
   * Sets the state once the privacy policy has been rejected.
   */
  function rejectPrivacy() {
    setAgreedPrivacy(false);
    setShowCookieConsent(false);
  }

  // Initialize the AOS package.
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    });
    AOS.refresh();
  });

  // Create a hook on the agreed privacy state in order to update the local storage.
  useEffect(() => {
    window.localStorage.setItem("agreedPrivacy", agreedPrivacy);
  }, [agreedPrivacy]);

  // Create a hook on the show cookie consent state in order to update the local storage.
  useEffect(() => {
    window.localStorage.setItem("showCookieConsent", showCookieConsent);
  }, [showCookieConsent]);

  return (
    <Router basename="/#/">
      <div className="font-montserrat">
        <ScrollToTop />
        <CookieConsentModal
          show={showCookieConsent}
          onDisagree={rejectPrivacy}
          onAgree={agreePrivacy}
        />
        <Navbar routes={Routes} />
        <Switch>
          {Routes.map((route, key) => (
            <Route
              exact
              path={route.path}
              component={route.component}
              key={key}
            />
          ))}
          {/* Defaults to the first route available if an unavailable route has been requested */}
          <Route path={Routes[0].path} component={Routes[0].component} />
        </Switch>
        <Footer routes={Routes} socialMediaLinks={SocialMediaLinks} />
      </div>
    </Router>
  );
}

export default App;
