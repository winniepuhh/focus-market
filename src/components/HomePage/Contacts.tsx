import React from 'react';

const ContactForm: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start mt-10 p-8 bg-gray-800">
            {/* Ліва частина з заголовком і текстом */}
            <div className="pr-8 w-full md:w-[500px] ml-[15%] md:mt-[10%] mb-8 md:mb-0">
                <h1 className="text-5xl font-bold text-lime-500 mb-[50px]">Зв’яжіться з нашим менеджером</h1>
                <p className="mt-4 text-white mr-10">
                    Вас зацікавили пропозиції або виникли питання?
                    Заповніть форму зворотнього з’язку і наші менеджери
                    як найшвидше зв’яжуться з вами.
                </p>
            </div>

            {/* Права частина з формою */}
            <div className="w-full md:w-[500px] mr-[10%] p-6 border border-lime-500 rounded-md bg-slate-800">
                <h2 className="text-xl font-bold text-white mb-4">Контактні дані:</h2>

                {/* ПІБ */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="ПІБ"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <h2 className="text-xl font-bold text-white mb-4">Номер телефону</h2>
                    <input
                        type="tel"
                        placeholder="+380()"
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                {/* Коментарі */}
                <div className="mb-4">
                    <h2 className="text-xl font-bold text-white mb-4">Коментарі</h2>
                    <textarea
                        placeholder="Коментарі"
                        rows={4}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <button className="px-6 py-2 bg-black-600 text-white font-semibold border-2 rounded-md border-lime-700 w-[210px] h-[50px] hover:bg-lime-700">
                    Звязатись
                </button>
            </div>
        </div>
    );
};

export default ContactForm;
