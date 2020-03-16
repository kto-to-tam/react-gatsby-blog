import React from "react"
import { Card, CardBody, CardTitle } from "reactstrap"

const Advertisement = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase">
          Advertisement
        </CardTitle>
      </CardBody>
      <img
        className="img-fluid"
        src="https://via.placeholder.com/320x200"
        alt="Advert"
      />
    </Card>
  )
}

export default Advertisement
