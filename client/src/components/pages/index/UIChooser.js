import React from 'react';
import { navigate } from 'gatsby';

const UIChooser = () => {
  return (
    <div>
      <section className="text-red-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-red-900">
              Back-Office Control Center
            </h1>
            <button onClick={() => { navigate('/back-office/dashboard/') }} className="flex-shrink-0 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg mt-10 sm:mt-0">
              See Demo
            </button>
          </div>
        </div>
      </section>
      <section className="text-red-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-2/3 flex flex-col-reverse sm:flex-row sm:items-center items-start mx-auto">
            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-red-900">
              Visma Assistant
            </h1>
            <button onClick={() => { navigate('/employee/') }} className="flex-shrink-0 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg mt-10 sm:mt-0">
              See Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
};

export default UIChooser;