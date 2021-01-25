import React from "react";

/**
 * Creates a LargePageTitle.
 *
 * It displays a large title text fitting the whole screen with.
 * @param {Object} props
 */
function LargePageTitle(props) {
  return (
    <div className="pt-8">
      <div className="max-w-screen-xl mx-auto py-12 px-8 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-2xl lg:text-3xl leading-9 font-extrabold tracking-tight text-gray-600 sm:leading-10 text-center mr-auto ml-auto">
          {props.title}
        </h2>
      </div>
    </div>
  );
}

export default LargePageTitle;
