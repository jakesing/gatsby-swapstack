import React from "react"
import MorningBrew from "../../images/morning-brew.png"
import FelixGray from "../../images/felixgray.png"
import OnDeck from "../../images/ondeck.svg"
import SecureFrame from "../../images/secureframe.png"

/* This example requires Tailwind CSS v2.0+ */
export default function Logos() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12 filter grayscale"
              src={MorningBrew}
              alt="Tuple"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12 filter grayscale"
              src={FelixGray}
              alt="Mirage"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12 filter grayscale"
              src={OnDeck}
              alt="StaticKit"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              className="h-12 filter grayscale"
              src={SecureFrame}
              alt="Transistor"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
