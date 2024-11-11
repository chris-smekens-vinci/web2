import './Footer.css'

interface FooterProps {
    text: string;
};

const Footer = (props: FooterProps) => {
    const { text } = props;
    return (
        <footer>
            <p>{text}</p>
        </footer>
    );
};

export default Footer;
