import { SearchIcon, SparklesIcon } from "@heroicons/react/outline"
import React from "react"
import BrandGallery from "../../images/brandgallery.png"
import Arielle from "../../images/arielle.png"
import Dashboard from "../../images/dashboard.png"

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
                  Meet hundreds of brands
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Publishing high quality content on a consistent schedule is
                  hard enough. The last thing you want is to have to fill a
                  sponsorship pipeline.
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  {" "}
                  That's where Swapstack comes in. We have over 200 brands and
                  counting, ready to connect with you.
                </p>
                <div className="mt-6">
                  <a
                    href="https://app.swapstack.co/brand-gallery"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Check out our brands
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    “Swapstack is an amazing community of newsletter creators.
                    I've learned so much about newsletter tech & have met so
                    many brands by being part of this community!"
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src={Arielle}
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">
                      Arielle Nissenblatt, Writer of Earbuds Podcast Collective
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={BrandGallery}
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
                  Run your first ad immediately
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  As a writer, Plug & Play gives you access to pre-approved
                  affiliate deals that you can place into your newsletter & get
                  paid for any conversions you drive.
                </p>
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
                src={Dashboard}
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
