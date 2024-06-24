import React from 'react';
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/className";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {NavBar} from "widgets/NavBar";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    const {theme} = useTheme();
    return (
        <header className={classNames('app', {hovered: true, selected: true}, [theme])}>
            <NavBar/>
            <div className='content-page'>
                <Sidebar />
                <AppRouter/>
            </div>
        </header>
    );
};

export default App;