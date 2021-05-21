import Layout from "../components/layout"
/* This example requires Tailwind CSS v2.0+ */

import React from "react"
import FAQ from "../components/writers/faq"
import Header from "../components/writers/header"
import Features from "../components/writers/features"
import CTA from "../components/writers/cta"
import Seo from "../components/seo"

export default function Writers() {
  return (
    <Layout>
      <Seo title={`Writers | Swapstack`} />

      <Header />
      <Features />
      <FAQ />
      <CTA />
    </Layout>
  )
}
