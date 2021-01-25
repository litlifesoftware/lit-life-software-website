import { faCookieBite } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import PrivacyPage from "../../pages/PrivacyPage";

/**
 * Creates a CookieConsentModal.
 *
 * Displays an information text advising the user to read and accept the privacy policy.
 * State whether or not the modal should be displayed using the show prop.
 * @param {Object} props
 */
function CookieConsentModal(props) {
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
                  <FontAwesomeIcon
                    icon={faCookieBite}
                    className="text-gray-600"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    Cookies and Privacy
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm leading-5 text-gray-500">
                      This website uses cookies and other data in order to
                      provide you the best expericence possible. If you agree,
                      we will save your choice and you will be able to watch
                      videos hosted on a third party provider. But you don't
                      have to. You can read our privacy policy{" "}
                      <Link to="/privacy">
                        {" "}
                        <span className="text-gray-700 font-semibold">
                          {" "}
                          here{" "}
                        </span>{" "}
                      </Link>
                      or by clicking the link on the footer of this website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                <button
                  type="button"
                  onClick={props.onAgree}
                  className="inline-flex justify-center w-full rounded-full border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                  Agree all.
                </button>
              </span>
              <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                <button
                  type="button"
                  onClick={props.onDisagree}
                  className="inline-flex justify-center w-full rounded-full border border-red-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-white focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5 hover:bg-red-300"
                >
                  Reject.
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieConsentModal;
