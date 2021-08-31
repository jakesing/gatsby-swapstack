import Layout from "../components/layout"
/* This example requires Tailwind CSS v2.0+ */

import React from "react"
import FAQ from "../components/plug-and-play/faq"
import Header from "../components/plug-and-play/header"
import Features from "../components/plug-and-play/features"
import CTA from "../components/plug-and-play/cta"
import Seo from "../components/seo"

export default function Writers() {
  return (
    <Layout>
      <Seo title={`Plug & Play | Swapstack`} />

      <Header />
      <Features />
      <FAQ />
      <CTA />
    </Layout>
  )
}
