import React from 'react'
import { Card, CardBody, CardTitle, Row, Col, Button } from 'reactstrap'

function ProductForm() {
  return (
    <Card className="mt-3 mb-5" style={{ minHeight: 200 }}>
      <CardTitle className="p-3">
        <Row>
          <Col md="10">
            <select className="form-control">
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </Col>
          <Col md="2">
            <Button color="primary">Add</Button>
          </Col>
        </Row>
      </CardTitle>
      <CardBody>
        <table className="table">
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </table>
      </CardBody>
    </Card>
  )
}

export default ProductForm
