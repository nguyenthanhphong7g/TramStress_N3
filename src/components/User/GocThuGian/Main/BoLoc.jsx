import React, { useState } from 'react'
import './BoLoc.css'
const BoLoc = () => {
    const [isActive, setIsActive] = useState(0);
    const handleButtonClick = () => {
        setIsActive(!isActive);
    }
    const items = ['Tất cả', 'Phổ biến', 'Bài tập', 'Giai điệu', 'Lời hay'];
    return (
        <div>
            <div className='BoLoc'>
                <ul>
                    {items.map((item, index) => (
                        <li
                            className={index === isActive ? 'active' : ''}
                            onClick={() => setIsActive(index)}
                            key={index}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default BoLoc
