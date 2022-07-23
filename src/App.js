import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NotificationContainer } from 'react-notifications'
import { Provider } from 'react-redux'
import store from './store'
import Home from './pages/home'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invoices" element={<h1>Invoices</h1>} />
          <Route path="/graph" element={<h1>Graph</h1>} />
        </Routes>
      </BrowserRouter>
      <NotificationContainer />
    </Provider>
  )
}
export default App
