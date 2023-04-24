import React from 'react';
import Footer from '../Page/Shared/Footer/Footer';
import Header from '../Page/Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../Page/Shared/RightNav/RightNav';
import LeftNav from '../Page/Shared/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div>
        <Header></Header>
        <Container>
            <Row>
                <Col lg={9}>
                    <Outlet></Outlet>
                    </Col>
                <Col lg={3}><RightNav></RightNav></Col>
            </Row>
        </Container>
        <Footer></Footer>
    </div>
    );
};

export default NewsLayout;