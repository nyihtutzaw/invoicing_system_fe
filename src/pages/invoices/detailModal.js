import React from 'react'
import dayjs from 'dayjs'
import { Button, Modal, ModalBody } from 'reactstrap'
import Table from '../../components/Table'

export default function DetailModal({ modalOpen, onToggle, data }) {
  const headers = ['No', 'Image', 'Product Name', 'Price', 'Amount', 'Total']
  return (
    <Modal isOpen={modalOpen} style={{ top: '25%' }} size="lg" backdrop={true}>
      <ModalBody className="mt-4">
        <div className="d-flex justify-content-between">
          <h5>Product List</h5>
          <Button onClick={onToggle} size="sm">
            Close
          </Button>
        </div>

        <Table
          headers={headers.map((header) => (
            <th className={'headers'} key={`thead-${Math.random()}`}>
              {header}
            </th>
          ))}
          rows={
            <>
              {data.products?.map((product, index) => (
                <tr key={`invoice-product-list-${index}`}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={product.image}
                      alt={`of ${product.name}`}
                      style={{ width: 50, height: 50, objectFit: 'contain' }}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.invoice_product.price}</td>
                  <td>{product.invoice_product.amount}</td>
                  <td>
                    {product.invoice_product.price *
                      product.invoice_product.amount}
                  </td>
                </tr>
              ))}
            </>
          }
        />
      </ModalBody>
    </Modal>
  )
}
