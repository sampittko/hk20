import React from "react"
import Header from "./header/Header"
import '../assets/css/main.css'
import Footer from "./Footer"

const Layout = ({ children, noHeader }) => (
  <>
    {!noHeader && <Header />}
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout
