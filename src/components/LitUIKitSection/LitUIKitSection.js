import React from "react";

import PlaceholderPoster from "../../assets/img/Lit_UI_Kit_Logo_512px-01.png";
import openBlankLink from "../../util/window_navigation_service";

function LitUIKitSection() {
  return (
    <section className="py-12 bg-pink-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap place-items-center">
          <div className="w-full md:w-1/2 text-center" data-aos="fade-up">
            <div
              className="cursor-pointer m-4"
              onClick={() =>
                openBlankLink("https://github.com/litlifesoftware/lit_ui_kit")
              }
            >
              <img
                src={PlaceholderPoster}
                alt=""
                className="rounded-lg bg-gray-100 shadow-2xl hover:bg-gray-800 transition duration-500 ease-in-out"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 text-center" data-aos="fade-up">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <h6 className="text-3xl font-semibold">LitUIKit</h6>
                <p className="mt-2 mb-4 px-8 text-gray-600 text-xl">
                  LitUIKit enables you to create unique user interfaces in less
                  time. Built with Flutter this UI Kit complements the default
                  Material Widgets shipped with the framework.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LitUIKitSection;
