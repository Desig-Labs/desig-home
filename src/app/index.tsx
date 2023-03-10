import { Navigate, Route, Routes } from 'react-router-dom'

import { Col, Row } from 'antd'
import Footer from './footer'
import Header from './header'
import Home from './home'

export default function App() {
  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Header />
      </Col>
      <Col span={24}>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Col>
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  )
}
