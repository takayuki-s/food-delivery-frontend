import { Card, CardBody, CardImg, CardTitle, Col, Row } from 'reactstrap'
import Link from 'next/link'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const query = gql`
  {
    restaurants {
      id
      name
      description
      image {
        url
      }
    }
  }
`

const RestaurantList = () => {
  const { loading, error, data } = useQuery(query)

  if (data.restaurants && data.restaurants.length) {
    return (
      <Row>
        <Col xs="6" sm="4">
          <Card style={{ margin: '0 0.5rem 20px 0.5rem' }}>
            <CardImg src="" top={true} style={{ height: 250 }} />
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
        <style jsx>
          {`
            a {
              color: white;
            }
            a:link {
              text-decoration: none;
              color: white;
            }
            a:hover {
              color: white;
            }
            .card-columns {
              column-count: 3;
            }
          `}
        </style>
      </Row>
    )
  } else {
    return <h1>レストランが見つかりませんでした。</h1>
  }
}

export default RestaurantList
