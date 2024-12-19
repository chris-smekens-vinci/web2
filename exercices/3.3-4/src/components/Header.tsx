import React from "react";
import '../styles/Header.css';

interface HeaderProps {
    title: string;
    children : React.ReactNode;
    theme: string;
    toggleTheme: () => void;
};

const Header = (props: HeaderProps) => {
    const { title, children, theme, toggleTheme } = props;
    return (
        <header className={`header ${theme}`}>
            <h1 className='header-title'>{title}</h1>
            <button onClick={toggleTheme} className='theme-toggle'>
                Switch to {theme === 'light' ? 'dark' : 'light'} theme
            </button>
            <div>{children}</div>
        </header>
    );
};

export default Header;
