import React, { useState } from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO'
import { useLocalStorage } from 'beautiful-react-hooks'
import UISwitcher from '../../components/UISwitcher';
import { firestore } from 'firebase'
import moment from 'moment'

const DashboardPage = () => {
  const [dialog, setDialog] = useState(false)
  const [event, setEvent] = useState(``)

  const addEvent = () => {
    if (dialog) {
      firestore()
        .collection(`events`)
        .doc()
        .set({
          title: event,
          description: `Lorem ipsum`,
          start: new Date(moment().add("1", "months").unix() * 1000),
          end: new Date(moment().add("3", "months").unix() * 1000),
        })
    }

    setDialog(!dialog);
  }

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
                15
              </h2>
              <p className="leading-relaxed">Available Answers</p>
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
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-5"
                onClick={addEvent}
              >
                Add Event
              </button>
            </div>
          </div>
        </div>
      </main>
      <UISwitcher activeUI="back-office" />
      {dialog && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-300 sm:mx-0 sm:h-10 sm:w-10"></div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Add Company Event
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm leading-5 text-gray-500">
                        Event name:
                        <input
                          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                          type="text"
                          placeholder="Lipsum Event"
                          value={event}
                          onChange={e => setEvent(e.target.value)}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    onClick={addEvent}
                  >
                    Add
                  </button>
                </span>
                <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setDialog(false)}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  >
                    Cancel
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
};

export default DashboardPage;