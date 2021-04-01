import React from "react";
import LitLifeLogoDark from "../../assets/img/lit-life-software-dark-1.png";
import openBlankLink from "../../util/window_navigation_service";
import FooterRoute from "./FooterRoute";
import FooterSocialMediaLink from "./FooterSocialMediaLink";
import ExternalLinks from "../../assets/data/external_links.json";

/**
 * Creates a Footer.
 *
 * It will list all available pages of this website and additional social media links
 * alongside some legal notes.
 * @param {Object} props
 */
export default function Footer(props) {
  return (
    <>
      <div className="bg-pink-300">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-wrap">
            <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src={LitLifeLogoDark}
                  className="max-w-full"
                  style={{ maxWidth: "80px" }}
                />
                <div className="pt-6 text-left">
                  <h5 className="text-lg font-semibold text-white">
                    LitLifeSoftware
                  </h5>
                  <button
                    onClick={() =>
                      openBlankLink(
                        `${ExternalLinks.website_github_repository}`
                      )
                    }
                    className="bg-gray-300 font-bold text-xs font-mono rounded-full py-2 px-4 my-2 shadow-lg tracking-wider hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition duration-500 ease-in-out"
                  >
                    {"<view-source>"}
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <div className="pt-6 text-left">
                  <h5 className="text-xl font-semibold text-white">Explore</h5>
                  <ul className="pt-2">
                    {props.routes.map((route, key) => {
                      if (route.showOnNavbar) {
                        return <FooterRoute key={key} route={route} />;
                      } else {
                        return null;
                      }
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <div className="pt-6 text-left">
                  <h5 className="text-xl font-semibold text-white">Privacy</h5>
                  <ul className="pt-2">
                    {props.routes.map((route, key) => {
                      if (route.showOnFooter) {
                        return <FooterRoute key={key} route={route} />;
                      } else {
                        return null;
                      }
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap">
            <div className="w-full md:w-4/12 lg:mb-0 mb-12 px-4 text-center">
              <p className="mt-1 text-sm text-gray-100 font-normal">
                Google Play and the Google Play Store are trademarks of Google
                LLC.
              </p>
            </div>
            <div className="w-full md:w-8/12 lg:mb-0 mb-12 px-4 text-right">
              <div className="mt-6">
                {props.socialMediaLinks.map((link, key) => (
                  <FooterSocialMediaLink
                    key={key}
                    url={link.url}
                    icon={link.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
