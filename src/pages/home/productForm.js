import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardBody, CardTitle, Row, Col, Button } from 'reactstrap'
import * as ProductAction from './../../store/actions/product'
import AutoCompleteInput from '../../components/AutoCompleteInput'
function ProductForm() {
  const dispatch = useDispatch()
  const [selectedProduct, setSelectedProduct] = React.useState(null)
  const products = useSelector((state) => state.product.products)
  return (
    <Card className="mt-3 mb-5" style={{ minHeight: 200 }}>
      <CardTitle className="p-3">
        <Row>
          <Col md="6">
            <AutoCompleteInput
              onChange={(e) => {
                dispatch(ProductAction.getByKeyword(e.target.value))
              }}
              options={products}
              value={selectedProduct}
              onSelect={(value) => {
                setSelectedProduct(value)
              }}
            />
          </Col>
          <Col md="4">
            {selectedProduct && (
              <div className="d-flex justify-content-end align-items-center mr-3">
                <img
                  src={selectedProduct?.image}
                  alt={selectedProduct?.name}
                  style={{
                    width: 50,
                    height: 50,
                    objectFit: 'contain',
                    marginRight: 20,
                  }}
                />
                <p>
                  {selectedProduct?.name} ({selectedProduct?.stock})
                </p>
              </div>
            )}
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
