/* This example requires Tailwind CSS v2.0+ */
import {
  UserGroupIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
} from "@heroicons/react/solid"
import { Link } from "gatsby"
import React from "react"
const supportLinks = [
  {
    name: "Readers on all topics",
    description:
      "With hundreds of writers covering topics like business to parenting and everything in between, you'll find the perfect audience for your brand.",
    icon: UserGroupIcon,
  },
  {
    name: "Engaged Readers",
    description:
      "Doom scrolling? You can do better. Newsletter readers spend minutes with content, vs. seconds.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Simple Pricing",
    description:
      "Writers determine their own pricing, and Swapstack charges 10% + Stripe fees on top of that.",
    icon: CreditCardIcon,
  },
]

export default function Brands() {
  return (
    <div className="bg-white" id="brands">
      {/* Header */}
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1479660095429-2cf4e1360472?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80"
            alt=""
          />
          <div
            className="absolute inset-0 bg-gray-700 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Brands
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            <b>Drive efficient business results.</b>
            <br></br>Sponsor newsletters who speak to the perfect audience for
            your brand.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-8 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map(link => (
            <div
              key={link.name}
              className="flex flex-col bg-white rounded-2xl shadow-xl"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {link.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 text-center lg:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">
              Ready to reach your{" "}
              <span className="text-indigo-600">perfect</span> audience?
            </span>
            <span className="mt-4 text-2xl block font-normal">
              Start working with top writers today.
            </span>
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="https://app.swapstack.co/login?key=signup"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Join Swapstack
              </Link>
            </div>
            <div className="ml-3 inline-flex">
              <Link
                to="/brands"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
