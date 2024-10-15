import React from 'react';
import winders from '../../assets/img/Монтажна область 1 2.png'; // Замените на правильный путь к вашему изображению

const SizeDescription: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center py-10 bg-gray-950">
            {/* Ліве зображення */}
            <div className="flex-shrink-0">
                <img 
                    src={winders} 
                    className="w-full md:w-[700px] h-auto" 
                    alt="Розмірна сітка віндера" 
                />
            </div>

            {/* Текстовий контент праворуч */}
            <div className="mt-8 md:mt-0 md:ml-8 text-white flex flex-col justify-center text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-bold text-lime-500">Розмірна сітка віндера:</h2>

                <div className="mt-4">
                    <span className="text-lg md:text-xl font-bold text-lime-500 pr-6">XS</span>
                    <span className="text-lg md:text-xl font-bold">400x2000 мм</span>
                </div>
                <div className="mt-4">
                    <span className="text-lg md:text-xl font-bold text-lime-500 pr-6">S</span>
                    <span className="text-lg md:text-xl font-bold">650x2200 мм</span>
                </div>
                <div className="mt-4">
                    <span className="text-lg md:text-xl font-bold text-lime-500 pr-6">M</span>
                    <span className="text-lg md:text-xl font-bold">700x3400 мм</span>
                </div>
                <div className="mt-4">
                    <span className="text-lg md:text-xl font-bold text-lime-500 pr-6">L</span>
                    <span className="text-lg md:text-xl font-bold">820x4700 мм</span>
                </div>
            </div>
        </div>
    );
};

export default SizeDescription;
