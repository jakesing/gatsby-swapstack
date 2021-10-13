import React from "react"
import { Fragment } from "react"
import Header from "./header"
import Footer from "./footer"
import favicon from "../images/favicon.ico"
import Helmet from "react-helmet"
import { IntercomProvider, useIntercom } from "react-use-intercom"

const INTERCOM_APP_ID = "ohlfzivf"

export default function Layout({ children }) {
  return (
    <IntercomProvider
      appId={INTERCOM_APP_ID}
      shouldInitialize
      autoBoot
      initializeDelay={0.5}
    >
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </IntercomProvider>
  )
}
