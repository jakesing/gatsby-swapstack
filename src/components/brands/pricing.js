import React from "react"
import { CheckCircleIcon } from "@heroicons/react/solid"
const includedFeatures = [
  "Unlimited connections to writers",
  "Support from our team",
  "Easy payments",
]

export default function Pricing() {
  return (
    <div className="bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              Straightforward Pricing
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Our goal is to be the most creator friendly platform out there,
              and so we're offering the service for free to writers. We charge
              the brands only, on a per-transaction basis.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Pay as you go
                </h3>
                <p className="mt-6 text-base text-gray-500">
                  Signing up is free! Writers will invoice you (via Swapstack)
                  once you've agreed to work together, and we add our fee on top
                  of their requested amount.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                      What's included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                    {includedFeatures.map(feature => (
                      <li
                        key={feature}
                        className="flex items-start lg:col-span-1"
                      >
                        <div className="flex-shrink-0">
                          <CheckCircleIcon
                            className="h-5 w-5 text-green-400"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                  <span>10% + Stripe Fees</span>
                  <span className="ml-3 text-xl font-medium text-gray-500">
                    (approximately 3%)
                  </span>
                </div>

                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="https://app.swapstack.co/login?key=signup"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                    >
                      Get Started for Free
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}