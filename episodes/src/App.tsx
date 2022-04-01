import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Main from "./components/Main/Main";
import {useState, useEffect} from "react";

function App() {

    return (
        <div className="App">
            <Header title={'Киновтопку'}/>
            <Main />
        </div>
    );
}

export default App;
