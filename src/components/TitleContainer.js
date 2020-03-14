import React from 'react'
import PropTypes from 'prop-types'

const TitleContainer = ({ headline }) => <h1>{headline}</h1>

TitleContainer.defaultProps = {
  headline: 'Headline not'
}

TitleContainer.propTypes = {
  headline: PropTypes.string
}

export default TitleContainer
