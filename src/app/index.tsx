import { Navigate, Route, Routes } from 'react-router-dom'

import { Col, Row } from 'antd'
import Footer from './footer'
import Header from './header'
import Home from './home'
import Policy from './policy'

export default function App() {
  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Header />
      </Col>
      <Col span={24} style={{ marginTop: 64 }}>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="policy" element={<Policy />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Col>
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  )
}
