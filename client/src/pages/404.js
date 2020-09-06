import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not Found" />
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-red-900">
          404
        </h1>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
