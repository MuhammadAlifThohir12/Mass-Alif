
const NavLink = ({ href, children }) => {
    return (
        <a
            href={href}
            className="text-black hover:text-gray-200 px-4 py-2 transition-colors duration-300"
        >
            {children}
        </a>
    );
};

export default NavLink;
