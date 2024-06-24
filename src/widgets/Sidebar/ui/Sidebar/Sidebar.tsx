import React, {useState} from 'react';
import {classNames} from "../../../../shared/lib/classNames/className";
import './Sidebar.scss'
import {ThemeSwitcher} from "../../../ThemeSwitcher";
import {LangSwitcher} from "../../../../shared/ui/LangSwitcher/LangSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames('Sidebar', {collapsed}, [className])}>
            <button onClick={onToggle}>Toggle</button>
            <div className='sidebar__switchers'>
                <ThemeSwitcher />
                <LangSwitcher className='lang'/>
            </div>
        </div>
    );
};