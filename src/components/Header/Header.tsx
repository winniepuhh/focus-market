import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Іконки для бургер-меню
import logo from '../../assets/Logo.svg';
import backgr from '../../assets/img/Preview.png';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false); // Стан для контролю відкриття бургер-меню

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { path: '/focus-wall', label: 'FocusWall' },
        { path: '/cube', label: 'Cube' },
        { path: '/flag', label: 'Flag' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgr})` }}>
            {/* Header */}
            <header className="absolute top-0 left-0 w-full z-10 flex justify-between items-center px-6 md:px-[150px] py-4 shadow-md">
                <div className="flex-shrink-0">
                    <img src={logo} alt="Logo" className="w-[50px] h-[50px] md:w-[80px] md:h-[80px]" />
                </div>

                {/* Бургер-меню для малих екранів */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu}>
                        {isOpen ? (
                            <AiOutlineClose className="text-white text-3xl" />
                        ) : (
                            <AiOutlineMenu className="text-white text-3xl" />
                        )}
                    </button>
                </div>

                {/* Навігація для великих екранів */}
                <nav className={`hidden md:flex space-x-[60px] text-white`}>
                    <ul className="flex space-x-[60px]">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className="font-roboto text-[19px] font-semibold leading-[22.27px] text-center hover:text-lime-500"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Бургер-меню для малих екранів */}
                <nav className={`md:hidden absolute top-0 left-0 w-full bg-black bg-opacity-90 text-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} h-screen flex flex-col items-center justify-center`}>
                    <ul className="space-y-6">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className="text-2xl font-bold"
                                    onClick={() => setIsOpen(false)} // Закриття меню після натискання
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            {/* Text Section */}
            <div className="absolute top-[50%] left-[27%] md:left-[23%] transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <div className="text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Текстильні лайтбокси</h1>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Рекламні куби</h1>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Віндери, прапори</h1>
                    <button className="bg-black text-white border rounded-md border-white w-[200px] md:w-[270px] h-[50px] mx-auto mt-[30%]">
                        Замовляй прямо зараз!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
