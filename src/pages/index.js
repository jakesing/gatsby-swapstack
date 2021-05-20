import React from "react"
import Layout from "../components/layout"
import Hero from "../components/index/hero"
import Logos from "../components/index/logos"
import Brands from "../components/index/brands"
import Writers from "../components/index/writers"
import Press from "../components/index/press"

export default function Index() {
  return (
    <div>
      <Layout>
        <Hero />
        <Logos />
        <Brands />
        <Writers />
        <Press />
      </Layout>
    </div>
  )
}
