import React from "react";
import openBlankLink from "../../util/window_navigation_service";

export default function GooglePlayCTA(props) {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(45deg, #C4C5F0 0%, #A7C8D9 100%)",
        }}
      >
        <div className="max-w-screen-xl mx-auto py-12 px-8 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10">
            Want to try out{" "}
            {
              <span className="text-gray-800">
                {props.appTitle ?? "my apps"}
              </span>
            }
            {" ?"}
            <br />
            <span className="text-purple-700">
              Download {props.appTitle ? "" : "them"} now on Google Play.
            </span>
          </h2>
          <div className="py-4">
            <button
              onClick={() => openBlankLink(`${props.url}`)}
              className="bg-purple-600 font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-white text-white hover:text-gray-800 transition duration-500 ease-in-out"
            >
              Open on Google Play
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
