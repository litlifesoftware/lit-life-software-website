import React from "react";

export default function AppFeaturesSection(props) {
  return (
    <>
      <div className="bg-gray-200">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-wrap">
            {props.features.map((feature, key) => {
              return (
                <div
                  className="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
                  data-aos="fade-down"
                  key={key}
                >
                  <div className="px-6">
                    <div className="pt-6 text-left">
                      <h5 className="text-2xl font-semibold text-gray-700">
                        {feature.headline}
                      </h5>
                      <p className="mt-1 text-base text-gray-600 font-normal">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
