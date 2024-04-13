import { useRef } from 'react';
import rightarrow from '../../public/left-arrow-svgrepo-com.svg'

const skills = [
    { name: "Python" },
    { name: "Fastapi" },
    { name: "Django" },
    { name: "Web3" },
    { name: "Postgres" },
    { name: "Arduino" },
    { name: "JavaScript" },
    { name: "TailwindCSS" },
    { name: "Bootstrap" },
    { name: "React" },
    { name: "NextJS" },
    { name: "Node" },

    // Add more skills as needed
];

const SkillsCarousel = () => {
    const carousel = useRef(null);

    const scroll = (direction) => {
        if (direction === 'left') {
            carousel.current.scrollLeft -= 300; // Adjust the value based on your card size
        } else {
            carousel.current.scrollLeft += 300; // Adjust the value based on your card size
        }
    };

    return (
        <div className='relative flex items-center'>
            <button
                onClick={() => scroll('left')}
                className='absolute left-0 z-10 hover:bg-secondary_bg rounded-full hover:blur-sm text-white text-2xl p-2'
            >
                <p>&#8592;</p>
            </button>
            <div ref={carousel} className='overflow-hidden whitespace-nowrap scroll-smooth px-14'>
                {skills.map((skill, index) => (
                    <div key={index} className='inline-block w-60 m-2 font-mono bg-secondary_bg rounded-xl text-center leading-40 text-secondary_text text-3xl'>
                        {skill.name}
                    </div>
                ))}
            </div>
            <button
                onClick={() => scroll('right')}
                className='absolute right-0 z-1 hover:bg-secondary_bg rounded-full hover:blur-sm text-white text-2xl p-2'
            >
                <p>&#8594;</p>
            </button>
        </div>
    );
};

export default SkillsCarousel;
