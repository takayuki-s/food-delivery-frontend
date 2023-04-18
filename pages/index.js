import { Col, Input, InputGroup, InputGroupText, Row } from 'reactstrap'
import RestaurantList from '../components/RestaurantsList'

export default function Home() {
  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <div className="search">
            <InputGroup>
              <InputGroupText>探す</InputGroupText>
              <Input placeholder="レストラン名を入力してください" />
            </InputGroup>
          </div>
          <RestaurantList />
        </Col>
      </Row>
      <style jsx>{`
        .search {
          margin: 20px;
          width: 500px;
        }
      `}</style>
    </div>
  )
}
