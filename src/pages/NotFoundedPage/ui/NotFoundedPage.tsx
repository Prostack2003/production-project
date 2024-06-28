import React from 'react';
import './NotFoundedPage.scss';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../../shared/lib/classNames/className';

interface NotFoundedPageProps {
    className?: string;

}

export const NotFoundedPage = ({ className }: NotFoundedPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames('not__founded-page', {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};
