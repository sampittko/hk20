import React, { useEffect, useState } from 'react';
import { firestore } from 'firebase';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import moment from 'moment'
import firebase from 'gatsby-plugin-firebase'

import gatsbyConfig from '../../gatsby-config'
import UISwitcher from '../components/UISwitcher';

const EmployeePage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (!firebase.app()) {
      const firebaseConfig = gatsbyConfig.plugins.filter(
        plugin => plugin.resolve !== `gatsby-plugin-firebase`
      )
      firebase.initializeApp(firebaseConfig.options)
    }
    console.log(firebase.app())
      firestore()
        .collection(`users`)
        .doc(`jTiTuEcjcgQwSnGFK8HU8mufXbU2`)
        .collection(`events`)
        .get()
        .then(querySnapshot => {
          const userEventsIds = []
          querySnapshot.forEach(doc => {
            userEventsIds.push(doc.data().event)
          })
          const userEvents = []
          userEventsIds.forEach((userEventId, index) => {
            firestore()
              .collection(`events`)
              .doc(userEventId)
              .get()
              .then(doc => {
                userEvents.push(doc.data())

                if (index === userEventsIds.length - 1) {
                  setEvents(userEvents)
                }
              })
          })
        })
  }, [])

  return (
    <Layout className="relative h-screen w-screen" employee>
      <SEO title="Employee" />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-red-900">
            Latest Updates
          </h1>
        </div>
      </div>
      <div className="h-full w-full">
        <div className="absolute bg-white top-100 z-0 w-full lef-0 rounded max-h-select overflow-y-auto">
          {events.map((event, i) => (
            <div key={i} className="flex flex-col w-full px-6 pt-5">
              <span className="pl-16 pb-2 text-xs">
                <span className="underline">Patrik Koscelanský</span> added the following event to
                their calendar
              </span>
              <div className="w-full bg-red-100 rounded-full">
                <div className="flex w-full items-center p-2 pl-2 relative">
                  <div className="w-6 flex flex-col items-center">
                    <div className="ml-10 flex relative w-5 h-5 bg-red-500 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full " />
                  </div>
                  <div className="ml-6 w-full items-center flex">
                    <div className="mx-2">
                      {event.title}
                      <div className="text-xs truncate w-full normal-case font-normal -mt-1 text-gray-500">
                        {event.description}
                      </div>
                    </div>
                    <div className="pl-16">
                      <span>
                        From:{" "}
                        {moment(event.start.toDate().toString()).format(
                          `DD/MM/YYYY`
                        )}
                      </span>
                      <span className="pl-8">
                        To:{" "}
                        {moment(event.end.toDate().toString()).format(
                          `DD/MM/YYYY`
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <iframe
        allow="microphone;"
        width="350"
        height="734"
        className="absolute bottom-0 right-0 border-l-2 border-gray-800"
        src="https://console.dialogflow.com/api-client/demo/embedded/49008b7a-8a8a-4b35-9b5a-692e89b1135a"
      />
      <UISwitcher activeUI="employee" />
    </Layout>
  )
};

export default EmployeePage;