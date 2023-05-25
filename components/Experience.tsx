import React, { useState } from 'react'
import SectionTitle from './SectionTitle';
import MoneyChanger from './works/MoneyChanger';
import GamingHub from './works/GamingHub';

const Experience = () => {
    const [workMoneyChanger, setWorkMoney] = useState(true);
    const [workGamingHub, setWorkGame] = useState(false);

    const handleMoney = () => {
        setWorkMoney(true);
        setWorkGame(false);
    };
    const handleGaming = () => {
        setWorkMoney(false);
        setWorkGame(true);
    };

    return (
        <section id="experience" className='max-w-containerxs mx-auto py-10 lgl:py-24 px-4'>
            <SectionTitle title="Where I Have Worked" titleNo="02" />
            <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
                <ul>
                    <li
                        onClick={handleMoney}
                        className={`${workMoneyChanger
                                ? "border-l-textGreen text-textGreen"
                                : "border-l-hoverColor text-textDark"
                            }  border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm
                    cursor-pointer duration-300 px-8 font-medium`}>
                        Money Changer
                    </li>
                    <li
                        onClick={handleGaming}
                        className={`${workGamingHub
                                ? "border-l-textGreen text-textGreen"
                                : "border-l-hoverColor text-textDark"
                            }  border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm
                    cursor-pointer duration-300 px-8 font-medium`}>
                        Gaming Hub
                    </li>
                </ul>
                {workMoneyChanger && <MoneyChanger />}
                {workGamingHub && <GamingHub />}

            </div>
        </section>
    );
};

export default Experience;