import React from 'react';
import {classNames} from "shared/lib/classNames/className";
import './NavBar.scss'
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "../../ThemeSwitcher";

interface NavBarProps {
    className?: string;

}

export const NavBar = ({className}: NavBarProps) => {
    return (
        <div className={classNames('header__navbar', {}, [className])}>
            <ThemeSwitcher/>
            <div className='header__links'>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className='header__main-link'>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О Сайте</AppLink>
            </div>
        </div>
    );
};
