import React from "react"
import Header from "./header/Header"
import '../assets/css/main.css'
import Footer from "./Footer"
import Spinner from "./Spinner"

const Layout = ({ children, loading }) => (
  <>
    <Header />
    <main className="p-5">{loading ? children : <Spinner />}</main>
    <Footer />
  </>
)

export default Layout
