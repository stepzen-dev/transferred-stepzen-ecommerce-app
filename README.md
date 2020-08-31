# Set up eCommerce Sample App

## Initial set up

1. Go to the folder where you downloaded the sample app.

2. Populate your local `.env` file:

  - create an `.env.local` file
  - populate two settings in `.env.local`:
    - `REACT_APP_GRAPHQL_API_KEY={API_KEY}`, where `{API_KEY}` is the key provided for your sandbox service in the Quickstart Guide
    - `REACT_APP_GRAPHQL_ENDPOINT=https://{ACCOUNT}.stepzen.net/stepzen101/ecommerce/__graphql`, where `{ACCOUNT}` is the account name of your sandbox account as provided to you in the Quickstart Guide

3. Install dependencies: 
`npm install`

4. Start the application:
`npm start`

Your browser should open at http://localhost:3000/
