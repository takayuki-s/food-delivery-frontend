import { Card, CardBody, CardImg, CardTitle, Col, Row } from 'reactstrap'
import Link from 'next/link'

const RestaurantList = () => {
  return (
    <Row>
      <Col>
        <Card>
          <CardImg src="" />
          <CardBody>
            <CardTitle>Italian restaurant</CardTitle>
            <CardTitle>イタリアンのレストランです</CardTitle>
          </CardBody>
          <div className="card-footer">
            <Link href="/restaurants?id=test" as="test">
              <a className="btn btn-primary">もっとみる</a>
            </Link>
          </div>
        </Card>
      </Col>
    </Row>
  )
}

export default RestaurantList
