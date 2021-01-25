import React from 'react'
import { Link } from 'react-router-dom';

function AppPromo(props) {
  return (
    <>
      <section className="relative py-20">


        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4"
              data-aos="fade-right"
            >

              {props.link ?
                (<Link
                  to={props.link}
                >
                  <img
                    alt="..."
                    className="max-w-full rounded-lg shadow-lg"
                    src={props.img}
                  />
                </Link>) : (
                  <img
                    alt="..."
                    className="max-w-full rounded-lg shadow-lg"
                    src={props.img}
                  />
                )
              }
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4"
              data-aos="fade-left"
            >
              <div className="md:pr-12 py-4">

                <h3 className="text-3xl font-semibold  text-gray-800">
                  {props.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  {props.description}
                </p>
                <ul className="list-none mt-6">
                  {
                    props.tags.map((tag, key) => {
                      return (
                        <li className="py-2" key={key}>
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">

                              </span>
                            </div>
                            <div>
                              <h4 className="text-gray-600">
                                {tag}
                              </h4>
                            </div>
                          </div>
                        </li>
                      )
                    })
                  }


                  {/* <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">Amazing page examples</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">Dynamic components</h4>
                      </div>
                    </div>
                  </li> */}

                </ul>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default AppPromo;
