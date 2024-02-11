import './App.css';
import MessageClient from "./components/client";
import Login from "./components/login";

// App.js

import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<MessageClient />} />
                <Route path="/" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}




export default App;
