import React from 'react';
import { classNames } from '../../../shared/lib/classNames/className';
import './PageLoader.scss';

interface PageLoaderProps {
    className?: string;

}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames('page__loader', {}, [className])}>
        <div>
            <span className="loader" />
        </div>
    </div>
);
