import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function GooglePlayComingSoonModal(props) {
  return (
    <div className={props.show ? "visible" : "hidden"}>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-screen">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
          &#8203;
          <div
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 sm:mx-0 sm:h-10 sm:w-10">
                  <FontAwesomeIcon icon={faInfo} className="text-gray-600" />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    Coming Soon to Google Play
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm leading-5 text-gray-500">
                      <span>{`${props.appTitle}`}</span> is still under
                      developent. The final release will be available on Google
                      Play or alternatively as an APK download on this website.
                      Stay tuned for further updates.
                      <span>{`${props.appTitle}`} </span> can already be tested
                      out by building from source. Visit our GitHub repository
                      to download the latest source code.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <span className="flex w-full full sm:ml-3 sm:w-auto">
                <button
                  type="button"
                  onClick={props.onClose}
                  className="inline-flex justify-center w-full rounded-full border border-transparent px-4 py-2 bg-gray-400 text-base leading-6 font-medium text-white shadow-sm hover:bg-gray-500 focus:outline-none focus:border-green-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                  Alright
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
