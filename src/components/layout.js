import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "../styles/index.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container" id="content">
        {children}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
