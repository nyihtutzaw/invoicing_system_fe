import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { NotificationContainer } from 'react-notifications'
import { Provider } from 'react-redux'
import store from './store'
import SideBar from './components/sidebar/SideBar'
import Content from './components/content/Content'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App wrapper">
          <SideBar />
          <Content />
        </div>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invoices" element={<h1>Invoices</h1>} />
          <Route path="/graph" element={<h1>Graph</h1>} />
        </Routes> */}
      </BrowserRouter>
      <NotificationContainer />
    </Provider>
  )
}
export default App
