import React from 'react'

export default function AppMockupSection(
  props
) {
  return (
    <section className="relative py-20">


      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">

          <div className="w-full md:w-6/12 ml-auto mr-auto px-4"
            data-aos="fade-left"
          >
            <div className="md:pr-12 py-4">

              <h3 className="text-3xl font-semibold tracking-tighter text-customGray-100">
                {props.title}
              </h3>
              <p className="mt-4 text-lg leading-9 text-customGray-100">
                {props.description}
              </p>
            </div>
          </div>

          <div className="w-full md:w-6/12 ml-auto mr-auto px-4"
            data-aos="fade-right"
          >

            <img
              alt="..."
              className="max-w-full"
              src={props.img}
            />
          </div>


        </div>
      </div>

    </section>
  )
}
