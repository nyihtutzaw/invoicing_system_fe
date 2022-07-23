import React from 'react'
import { Container } from 'reactstrap'
import { Routes, Route } from 'react-router-dom'
import { routes } from '../../routes'

const Content = () => (
  <Container fluid className="content">
    <Routes>
      {routes.map((route, key) => (
        <Route
          path={route.path}
          element={route.component}
          key={`route-${key}`}
          name={route.name}
        />
      ))}
    </Routes>
  </Container>
)

export default Content
