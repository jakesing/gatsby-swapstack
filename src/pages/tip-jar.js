import Layout from "../components/layout"
/* This example requires Tailwind CSS v2.0+ */

import React from "react"
import Header from "../components/tip-jar/header"
import Features from "../components/tip-jar/features"
import CTA from "../components/tip-jar/cta"

import Seo from "../components/seo"

export default function Writers() {
  return (
    <Layout>
      <Seo title={`Tip Jar | Swapstack`} />

      <Header />
      <Features />
      <CTA />
    </Layout>
  )
}
