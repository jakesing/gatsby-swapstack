import React from "react"
import { Fragment } from "react"
import Header from "./header"
import Footer from "./footer"
import favicon from "../images/favicon.ico"
import Helmet from "react-helmet"

export default function Layout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}
