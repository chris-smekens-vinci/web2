import '../styles/Footer.css';

interface FooterProps {
    text: string;
    theme: string;
    toggleTheme: () => void;
};

const Footer = (props: FooterProps) => {
    const { text, theme } = props;
    return (
        <footer className={`footer ${theme}`}>
            <p>{text}</p>
        </footer>
    );
};

export default Footer;
