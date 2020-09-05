import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import LoginForm from "../components/pages/index/LoginForm";

const IndexPage = () => (
  <Layout noHeader>
    <SEO title="Login" />
    <LoginForm />
  </Layout>
)

export default IndexPage
