import React from "react"

export default function Header() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <a
          href="https://www.producthunt.com/posts/tip-jar-by-swapstack?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tip-jar-by-swapstack"
          target="_blank"
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=328034&theme=light"
            alt="Plug & Play by Swapstack - Pre-approved affiliate deals for all newsletter creators. | Product Hunt"
            style={{ width: "250px", height: "54px" }}
            className="mt-4 mb-8 mx-auto"
          />
        </a>
        <div className="text-center">
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Collect support from your readers & followers!
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Tip Jar enables your most loyal followers to support your work
            through small financial gifts.
          </p>
          {/* button here */}{" "}
          <div className="mt-6">
            <a
              href="https://app.swapstack.co/login?key=signup"
              className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up for Swapstack to get started
            </a>
          </div>{" "}
        </div>
      </div>
    </div>
  )
}
