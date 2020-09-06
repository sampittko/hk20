// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';

const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const { WebhookClient } = require('dialogflow-fulfillment');
const { Card, Suggestion } = require('dialogflow-fulfillment');
firebase.initializeApp();

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
    const agent = new WebhookClient({ request, response });
    console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
    console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

    function welcome(agent) {
        agent.add(`Welcome to my agent!`);
    }

    function fallback(agent) {
        agent.add(`I didn't understand`);
        agent.add(`I'm sorry, can you try again?`);
    }

    function whatEvenetsIshouldAttend(agent) {
        let date = new Date();
        let timestampNow = date.getTime();
        let timestamp30DaysFromNow = timestampNow + 2592000000;

        let dateNow = new Date(timestampNow);
        let date30DaysFromNow = new Date(timestamp30DaysFromNow);

        let eventTitles = [];

        return firebase.firestore().collection('events')
            .where('start', '<', date30DaysFromNow)
            .get().then((snapshot) => {
                snapshot.forEach((doc) => {
                    let eventTitle = doc.data().title;
                    eventTitles.push(eventTitle);
                });
                agent.add(eventTitles.toString());
                return;
            }).catch((error) => {
                console.log('Error: ' + error);
            });
    }

    function saveEventToMyCalendar(agent) {
        let name = agent.parameters.name;
        let surname = agent.parameters.surname;
        let title = agent.parameters.title;
        // title = title.charAt(0).toUpperCase() + title.slice(1);

        let promiseUser = firebase.firestore().collection('users')
            .where('name', '==', name)
            .where('surname', '==', surname)
            .get();

        let promiseEvent = firebase.firestore().collection('events')
            .where('title', '==', title)
            .get();

        return Promise.all([promiseUser, promiseEvent]).then((resolves) => {
            let uid;
            resolves[0].forEach((doc) => {
                uid = doc.data().uid;
            });

            let eventId;
            resolves[1].forEach((doc) => {
                eventId = doc.id;
            });

            return firebase.firestore().collection('users').doc(uid).collection('events').doc()
                .set({
                    event: eventId
                }).then(() => {
                    agent.add('I added this event to your list.')
                    return;
                });

        });
    }

    function whatAreMyUpcommingEvents(agent) {
        //not ideal DB design, but meh, we don't have time
        let name = agent.parameters.name;
        let surname = agent.parameters.surname;

        let uid = firebase.firestore().collection('users')
            .where('name', '==', name)
            .where('surname', '==', surname)
            .get()
            .then((snapshot) => {
                let id;
                snapshot.forEach((doc) => {
                    id = doc.id;
                });
                return id;
            }).catch((error) => {
                console.log('Error: ' + error);
            });

        let myEvents = firebase.firestore().collection('users')
            .doc(uid)
            .collection('events')
            .get()
            .then((snapshot) => {
                let myEvnts = [];
                snapshot.forEach((doc) => {
                    myEvnts.push(doc.data().event)
                });
                return myEvnts;
            }).catch((error) => {
                console.log('Error: ' + error);
            });

        let eventsToShow = [];
        myEvents.forEach((eventId) => {
            firebase.firestore().collection('events').doc(eventId).get()
                .then((doc) => {
                    if (doc.exists) {
                        let tit = doc.data().title;
                        eventsToShow.push(tit);
                    }
                    return;
                }).catch((error) => {
                    console.log('Error: ' + error);
                });
        });
        agent.add(eventsToShow);
    }

    function myOwnHandler(agent) {
        agent.add('My own handler wohooooo.');
    }

    // Run the proper function handler based on the matched Dialogflow intent name
    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    intentMap.set('Working hours filling', myOwnHandler);
    intentMap.set('Recommended events', whatEvenetsIshouldAttend);
    intentMap.set('Save event', saveEventToMyCalendar);
    agent.handleRequest(intentMap);
});



// const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//     response.send("Hello from Firebase!");
// });
