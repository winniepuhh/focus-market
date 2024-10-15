import { Link } from "react-router-dom";
import focuswall from '../../assets/img/image 1.png'

const InformBlock: React.FC = () => {
    const Links = [
        { label: '01. Фокусволи' },
        { label: '02. Куби' },
        { label: '03. Віндери' },
        { label: '04. Підтримка' },
    ];

    return (
        <div className="p-8 bg-black">
            {/* Навігація */}
            <nav className="flex flex-col md:flex-row justify-center md:space-x-[100px] text-white text-center">
                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-[100px]">
                    {Links.map((link, index) => (
                        <li key={index}>
                            <Link
                                to=""
                                className="font-roboto text-[19px] font-semibold leading-[22.27px] hover:text-lime-600"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Основний контент під навігацією */}
            <div className="flex flex-col md:flex-row mt-12 items-center">
                {/* Опис */}
                <div className="text-white md:w-[500px] ml-[1px] md:ml-[300px] text-center md:text-left">
                    <h2 className="text-2xl font-bold mt-8 md:mt-[25%]">Focus Wall</h2>
                    <p className="text-sm mt-4 md:mt-2 px-4 md:px-0">
                        (текстильний лайтбокс) - це втілення передових технологій та комплекс рішень для
                        ефективної візуальної комунікації та
                        оформлення простору. Вироби ідеально поєднують
                        функціональність із сучасним дизайном,
                        що робить їх придатними для широкого спектру
                        застосувань, від рекламних до декоративних цілей.
                    </p>
                    <div className="flex justify-center md:justify-start mt-8">
                        <button className="px-6 py-2 bg-black-600 text-white font-semibold border-2 rounded-md border-lime-700 w-[210px] h-[50px] hover:bg-lime-700">
                            ЗАМОВИТИ
                        </button>
                    </div>
                </div>

                {/* Картинка */}
                <div className="mt-8 md:mt-0 flex-shrink-0 md:ml-auto">
                    <img src={focuswall} alt="Focus Wall" className="w-auto h-auto max-w-full" />
                </div>
            </div>
        </div>
    );
};

export default InformBlock;
