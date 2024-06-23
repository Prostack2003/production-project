import React, { FC } from 'react';
import './AppLink.scss';
import { classNames } from '../../lib/classNames/className';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}


interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames('AppLink', {}, [className, theme])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;
