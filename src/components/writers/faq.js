import React from "react"

/* This example requires Tailwind CSS v2.0+ */
import {
  ChartBarIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline"

const features = [
  {
    name: "For writers with 1,000 readers or more.",
    description:
      "Swapstack is built for newsletter writers who are ready to monetize via sponsorships. Any writer can join Swapstack, but most brands are looking for newsletters with at least 1,000 subscribers.",
    icon: ChartBarIcon,
  },
  {
    name: "Free for writers",
    description:
      "Swapstack is free for writers! I repeat: FREE for writers. We charge a 10% platform fee and Stripe's payment processing fees to the brands, so you keep 100% of what you charge.",
    icon: ExclamationCircleIcon,
  },
]

export default function FAQ() {
  return (
    <div className="pt-12 pb-36 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">A better way to send money.</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
          {features.map(feature => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="my-5 text-3xl leading-6 font-extrabold text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 text-lg text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
