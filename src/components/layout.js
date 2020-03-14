import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "../styles/index.scss"

import TitleContainer from "./TitleContainer"
import { Col, Row } from 'reactstrap'

const Layout = ({ children, headline }) => {
  return (
    <>
      <Header />
      <div className="container" id="content">
      <TitleContainer headline={headline}/>
        <Row>
          <Col md={8}>
            {children}
          </Col>
          <Col md={4}>
            <div
              style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)'}}
            >
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headline: PropTypes.string.isRequired,
}

export default Layout
