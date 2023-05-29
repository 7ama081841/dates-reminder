import React from "react";
import { Col, Row } from "react-bootstrap";

const Butoons = ({ detete , sow }) => {
    return (
        <Row className="justify-content-center my-2">
            <Col sm="8" className="d-flex justify-content-between">
                <button onClick={detete} className="btn-style">
                    مسح الكل
                </button>
                <button onClick={sow} className="btn-style">
                    عرض
                </button>
            </Col>
        </Row>
    );
};

export default Butoons;
