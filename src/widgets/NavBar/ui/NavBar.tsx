import React from 'react';
import { classNames } from 'shared/lib/classNames/className';
import './NavBar.scss';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavBarProps {
    className?: string;

}

export const NavBar = ({ className }: NavBarProps) => (
    <div className={classNames('header__navbar', {}, [className])}>
        <div className="header__links">
            <AppLink theme={AppLinkTheme.SECONDARY} to="/" className="header__main-link">Главная</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">О Сайте</AppLink>
        </div>
    </div>
);
