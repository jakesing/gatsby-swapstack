import React from "react"
export default function CTA() {
  return (
    <div className="bg-indigo-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Reach your perfect audience.</span>
          <span className="block">Sign up for Swapstack today.</span>
        </h2>
        <a
          href="https://app.swapstack.co/login?key=signup"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
        >
          Sign up for free
        </a>
      </div>
    </div>
  )
}
