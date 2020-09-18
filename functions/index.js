const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51HSRP6AmUocyF4hfXrga5rNGiwI5nYAQMa35VQUoenjwvh1CR5kjcHOxVTGgT7su4hfa2821yfNaYmf9oKdDf0v000FYjSbyOd'
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes

app.get('/', (request, response) => response.status(200).send('hello world'));
app.get('/tarang', (request, response) =>
  response.status(200).send('whats app tarang?')
);

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log('Payment request received', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
    description: 'this is the descruption',
    shipping: {
      name: 'Jenny Rosen',
      address: {
        line1: '510 Townsend St',
        postal_code: '98140',
        city: 'San Francisco',
        state: 'CA',
        country: 'US',
      },
    },
  });

  // OK - created
  response.status(201).send({ clientSecret: paymentIntent.client_secret });
});

// - Listen command
exports.api = functions.https.onRequest(app);
