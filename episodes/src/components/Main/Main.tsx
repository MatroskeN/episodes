import React from "react";
import {Container} from "react-bootstrap";
import Wrapper from "./Wrapper/Wrapper";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SingleCard from "./SingleCard/SingleCard";

function Main() {
    return (
        <BrowserRouter>
            <Container className={'p-3'}>
                {/*<Wrapper/>*/}
                <Routes>
                    <Route path='/' element={<Wrapper/>}/>
                    <Route path='/singleCard' element={<SingleCard />}/>
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default Main;