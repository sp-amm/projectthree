//Reference for this code is "Adding Authentication in React using Auth0" - Youtube tutorial - by Auth0 - accessed 24 Jan 2021 - <https://www.youtube.com/watch?v=1rgeO_EbSGg>
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import { Highlight } from "../components";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
    const { user } = useAuth0();
    return(
        <Container className="mb-5">
            <Row className="align-items-center profile-header mb-5 text-center text-md-left">
                <Col md={2}>
                    <img
                        src={user.picture}
                        alt="Profile"
                        className="rounded-circle img-fluid profile-picture md-3 mb-md-0"
                    />
                </Col>
                <Col md>
                    <h2>{user.name}</h2>
                    <p className="lead text-muted">{user.email}</p>
                </Col>
            </Row>
            {/* <Row>
                <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
            </Row> */}
        </Container>
    );
};

export default Profile;
