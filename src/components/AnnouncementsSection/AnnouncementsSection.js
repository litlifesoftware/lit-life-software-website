import React from "react";
import PlaceholderPoster from "../../assets/img/History_Of_Me_Upcoming.png";
export default function Announcements() {
  return (
    <>
      <section className="py-12 bg-gray-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap place-items-center">
            <div
              className="w-full md:w-2/3 px-4 text-center"
              data-aos="fade-up"
            >
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <h6 className="text-3xl font-semibold">Current projects</h6>
                  <p className="mt-2 mb-4 px-8 text-gray-600 text-xl">
                    'History of me' will enable you to keep your own personal
                    diary right on your phone. So stay tuned for more updates.
                    It will launch around the end of this year.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="w-full md:w-1/3 md:-ml-12 text-center"
              data-aos="fade-up"
            >
              <img
                src={PlaceholderPoster}
                alt=""
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
