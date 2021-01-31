import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DataContainer from "../components/DataContainer";
import NavBar from '../components/Nav-bar';

export const Profile = () => {
    return(
        <div>
        <Container className="mb-5">
            <Row className="align-items-center profile-header mb-5 text-center text-md-left">
                    <DataContainer />
            </Row>
        </Container>
        </div>
    );
};

export default Profile;
