import React from "react"
import PropTypes from "prop-types"
import { Col, Row } from "reactstrap"

import Header from "./header"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import TitleContainer from "./TitleContainer"

import "../styles/index.scss"

const Layout = ({ children, headline }) => {
  return (
    <>
      <Header />
      <div className="container" id="content">
        <TitleContainer headline={headline} />
        <Row>
          <Col md={8}>{children}</Col>
          <Col md={4}>
            <Sidebar />
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headline: PropTypes.string.isRequired,
}

export default Layout
