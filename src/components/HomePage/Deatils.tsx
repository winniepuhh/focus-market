import React from 'react';

interface DetailsProps {
    title: string;
    subtitle: string;
    description: string;
    buttonLabel: string;
    imageSrc: string;
}

const Details: React.FC<DetailsProps> = ({ title, subtitle, description, buttonLabel, imageSrc }) => {
    return (
        <div className="p-8 bg-black">
            {/* Заголовок */}
            <div>
                <h1 className='text-lime-500 text-4xl ml-4 md:ml-[150px] mt-12'>{title}</h1>
            </div>

            {/* Контент */}
            <div className="flex flex-col md:flex-row mt-12">
                {/* Опис */}
                <div className="ml-4 md:ml-[150px] text-white md:w-[500px]">
                    <h2 className="text-2xl font-bold mt-4 md:mt-[25%]">{subtitle}</h2>
                    <p className="text-sm mt-4 md:mt-0">
                        {description}
                    </p>
                    <div className="flex justify-center mt-8">
                        <button className="px-6 py-2 bg-black-600 text-white font-semibold border-2 rounded-md border-lime-700 w-[210px] h-[50px] hover:bg-lime-700">
                            {buttonLabel}
                        </button>
                    </div>
                </div>

                {/* Картинка */}
                <div className="flex-shrink-0 mt-8 md:mt-0 md:ml-auto">
                    <img src={imageSrc} alt={subtitle} className="w-full h-auto md:w-auto" />
                </div>
            </div>
        </div>
    );
};

export default Details;
