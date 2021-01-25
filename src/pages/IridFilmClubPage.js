import React, { useEffect, useState } from "react";
import AppMockupSection from "../components/AppMockupSection/AppMockupSection";
import IFCMockup from "../assets/img/irid-film-club-mockup-poster-2-1080x1080.png";
import AppFeaturesSection from "../components/AppFeaturesSection/AppFeaturesSection";
import Features from "../assets/data/irid_film_club_app_features.json";
import VideoBackgroundSection from "../components/BackgroundVideo/VideoBackgroundFallback";
import GooglePlayCTA from "../components/CallToAction/GooglePlayCTA";
import VideoBackgroundFallback from "../components/BackgroundVideo/VideoBackground";
import SocialMediaCTA from "../components/CallToAction/SocialMediaCTA";
export default function IridFilmClubPage() {
  const [agreedPrivacy, setAgreedPrivacy] = useState(
    JSON.parse(window.localStorage.getItem("agreedPrivacy")) ?? false
  );

  function agreePrivacy() {
    setAgreedPrivacy(true);
  }

  useEffect(() => {
    window.localStorage.setItem("agreedPrivacy", agreedPrivacy);
  }, [agreedPrivacy]);

  return (
    <>
      {agreedPrivacy ? (
        <VideoBackgroundSection
          title="Irid Film Club Video"
          youtube_id="GGbh5rEWppc"
        />
      ) : (
        <VideoBackgroundFallback onAgree={agreePrivacy} />
      )}
      <AppFeaturesSection features={Features} />
      <AppMockupSection
        title="Join the
          Irid Film Club"
        description="Enjoy a new engaging movie watching experience and create your member card today."
        img={IFCMockup}
      />
      <GooglePlayCTA
        appTitle="Irid Film Club"
        url="https://play.google.com/store/apps/details?id=com.litlifesoftware.irid_film_club"
      />

      <SocialMediaCTA
        url="https://www.instagram.com/litlifesw/"
        name="Instagram"
      />
    </>
  );
}
