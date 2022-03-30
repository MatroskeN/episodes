import React, {ReactElement, FC} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

interface Props {
    title: String
}

const Header: FC<Props> = ({title}): ReactElement => {
    return (
        <Container className={'p-3'}>
            <Navbar expand="lg" variant="dark" bg="dark" fixed={'top'}>
                <Container>
                    <Navbar.Brand href="#">
                        <img
                            alt=""
                            src="/logo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        {title}
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Главная</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;