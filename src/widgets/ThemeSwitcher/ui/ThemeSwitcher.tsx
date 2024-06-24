import React from 'react';
import './ThemeSwitcher.scss';
import {classNames} from "shared/lib/classNames/className";
import {useTheme} from "app/providers/ThemeProvider";
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import {Button, ThemeButton} from "../../../shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <Button theme={ThemeButton.CLEAR} className={classNames('header__button-switch', {}, [className])} onClick={toggleTheme}>
                {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
            </Button>
        </>
    );
};