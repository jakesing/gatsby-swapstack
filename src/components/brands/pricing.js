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
              Simple, transparent Pricing
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Swapstack is free for creators, and simple & transparent for
              brands.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-28 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex lg:justify-center text-center">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <div>Writers</div>
                <h3 className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                  Free for writers
                </h3>
              </div>
              <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <div>Brands</div>
                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                  <span>10% + Stripe Fees</span>
                  <span className="ml-3 text-base font-medium text-gray-500">
                    (approximately 3%)
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-12 w-1/2 mx-auto">
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
  )
}
