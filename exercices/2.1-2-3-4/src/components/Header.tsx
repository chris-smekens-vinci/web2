import "./Header.css";

interface HeaderProps {
    urlLogo: string,
    children: React.ReactNode;
};

const Header = (props: HeaderProps) => {
    return (
        <header className="header">
            <img src={props.urlLogo} alt="logo" className="logo"/>
            <h1>{props.children}</h1>
        </header>
    );
};

export default Header;
