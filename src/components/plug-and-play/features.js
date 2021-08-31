import { SearchIcon, SparklesIcon } from "@heroicons/react/outline"
import React from "react"
import BrandGallery from "../../images/brandgallery.png"
import Arielle from "../../images/arielle.png"
import Dashboard from "../../images/dashboard.png"
import Pnp1 from "../../images/pnp1.png"
import Pnp2 from "../../images/pnp2.png"

export default function Features() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <SearchIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Always fill your ad inventory with high quality sponsors.{" "}
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Plug & Play preapproved deals ensure that you never have to
                  run a newsletter without filling all of your ad units.
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  {" "}
                  We negotiate high paying affiliate deals with a curated list
                  of brands, and pre-approve Swapstack writers to ensure you can
                  run one of these deals at any moment.
                </p>
                <div className="mt-6">
                  <a
                    href="https://app.swapstack.co/login?key=signup"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Create an account to get started
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    Alex Cervasio, Founder of The Daily Coach, has earned over
                    $1,200 by running multiple Plug & Play deals on his
                    newsletter.
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={Pnp1}
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <SparklesIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Run your first Plug & Play ad immediately
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  All deals are pre-approved, meaning you can run an ad as soon
                  as you want.
                </p>
                <ul className="mt-4 text-lg text-gray-500 list-disc">
                  <li display="list-item">Copy your personalized link. </li>
                  <li display="list-item">
                    Use some of the suggested creative.
                  </li>
                  <li display="list-item">Publish the newsletter.</li>
                  <li display="list-item">
                    Get paid for any conversions you drive!
                  </li>
                </ul>

                <div className="mt-6">
                  <a
                    href="https://app.swapstack.co/login?key=signup"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign up now. Always free.
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={Pnp2}
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
