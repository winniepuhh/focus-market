import { Link } from "react-router-dom";
import logo from '../../assets/Logo.svg';

const Footer = () => {
    const navLinks = [
        { path: '/focus-wall', label: 'FocusWall' },
        { path: '/cube', label: 'Cube' },
        { path: '/flag', label: 'Flag' },
    ];

    return (
        <footer className="relative z-10 flex justify-between bg-black items-center px-[150px] py-4 shadow-md">
            {/* Логотип */}
            <div className="flex-shrink-0">
                <img src={logo} alt="Logo" className="w-[80px] h-[80px]" />
            </div>

            {/* Навігація */}
            <nav>
                <ul className="flex space-x-[60px] text-white">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className="font-roboto text-[19px] font-semibold leading-[22.27px] text-center hover:text-blue-600"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Контактні дані */}
            <div className="flex flex-col items-end text-right">
                <p className="text-white">order@toptrend.com.ua</p>
                <p className="text-white">+ 380 (67) 314-55-15</p>
                <p className="text-white">+ 380 (67) 314-55-00</p>
            </div>
        </footer>
    );
};

export default Footer;
