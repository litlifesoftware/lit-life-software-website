import React from "react";
import Background from "../../assets/img/lit-life-logo-gradient-background-soft-brush-widescreen-2-1920x1080.png";

function HomePageHero() {
  return (
    <>
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        data-aos="fade-down"
        style={{
          minHeight: "100vh",
        }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${Background})`,
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-25 bg-black"
          ></span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "120px", transform: "translateZ(0)" }}
        >
          {/* <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg> */}
        </div>
      </div>
    </>
  );
}

export default HomePageHero;
