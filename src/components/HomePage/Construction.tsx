import React from 'react';
import focusWall from '../../assets/img/image 3.png';

// Define types for props
interface Column {
    header: string;
    text: string;
}

interface ConstructionProps {
    title: string;
    columns: Column[];
    image: string;
}

const Construction: React.FC<ConstructionProps> = ({ title, columns, image }) => {
    return (
        <div className="p-1 bg-slate-800">
            {/* Блок з фотографією */}
            <div className="mt-8">
                <img
                    src={image}
                    alt="Focus Wall"
                    className="w-[calc(100% - 300px)] mx-auto"
                />
            </div>

            {/* Заголовок під фотографією */}
            <h2 className="text-2xl font-bold text-white text-center mt-4">
                {title}
            </h2>

            {/* Три стовпчики з текстом */}
            <div className="flex mt-8 space-x-4">
                {columns.map((column, index) => (
                    <div
                        key={index}
                        className={`flex-1 ${index > 0 ? 'border-l border-lime-600' : ''} text-white text-center py-4`}
                    >
                        <h5>{column.header}</h5>
                        <p className='px-10'>{column.text}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-20">
                <button className="mb-12 px-6 py-2 bg-black-600 text-white font-semibold border-2 rounded-md border-lime-700 w-[210px] h-[50px] hover:bg-lime-700">
                    Детальніше
                </button>
            </div>
        </div>
    );
};

export default Construction;
