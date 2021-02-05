import React from "react";
import { Link } from "react-router-dom";

export default function JobCard() {
  return (
    <div>
      <div className="container mt-12 mx-auto p-4 md:p-0 ">
        <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto ">
          <div
            className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative rounded"
            style={{
              backgroundImage:
                "url('https://images7.alphacoders.com/347/347549.jpg')",
            }}
          >
            <div className="absolute text-xl">
              <i className="fa fa-heart text-white hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
            </div>
          </div>
          <div className="bg-white w-full md:w-2/3">
            <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
              <div className="bg-white lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center rounded">
                <div className="w-full lg:w-2/5 lg:border-right lg:border-solid text-center md:text-left ">
                  <h3 className="font-semibold">Assistant Professor</h3>
                  <p className="mb-0 mt-3 text-grey-dark text-sm italic">
                    <div class="ml-4 mb-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                      Computer Science
                    </div>
                    <div class="ml-4 mb-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                      Electronic
                    </div>
                    <div class="ml-4 mb-1 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">
                      School of basic science
                    </div>
                  </p>
                  <hr className="w-1/6 md:ml-0 mt-4  border lg:hidden" />
                </div>

                <div className="w-full lg:w-3/5 lg:px-3">
                  <p className="text-md font-semibold mt-4 lg:mt-0 text-justify md:text-left text-sm">
                    The Cathedral of Vasily the Blessed (Russian: Собор Василия
                    Блаженного, Sobor Vasiliya Blazhennogo), commonly known as
                    Saint Basil's Cathedral, is a church in Red Square i
                    and Astrakhan.
                  </p>
                </div>

                <div className="rounded-md shadow mt-4">
                  <Link
                    to="#jobs"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Apply @ IIITU
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}