import React from "react";

export default function AboutCards() {
  return (
    <>
      <section className="pb-20 pt-12 bg-gray-200 text-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap">
            {/* <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Awarded Agency</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.
                  </p>
                </div>
              </div>
            </div> */}

            <div
              className="w-full md:w-12/12 px-4 text-center"
              data-aos="fade-down"
            >
              <div className="relative flex flex-col min-w-0 break-words w-full mb-8">
                <div className="px-4 py-2 flex-auto">
                  <h6 className="text-4xl font-semibold opacity-25">About</h6>
                </div>
              </div>
            </div>

            {/* <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                    Verified Company
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="container mx-auto px-4 xl:w-1/2">
          <div className="flex flex-wrap">
            <div className="w-full px-auto text-center" data-aos="fade-up">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <h6 className="text-3xl font-semibold">
                    We make mobile apps!
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    LitLifeSoftware creates open source mobile apps built on the
                    Flutter framework. Our apps can be found on Google Play or
                    you can download the APK files on our GitHub repositories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
