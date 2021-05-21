import React from "react"

const faqs = [
  {
    id: 1,
    question: "Is Swapstack right for me?",
    answer:
      "Swapstack is built for newsletter writers who are ready to monetize via sponsorships. Any writer can join Swapstack, but most brands are looking for newsletters with at least 1,000 subscribers.",
  },
  {
    id: 2,
    question: "Should I do sponsorships or subscriptions?",
    answer:
      "There's no hard and fast rule. Typically the decision is a function of your content, subscriber count, and lifestyle preferences. We've written a full guide to this here.",
  },
  {
    id: 3,
    question: "How much does Swapstack cost?",
    answer: `Swapstack is free for writers! I repeat: FREE for writers. We charge a 10% platform fee and Stripe's payment processing fees to the brands, so you keep 100% of what you charge.`,
  },
  {
    id: 4,
    question: "What do I need to get started?",
    answer:
      "The two requirements for getting started with Swapstack are a newsletter and a Stripe account. We use the Stripe account to transfer money from brands directly to you. You can create your Stripe account during the Swapstack onboarding experience.",
  },
]

export default function FAQ() {
  return (
    <div className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:max-w-2xl lg:mx-auto lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-gray-400">
            If you have any other questions, please email us at
            hello@swapstack.co
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
            {faqs.map(faq => (
              <div key={faq.id}>
                <dt className="font-semibold text-white">{faq.question}</dt>
                <dd className="mt-3 text-gray-400">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
