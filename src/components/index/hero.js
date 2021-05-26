import { Link } from "gatsby"
import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Hero() {
  return (
    <div className="relative bg-gray-50 overflow-hidden pt-16 pb-10 sm:pt-0 sm:mt-0">
      <div
        className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <div className="relative h-full max-w-7xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </div>
      </div>

      <div className="relative pt-2 pb-4 lg:pt-36 lg:pb-24 md:py-16">
        <main className="mt-2 mx-auto max-w-7xl px-4 sm:mt-2">
          <div className="text-center">
            <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-6xl">
              <span className="block inline">The Premier Newsletter</span>{" "}
              <br></br>
              <span className="block text-indigo-600 inline">
                Advertising Marketplace
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Connecting brands to newsletter audiences for relevant
              sponsorships.
            </p>
            <div className="flex-col mt-8 mb-4 justify-center sm:flex sm:flex-row sm:justify-center">
              <div className="rounded-md w-9/12 m-auto sm:mx-6 sm:w-3/12">
                <button
                  onClick={() => scrollTo("#brands")}
                  className="shadow w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Brands
                </button>
                <div className="my-2 italic text-gray-500 text-md">
                  Reach your customers
                </div>
              </div>
              <div className="rounded-md w-9/12 m-auto sm:mx-6 sm:w-3/12">
                <button
                  onClick={() => scrollTo("#writers")}
                  className="sm:bg-blue shadow w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Newsletters
                </button>
                <div className="my-2 italic text-gray-500 text-md">
                  Start monetizing
                </div>
              </div>
            </div>
            <div className="my-5 max-w-xs md:max-w-2xl md:mx-auto"></div>
          </div>
        </main>
      </div>
    </div>
  )
}
