import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../shared/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// import { match, RoutingContext } from 'react-router'
import rootReducer from '../shared/reducer'

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  
  const store = createStore(rootReducer)
  const html = renderToString(
   <Provider store={store}>
     <App />
   </Provider>
 )
 const preloadedState = store.getState()
 
  res.send(`
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <link rel="stylesheet" href="/css/main.css">
          <title>React App</title>
        </head>
        <body>
          <div id="root"><div>${html}</div></div>
          <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(preloadedState)}
          </script>
          <script src="/bundle.js" defer></script>
        </body>
      </html>
  `)
})


app.listen(process.env.PORT || 3100, () => {
  console.log('Server Is Run ');
})