import React from "react"
import MorningBrew from "../../images/morning-brew.png"
import FelixGray from "../../images/felixgray.png"
import OnDeck from "../../images/ondeck.svg"
import SecureFrame from "../../images/SecureFrame.png"
import Cometeer from "../../images/cometeer.png"

/* This example requires Tailwind CSS v2.0+ */
export default function Logos() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12 filter grayscale"
              src={Cometeer}
              alt="Cometeer Logo"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12 filter grayscale"
              src={FelixGray}
              alt="Felix Gray Logo"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12 filter grayscale"
              src={OnDeck}
              alt="On Deck Logo"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              className="h-12 filter grayscale"
              src={SecureFrame}
              alt="SecureFrame Logo"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
