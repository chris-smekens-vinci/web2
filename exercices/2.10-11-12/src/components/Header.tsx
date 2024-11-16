//import React from "react";
import '../css/Header.css';

interface HeaderProps {
    title: string;
    children : React.ReactNode;
};

const Header = (props: HeaderProps) => {
    const { title, children } = props;
    return (
        <header className='header'>
            <h1 className='header-title'>{title}</h1>
            <div>{children}</div>
        </header>
    );
};

export default Header;
