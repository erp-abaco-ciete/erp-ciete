export default function ApplicationLogo({ className = '', ...props }) {
    return (
        <img
            src="/images/logo/Ciete-Ingenieros-SA.webp"
            alt="Ciete"
            className={className}
            {...props}
        />
    );
}
