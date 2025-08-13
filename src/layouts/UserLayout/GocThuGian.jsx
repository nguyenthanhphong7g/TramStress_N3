import React, { useRef, useEffect, useState } from 'react';
import BoLoc from '../../components/User/GocThuGian/Main/BoLoc';
import NoiDung from '../../components/User/GocThuGian/Main/NoiDungThuGian';
import './GocThuGian.css';
import Search_GocThuGian from '../../components/User/GocThuGian/Main/Search_GocThuGian';

const GocThuGian = () => {
    const [isActive, setIsActive] = useState(0);

    const refs = [
        useRef(null), 
        useRef(null), 
        useRef(null), 
        useRef(null), 
        useRef(null), 
    ];

    const handleScrollToSection = (index) => {
        setIsActive(index);
        if (refs[index]?.current) {
            refs[index].current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY < 200 && isActive !== 0) {
                setIsActive(0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isActive]);

    return (
        <div className='GocThuGian'>
            <Search_GocThuGian/>
            <BoLoc onButtonClick={handleScrollToSection} isActive={isActive} />
            <NoiDung refs={refs} />
        </div>
    );
};

export default GocThuGian;
