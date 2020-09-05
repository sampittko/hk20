import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
