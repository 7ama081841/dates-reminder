import React from "react";
import { Col, Row } from "react-bootstrap";
import data from "../data";

const DatesList = (props) => {
    return (
        <Row className="justify-content-center">
            <Col sm="8" className="">
                <div className="rectangle px-4">
                    {/* img and text */}
                    {props.data.length ? (
                        props.data.map((items) => (
                            <div
                                key={items.id}
                                className="d-flex border-bottom border-1 align-items-center "
                            >
                                <img
                                    className="img-size my-1 me-1"
                                    src={items.img}
                                    alt="g"
                                />
                                <div className="px-4">
                                    <p className="fs-3 d-inline ">
                                        {" "}
                                        {items.name}{" "}
                                    </p>
                                    <p className="fs-4">{items.date}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1 className=" p-5 text-center">ليس لديك مواعيد</h1>
                    )}
                </div>
            </Col>
        </Row>
    );
};

export default DatesList;
