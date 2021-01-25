import React from "react";

function VideoBackgroundFallback(props) {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(90deg, #A7C8D9 0%, #C4C5F0 75%)",
        }}
      >
        <div className="max-w-screen-xl mx-auto py-12 px-8 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10 pt-4">
            Here should be a video.
            <br />
            <span className="text-purple-700">
              Agree our privacy policy to view this video.
            </span>
          </h2>
          <div className="py-4">
            <button
              onClick={props.onAgree}
              className="bg-purple-600 font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-white text-white hover:text-gray-800 transition duration-500 ease-in-out "
            >
              Agree.
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoBackgroundFallback;
