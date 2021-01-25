import React from 'react'

export default function VideoBackgroundSection(props) {
  return (
    <>
      <iframe
        title={props.title}
        style={{

          height: "100vh",
          width: "100%",
        }}
        src={`https://www.youtube.com/embed/${props.youtube_id}?controls=0&loop=1&autoplay=1&mute=1`}>
      </iframe>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style={{ height: "150px", transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 110"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-200 fill-current"
            points="2560 0 2560 110 0 110"
          ></polygon>
        </svg>
      </div>
    </>
  )
}
