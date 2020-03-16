import React from "react"
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  Button,
  CardTitle,
} from "reactstrap"

const Search = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          New letter
        </CardTitle>
        <Form className="text-center">
          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="Your email address..."
            />
          </FormGroup>
          <Button color="success" className="text-uppercase" type="submit">
            Subscribe
          </Button>
        </Form>
      </CardBody>
    </Card>
  )
}

export default Search
