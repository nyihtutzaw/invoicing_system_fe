import React from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  FormGroup,
  CardFooter,
  Button,
} from 'reactstrap'
import { useForm } from 'react-hook-form'
function InfoForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardTitle className="p-3 bg-primary text-white">
          <h6>Invoice Information</h6>
        </CardTitle>
        <CardBody className="py-2">
          <Row>
            <Col md="6">
              <FormGroup>
                <label>Customer Name</label>
                <input
                  type="text"
                  {...register('customer_name', { required: true })}
                  className="form-control"
                />
                {errors.customer_name && (
                  <span className="text-danger">This field is required</span>
                )}
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <label>Sale Person Name</label>
                <input
                  type="text"
                  {...register('sale_person', { required: true })}
                  className="form-control"
                />
                {errors.sale_person && (
                  <span className="text-danger">This field is required</span>
                )}
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <label>Note</label>
                <textarea {...register('note')} className="form-control" />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
        <CardFooter className="pt-3 text-center">
          <Button
            type="button"
            color="warning"
            className="mr-3"
            onClick={() => reset()}
          >
            Reset
          </Button>
          <Button color="primary">Submit</Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default InfoForm
