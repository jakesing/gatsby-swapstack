import { SearchIcon, SparklesIcon } from "@heroicons/react/outline"
import React from "react"
import BrandGallery from "../../images/brandgallery.png"
import Arielle from "../../images/arielle.png"
import Dashboard from "../../images/dashboard.png"
import tipjar1 from "../../images/tipjar1.png"
import tipjar2 from "../../images/tipjar2.png"

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
                  Let your supporters, support you (for free)!{" "}
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Having a Tip Jar on your newsletter, twitter profile or
                  website makes is easy & seamless for your supporters to show
                  their love.{" "}
                </p>{" "}
                <ul className="mt-4 text-lg text-gray-500 list-decimal ml-8">
                  <li>Login to your Swapstack account</li>
                  <li>Head to your Tip Jar and copy your Tip Link</li>
                  <li>
                    Paste the Tip Link in your newsletter, profile, webpage
                  </li>
                  <li>Watch the support roll in!</li>
                </ul>
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
                    {/* Alex Cervasio, Founder of The Daily Coach, has earned over
                    $1,200 by running multiple Plug & Play deals on his
                    newsletter. */}
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={tipjar1}
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
                  A new, genuine way to monetize!{" "}
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Your readers & followers love your work. Many of them are
                  willing to support your journey through tips. Plus, you’ll
                  deepen your relationship with them!
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
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:ml-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={tipjar2}
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
