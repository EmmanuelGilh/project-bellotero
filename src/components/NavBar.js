import React, { useState } from 'react'
import logo from '../media/bellotero.png'

export default function NavBar() {

    const [activeIndex, setActiveIndex] = useState(0)

    const navNames = ["Home", "Solutions", "Stories", "Partners", "About", "Blog"]

    const getColor = (index) => {
        if (!index && index !== 0) {
            return 'border-white';
        }

        if (index === activeIndex) {
            return 'border-primary'
        }

        return 'border-white'
    }

    return (
        <div className='container text-primary pb-2 d-flex bg-white' >
            <div className='col-6 d-flex align-items-start pt-3'> <img src={logo} alt="Bellotero.io" /> </div>
            <div className='col-6 d-flex justify-content-around px-3 font-weight-bold'>
                {navNames.map((item, index) => <h6
                    key={index}
                    className={`px-1 font-weight-bold pt-3 border-top border-4 ${getColor(index)}`}
                    role={'button'}
                    onClick={() => setActiveIndex(index)}>
                    {item}</h6>)}
            </div>
        </div>
    )
}
