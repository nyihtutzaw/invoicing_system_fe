import React from 'react'
import { Button, Card, CardBody, CardTitle } from 'reactstrap'
import AddProductForm from './addProductForm'
function ProductForm() {
  const [products, setProducts] = React.useState([])
  const [selectedProduct, setSelectedProduct] = React.useState(null)

  const onAddProduct = React.useCallback(() => {
    const selected = products.find(
      (product) => product.id === selectedProduct.id
    )
    if (selected) {
      if (selectedProduct.stock > selected.qty) {
        let updatedProducts = products.map((product) => {
          if (product.id === selected.id) {
            product.qty++
            return product
          }
          return product
        })
        setProducts(updatedProducts)
      }
    } else {
      setProducts((prevArray) => [
        ...prevArray,
        { ...selectedProduct, ...{ qty: 1 } },
      ])
    }
  }, [products, selectedProduct])

  const getTotal = React.useCallback(() => {
    let total = 0
    products.forEach((product) => {
      total += product.price * product.qty
    })
    return total
  }, [products])

  const onRemoveProduct = React.useCallback(
    (id) => {
      const selected = products.find((product) => product.id === id)
      let updatedProducts = products.map((product) => {
        if (product.id === selected.id) {
          product.qty--
          return product
        }
        return product
      })
      setProducts(updatedProducts)
    },
    [products]
  )

  return (
    <Card className="mt-3 mb-5" style={{ minHeight: 200 }}>
      <CardTitle className="p-3">
        <AddProductForm
          onAdd={onAddProduct}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
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
            <th></th>
          </tr>
          <tbody>
            {products.map((product, index) => (
              <tr key={`product-selected-${index}`}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: 50, height: 50, objectFit: 'contain' }}
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.qty}</td>
                <td>{product.price * product.qty}</td>
                <td>
                  <Button
                    onClick={() => onRemoveProduct(product.id)}
                    color="danger"
                  >
                    -
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5}> Total : </td>
              <td>{getTotal()}</td>
            </tr>
          </tfoot>
        </table>
      </CardBody>
    </Card>
  )
}

export default ProductForm
