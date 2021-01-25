import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import openBlankLink from "../../util/window_navigation_service";

/**
 *
 */
export default function DeviceMockupHero(props) {
  return (
    <>
      <section
        className="relative py-20 flex h-screen content-center items-center justify-center"
        style={{
          backgroundImage: `url(${props.backgroundImageURL})`,
        }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-25 bg-black"
        ></span>
        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div
              className="w-full md:w-6/12 ml-auto mr-auto px-4"
              data-aos="fade-left"
            >
              <img
                alt="..."
                className="max-w-full"
                src={props.mockupImageURL}
              />
            </div>

            <div
              className="w-full md:w-6/12 ml-auto mr-auto px-4"
              data-aos="fade-right"
            >
              <div className="md:pr-12 py-4">
                <div class="sm:text-center lg:text-left">
                  <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
                    Visualize your entire
                    <span class="text-orange-400"> life</span>
                  </h2>
                  <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Memorize your achievements and make every month count.
                  </p>
                  <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div class="rounded-md shadow cursor-pointer">
                      <p
                        onClick={() =>
                          openBlankLink(
                            "https://play.google.com/store/apps/details?id=com.litlifesoftware.remaining_lifetime"
                          )
                        }
                        class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-full text-gray-900 hover:text-white bg-white hover:bg-gray-800 focus:outline-none focus:border-gray-600 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                      >
                        Get on Google Play
                        {
                          <FontAwesomeIcon
                            className="ml-2"
                            icon={faGooglePlay}
                          />
                        }
                      </p>
                    </div>
                  </div>

                  <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <a href="https://github.com/litlifesoftware/remaining_lifetime/releases/download/v1.0.0/app-arm64-v8a-release.apk">
                      <div class="rounded-md shadow cursor-pointer">
                        <p class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-full text-gray-900 hover:text-white bg-blue-200 hover:bg-blue-800 focus:outline-none focus:border-gray-600 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                          Download APK
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="relative pt-16 pb-32 flex h-screen content-center items-center justify-center bg-white"
        data-aos="fade-down"
      >
        <div className="absolute top-0 w-full h-full bg-center bg-cover"
        >


          <div class="max-w-screen-xl mx-auto py-12 px-8 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">


           
          </div>


        </div>


      </div> */}
    </>
  );
}
