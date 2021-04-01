import React from "react";
import HomePageHero from "../components/Hero/HomePageHero";
import AppPromo from "../components/AppPromoSection/AppPromoSection";
import IridFilmClubPoster from "../assets/img/irid-film-club-logo-grey-background-1-918x918.png";
import RemainingLifetimePoster from "../assets/img/remaining-lifetime-icon-1-696x696.png";
import HistoryOfMePoster from "../assets/img/History_Of_Me_Website_Icon.png";
import PlaceholderPoster from "../assets/img/placeholder-image-1-904x904.png";
import AboutCards from "../components/AboutCardsSection/AboutCardsSection";
import Announcements from "../components/AnnouncementsSection/AnnouncementsSection";
import SocialMediaCTA from "../components/CallToAction/SocialMediaCTA";
import GooglePlayCTA from "../components/CallToAction/GooglePlayCTA";
import LitUIKitSection from "../components/LitUIKitSection/LitUIKitSection";

export default function HomePage() {
  return (
    <>
      <main>
        <HomePageHero />

        <AboutCards />

        <AppPromo
          title={"Irid Film Club"}
          img={IridFilmClubPoster}
          description={
            "Enjoy a new engaging movie watching experience and create your member card today."
          }
          tags={["Internet Connection Required", "Social Media", "Public"]}
          link="/irid-film-club"
        />

        <AppPromo
          title={"Remaining Lifetime"}
          img={RemainingLifetimePoster}
          description={
            "Visualize your entire lifetime and set achievements for each month of your life."
          }
          tags={["Offline", "Motivating", "Personal"]}
          link="/remaining-lifetime"
        />

        <AppPromo
          title={"History Of Me"}
          img={HistoryOfMePoster}
          description={"Your own personal diary."}
          tags={["Offline", "Diary", "Public Beta", "Coming this year"]}
          link="/history-of-me"
        />

        <LitUIKitSection />

        <Announcements />

        <GooglePlayCTA url="https://play.google.com/store/apps/dev?id=6358212632242842077" />

        <SocialMediaCTA
          url="https://www.instagram.com/litlifesw/"
          name="Instagram"
        />
      </main>
    </>
  );
}
