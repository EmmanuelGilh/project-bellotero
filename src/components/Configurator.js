import React, { useState } from 'react'
import Slider from './Slider'
import page2 from '../utils/page2.json'
import './configurator.css'


export default function Configurator() {

    const { configurator_component: data } = page2

    const [spending, setSpending] = useState(0)
    const [employees, setEmployees] = useState(0)

    const handleSpending = (e) => {
        setSpending(e.target.value)
    }

    const handleEmployees = (e) => {
        setEmployees(e.target.value)
    }

    return (<div className='container bg-light'>

        {/* estimator */}
        <div className='row mx-5'>
            <div className='col-4'>
                <div className='mb-5'>
                    <h1 className='titlebox1 font-weight-bold text-white d-inline-block px-1'>{data.save}</h1>
                    <h1 className='titlebox2 font-weight-bold text-white d-inline-block px-1'>{data.bellotero}</h1>
                </div>
                <p className='box font-weight-bold'>{data.description}</p>
            </div>

            <div className='col-8'>
                <div className='d-flex justify-content-around mb-5 mt-1'>
                    <p className='words font-weight-bold mt-3'>{data.monthly}</p>
                    <br></br>
                    <div>
                        <Slider value={spending} onChange={handleSpending} range={80000} />
                    </div>
                </div>
                <div className='d-flex justify-content-around'>
                    <p className='words font-weight-bold  mt-3'>{data.employees}</p>
                    <br></br><div>
                        <Slider value={employees} onChange={handleEmployees} range={10} />

                    </div>
                </div>
                <div className='d-flex justify-content-around mt-5'>
                    <div>
                        <h1 class='numbers'>$ {(employees * 1000).toLocaleString('en')}</h1>
                        <p className='words2'>{data.costs}</p>
                    </div>
                    <div>
                        <h1 class='numbers'>$ {parseInt(spending).toLocaleString('en')}</h1>
                        <p className='words2'>{data.savings}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>)
}

