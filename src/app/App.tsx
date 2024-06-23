import React from 'react';
import './styles/index.scss'
import {Link} from "react-router-dom";
import {classNames} from "../shared/lib/classNames/className";
import {useTheme} from "./providers/ThemeProvider";
import {AppRouter} from "./providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme();
    const foo = "it's time to master!"
    return (
        <div className={classNames('app', {hovered:true, selected: true}, [theme])}>
            <button onClick={toggleTheme}>Change Theme</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О Сайте</Link>
            <AppRouter />
        </div>
    );
};

export default App;