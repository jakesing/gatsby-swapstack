import React from "react"

export default function Header() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Put your brand in front of the internet's most engaged audiences.
          </p>
          <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-500">
            Newsletter readers spend minutes, not seconds, reading sponsorship
            copy. Swapstack connects you with relevant newsletters so you can
            reach their high engagement, high specificity audiences.
          </p>{" "}
          <div className="mt-6">
            <a
              href="https://app.swapstack.co/login?key=signup"
              className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up for Swapstack
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
