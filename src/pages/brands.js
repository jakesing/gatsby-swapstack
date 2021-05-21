import React from "react"
import Header from "../components/brands/header"
import Features from "../components/brands/features"
import Pricing from "../components/brands/pricing"
import CTA from "../components/brands/cta"
import Layout from "../components/layout"
import Seo from "../components/seo"

/* This example requires Tailwind CSS v2.0+ */
export default function Brands() {
  return (
    <Layout>
      <Seo title={`Brands | Swapstack`} />
      <Header />
      <Features />
      <Pricing />
      <CTA />
    </Layout>
  )
}
