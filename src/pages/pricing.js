import Layout from "../components/layout"
import React from "react"
import Pricing from "../components/brands/pricing"
import Invoice from "../images/invoice.png"
import Seo from "../components/seo"

export default function PricingPage() {
  return (
    <Layout>
      <Seo title={`Pricing | Swapstack`} />
      <Pricing />
      <div className="relative bg-gray-50 pt-16 overflow-hidden sm:pt-24 lg:pt-0">
        <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
          <div>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Sample Invoice
            </p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500"></p>
          </div>
          <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
            <img
              className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
              src={Invoice}
              alt=""
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
