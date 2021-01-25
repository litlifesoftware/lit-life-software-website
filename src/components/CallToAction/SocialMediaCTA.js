import React from "react";
import openBlankLink from "../../util/window_navigation_service";

/**
 * Creates a SocialMediaCTA.
 *
 * It displays a a text alongside a button to link to a social media profile.
 * @param {Object} props
 */
export default function SocialMediaCTA(props) {
  return (
    <>
      <div
        className="py-4"
        style={{
          background: "linear-gradient(90deg, #A4AAEB 0%, #E9AAEB 100%)",
        }}
      >
        <div className="max-w-screen-xl mx-auto py-12 px-8 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10">
            Follow Me!
            <br />
            <span className="text-gray-200 font-medium">
              View my latest posts on {props.name}.
            </span>
          </h2>
          <div className="py-4">
            <button
              onClick={() => openBlankLink(`${props.url}`)}
              className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-blue-300 hover:text-white transition duration-500 ease-in-out "
            >
              Open in {props.name}
            </button>
          </div>
        </div>
        {/* 
        <div className="container mx-auto px-8 text-left">
          <h2 className="text-4xl font-bold mb-2 text-white">
            Follow me!
          </h2>
          <h3 className="text-2xl mb-8 text-gray-200">
            View my latest posts on {props.name}.
          </h3>
          <button
            onClick={() => openBlankLink(`${props.url}`)}
            className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-blue-300 hover:text-white transition duration-500 ease-in-out ">
            View on {props.name}
          </button>
        </div> */}
      </div>
    </>
  );
}
