import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO'
import { useLocalStorage } from 'beautiful-react-hooks'

const DashboardPage = () => {
  const [intents, setIntents] = useLocalStorage("intents", []);

  return (
    <Layout>
      <SEO title="Dashboard" />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-red-900">
            Dashboard
          </h1>
        </div>
      </div>
      <main>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center justify-center">
            <div className="p-4 sm:w-1/4 w-1/2 border-l-2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-red-700">
                85%
              </h2>
              <p className="leading-relaxed">Answered Questions</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2 border-l-2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-red-700">
                {intents.length}
              </h2>
              <p className="leading-relaxed">Available Answers</p>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-5">
                Add Answer
              </button>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2 border-l-2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-red-700">
                5
              </h2>
              <p className="leading-relaxed">Unanswered Questions</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2 border-l-2 border-r-2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-red-700">
                35
              </h2>
              <p className="leading-relaxed">Scheduled Events</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
};

export default DashboardPage;