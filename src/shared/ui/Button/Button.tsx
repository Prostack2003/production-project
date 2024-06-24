import React, { ButtonHTMLAttributes, FC } from 'react';
import './Button.scss';
import { classNames } from "../../lib/classNames/className";

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton,
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button className={classNames('Button', {}, [className, theme])} {...otherProps}>
            {children}
        </button>
    );
};
