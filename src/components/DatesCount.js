import React from 'react'
import { Col, Row } from 'react-bootstrap';
// import data from '../data';

const DatesCount = ( props) => {
    return (
        <Row className="justify-content-center">
            <Col sm="8" className="">
                لديك {props.data.length} مواعيد
            </Col>
        </Row>
    );
}

export default DatesCount
