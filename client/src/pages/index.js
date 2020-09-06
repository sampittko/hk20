import React, { useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import LoginForm from "../components/pages/index/LoginForm";
import { navigate } from "gatsby";
import UIChooser from "../components/pages/index/UIChooser";

const IndexPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleRedirect = (target) => {
    if (target === 'back-office') {
      navigate("/back-office/dashboard/")
    } 
    else {
      navigate("/employee/")
    }
  }

  return (
    <Layout noHeader>
      <SEO title="Login" />
      {loggedIn ? (
        <UIChooser onChoose={(target) => handleRedirect(target)} />
      ) : (
        <LoginForm onLogin={() => setLoggedIn(true)} />
      )}
    </Layout>
  )}

export default IndexPage
