import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { NotificationContainer } from 'react-notifications'
import { Provider } from 'react-redux'
import store from './store'
import SideBar from './components/SideBar'
import Content from './components/Content'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-loading-skeleton/dist/skeleton.css'
import './app.css'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App wrapper">
          <SideBar />
          <Content />
        </div>
      </BrowserRouter>
      <NotificationContainer />
    </Provider>
  )
}
export default App
