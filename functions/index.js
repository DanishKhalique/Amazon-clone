// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require("stripe")('sk_test_51HQx8cBjhgJebzVl8mfMjY7fR6iRW2yVoEojCAAdEiWe1SBx1Sxb5ZieucSDH3dZ8dmkG7NPsth9pESQpolKnbip00gMXnlOXX');

// -API

// - APP CONFIG
const app = express();

// -MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json());

// -API ROUTE
app.get('/', (request, response) => response.status(200).send('HELLO WORLD'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request recieved BOOM >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' , total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of currency (cents)
        currency: "inr",
    });

    // OK - CREATED
    response.status(201).send({
        clientSecret : paymentIntent.client_secret
    })
})

// -LISTEN COMMAND
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-405b1/us-central1/api
// http://localhost:5001/clone-405b1/us-central1/api