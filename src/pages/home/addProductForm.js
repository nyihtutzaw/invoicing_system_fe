import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import * as ProductAction from './../../store/actions/product'
import AutoCompleteInput from '../../components/AutoCompleteInput'
function AddProductForm({ onAdd, selectedProduct, setSelectedProduct }) {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products)
  return (
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
        <Button
          color="primary"
          disabled={!selectedProduct || selectedProduct.stock === 0}
          onClick={() => onAdd(selectedProduct)}
        >
          Add
        </Button>
      </Col>
    </Row>
  )
}

export default AddProductForm
