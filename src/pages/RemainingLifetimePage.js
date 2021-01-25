import React from "react";
import GooglePlayCTA from "../components/CallToAction/GooglePlayCTA";
import DeviceMockupHero from "../components/Hero/DeviceMockupHero";
import RLAMockup from "../assets/img/Remaining_Lifetime_Smartphone_Mockup_Screenshot_Clean-01.png";
import Background from "../assets/img/Remaining_Lifetime_Promo_Poster-01.png";
import SocialMediaCTA from "../components/CallToAction/SocialMediaCTA";

export default function RemainingLifetimePage() {
  return (
    <>
      <DeviceMockupHero
        mockupImageURL={RLAMockup}
        backgroundImageURL={Background}
      />

      <GooglePlayCTA
        appTitle="Remaining Lifetime"
        url="https://play.google.com/store/apps/details?id=com.litlifesoftware.remaining_lifetime"
      />

      <SocialMediaCTA
        url="https://www.instagram.com/litlifesw/"
        name="Instagram"
      />
    </>
  );
}
