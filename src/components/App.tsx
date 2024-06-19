import React from 'react';
import {Counter} from "./Counter/Counter";
import '../index.scss'

const App = () => {
    return (
        <div className="app">
            Hello! I am App!
            <Counter />
        </div>
    );
};

export default App;