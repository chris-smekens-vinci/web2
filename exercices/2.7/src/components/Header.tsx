import './Header.css';

interface HeaderProps {
    title: string;
};

const Header = (props: HeaderProps) => {
    const { title } = props;
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
};

export default Header;
