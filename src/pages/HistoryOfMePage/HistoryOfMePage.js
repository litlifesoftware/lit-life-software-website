import React, { useState } from "react";
import GooglePlayCTA from "../../components/CallToAction/GooglePlayCTA";
import MockUpImage from "../../assets/img/History_Of_Me_Smartphone_Mockup.png";
import LogoImage from "../../assets/img/History_Of_Me_Window_Logo.png";
import LauncherIcon from "../../assets/img/History_of_Me_Launcher_Icon_Static.png";
import ScreenshotOne from "../../assets/img/History_Of_Me_Screenshot_1.png";
import ScreenshotTwo from "../../assets/img/History_Of_Me_Screenshot_2.png";
import ScreenshotThree from "../../assets/img/History_Of_Me_Screenshot_4.png";
import SocialMediaCTA from "../../components/CallToAction/SocialMediaCTA";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import GooglePlayComingSoonModal from "../../components/Modals/GooglePlayComingSoonModal";
import HistoryOfMeScreenshotSection from "./components/HistoryOfMeScreenshotSection";
import openBlankLink from "../../util/window_navigation_service";
import ExternalLinks from "../../assets/data/external_links.json";

export default function HistoryOfMePage() {
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);
  function toggleShowComingSoonModal() {
    setShowComingSoonModal(!showComingSoonModal);
  }

  return (
    <>
      {/* <DeviceMockupHero
        mockupImageURL={RLAMockup}
        backgroundImageURL={Background}
      /> */}

      <GooglePlayComingSoonModal
        show={showComingSoonModal}
        onClose={toggleShowComingSoonModal}
      />

      <section
        className="pt-8 relative flex content-center items-center justify-center"
        style={{
          background: "linear-gradient(180deg, #EBEEF5 0%, #FFFFFF 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div
              className="w-full md:w-6/12 ml-auto mr-auto px-4"
              data-aos="fade-left"
            >
              <img
                alt="History Of Me Logo"
                className="max-w-full"
                src={LogoImage}
              />
            </div>
            <div
              className="w-full md:w-6/12 ml-auto mr-auto px-4"
              data-aos="fade-left"
            >
              <img
                alt="History Of Me Screenshot"
                className="max-w-full"
                src={MockUpImage}
              />
            </div>
          </div>
        </div>
      </section>

      <HistoryOfMeScreenshotSection
        screenshotPath={ScreenshotOne}
        title="Organize"
        description="Browse through your memories"
      />

      <HistoryOfMeScreenshotSection
        screenshotPath={ScreenshotTwo}
        title="Relive"
        description="Read your diary entires"
      />

      <HistoryOfMeScreenshotSection
        screenshotPath={ScreenshotThree}
        title="Personalize"
        description="Customize your bookmark"
      />

      <div
        className="py-10"
        style={{
          background: "linear-gradient(180deg, #C9C7D4 0%, #EDF1F5 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div
              className="w-full md:w-4/12 ml-auto mr-auto px-4"
              data-aos="fade-right"
            >
              <img
                alt="History of Me Launcher Icon"
                className="max-w-full"
                src={LauncherIcon}
              />
            </div>
            <div
              className="w-full md:w-5/12 ml-auto mr-auto px-4"
              data-aos="fade-left"
            >
              <div className="md:pr-12 py-4">
                <p className="text-lg font-bold tracking-tight text-gray-200">
                  Get your
                </p>
                <p className="text-2xl font-bold tracking-tight text-white">
                  Your own personal diary
                </p>

                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <button
                          onClick={() =>
                            openBlankLink(
                              ExternalLinks.history_of_me_github_repository
                            )
                          }
                          className="bg-yellow-100 font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-gray-600 text-gray-700 hover:text-white transition duration-500 ease-in-out"
                        >
                          {"Source Code "}
                          <FontAwesomeIcon icon={faGithub} />
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <button
                          onClick={toggleShowComingSoonModal}
                          className="bg-gray-300 font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-white text-gray-500 hover:text-gray-800 transition duration-500 ease-in-out"
                        >
                          {"Coming Soon "}
                          <FontAwesomeIcon icon={faGooglePlay} />
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GooglePlayCTA
        appTitle="History of Me"
        //url="https://play.google.com/store/apps/details?id=com.litlifesoftware.remaining_lifetime"
      />
    </>
  );
}
