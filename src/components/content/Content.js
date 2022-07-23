import React from 'react'
import { Container } from 'reactstrap'
import { Routes, Route } from 'react-router-dom'

import Home from '../../pages/home'
import Invoices from '../../pages/invoices'
import Graphs from '../../pages/graph'

const Content = () => (
  <Container fluid className="content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/graph" element={<Graphs />} />
    </Routes>
  </Container>
)

export default Content
