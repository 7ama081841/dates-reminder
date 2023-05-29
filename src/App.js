import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import Butoons from "./components/Butoons";
import data from "./data" 

import React , {useEffect, useState} from "react"

function App() {

    const [ state , setState ] = useState([])

    const handleDelete = () => {
        setState([])
    }

    const handleShow = () => {
        setState(data);
    }
  

    return (
        <div className="font color-body">
            <Container className="py-5">
                {/* head */}
                <DatesCount data={state} m={"dj"} f={"dssdf"} />
                {/* body */}
                <DatesList data={state} />
                {/* buttons */}
                <Butoons detete={handleDelete} sow={handleShow} />
            </Container>
        </div>
    );
}

export default App;
