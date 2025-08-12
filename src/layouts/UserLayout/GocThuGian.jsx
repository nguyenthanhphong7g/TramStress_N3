import React from 'react'
import BoLoc from '../../components/User/GocThuGian/Main/BoLoc'
import NoiDung from '../../components/User/GocThuGian/Main/NoiDungThuGian'
import './GocThuGian.css'
const GocThuGian = () => {
    return (
        <div className='GocThuGian'>
            <div>
                <BoLoc />
            </div>
            <div>
                <NoiDung />
            </div>

        </div>
    )
}

export default GocThuGian
