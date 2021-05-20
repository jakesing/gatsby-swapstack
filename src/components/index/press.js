import React from "react"

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
const posts = [
  {
    title: "Writers, if You’re Not on This Platform, You’re Missing Out",
    href:
      "https://medium.com/freelancers-hub/writers-if-youre-not-on-this-platform-you-re-missing-out-3119752bea45?sk=e9f7eed8923553794d147430f9341417",
    description:
      "After Medium and Substack, this could be a total game-changer.",
    date: "May 14, 2021",
    datetime: "2021-05-14",
    publisher: "Medium",
  },
  {
    title:
      "Will Newsletters Launch a Marketing Boom the Way Podcasts Once Did?",
    href: "https://builtin.com/marketing/newsletter-sponsorships",
    description: "New marketplaces connect brands with independent creators.",
    date: "Apr 27, 2021",
    datetime: "2021-04-27",
    publisher: "Built In",
  },
  {
    title:
      "As Newsletter Advertising Grows, Advertisers Opt for Quality Over Quantity",
    href:
      "https://www.adweek.com/media/as-the-newsletter-advertising-grows-advertisers-opt-for-quality-over-quantity/",
    description:
      "Advertisers’ zeal to reach newsletter audiences has benefitted publishers and creators.      ",
    date: "Apr 22, 2021",
    datetime: "2021-04-22",
    publisher: "Adweek",
  },
  {
    title: "Advertisements Emerge on Substack's 'Ad-Free' Newsletter Ecosystem",
    href:
      "https://www.businessinsider.com/advertisements-emerge-on-substacks-ad-free-newsletter-ecosystem-2021-1",
    description:
      "Swapstack, Upstart.me, and Letterwell see a future in pairing micro-newsletters with budget-savvy brands.",
    date: "Jan 22, 2021",
    datetime: "2021-01-22",
    publisher: "Business Insider",
  },
]

export default function Press() {
  return (
    <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2
            className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
            id="press"
          >
            Press
          </h2>
        </div>
        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {posts.map(post => (
            <div key={post.title}>
              <p className="text-sm text-gray-500">
                <time dateTime={post.datetime}>{post.date}</time>
              </p>
              <a href="#" className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">
                  {post.title}
                </p>
                <p className="mt-3 text-base text-gray-500">
                  {post.description}
                </p>
              </a>
              <div className="mt-3">
                <a
                  href={post.href}
                  className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  {`Read full story on ${post.publisher}`}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
