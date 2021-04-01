import React from "react";

export default function HistoryOfMeScreenshotSection(props) {
  return (
    <div>
      <section
        className="py-8 relative flex content-center items-center justify-center"
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
                alt="History Of Me Screenshot"
                className="max-w-full"
                src={props.screenshotPath}
              />
            </div>

            <div
              className="w-full md:w-6/12 ml-auto mr-auto px-4"
              data-aos="fade-right"
            >
              <p className="text-lg font-bold tracking-tight text-gray-500">
                {`${props.title}`}
              </p>
              <p className="text-2xl font-bold tracking-tight text-gray-600">
                {`${props.description}`}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
