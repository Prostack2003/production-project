import React from 'react';
import {Counter} from "./Counter/Counter";
import '../index.scss'
import {Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Counter />} />
            </Routes>
        </div>
    );
};

export default App;