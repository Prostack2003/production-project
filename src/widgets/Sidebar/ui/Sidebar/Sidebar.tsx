import React, {useState} from 'react';
import {classNames} from "../../../../shared/lib/classNames/className";
import './Sidebar.scss'
import {ThemeSwitcher} from "../../../ThemeSwitcher";

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
                {/*LangSwithce*/}
            </div>
        </div>
    );
};