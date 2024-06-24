import React from 'react';
import './LangSwitcher.scss'
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "../Button/Button";
import {classNames} from "../../lib/classNames/className";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }
    return (
        <>
            <Button theme={ThemeButton.CLEAR} className={classNames('lang-switcher', {}, [className])} onClick={toggle}>
                {t('Язык')}
            </Button>
        </>
    )
};
