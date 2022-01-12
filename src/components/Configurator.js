import React, { useState } from 'react'
import Slider from './Slider'

export default function Configurator() {

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
                    <h1 className='font-weight-bold text-white bg-primary d-inline-block px-1'>Save more with</h1>
                    <h1 className='font-weight-bold text-white bg-primary d-inline-block px-1'>Bellotero.io</h1>
                </div>
                <p className=''>With Bellotero.io you save time and money make real-time decisions that boost your business and your bottom line. Get less wrongfully blocked payments, save time on bookkeeping and no need to worry about safety. </p>
            </div>

            <div className='col-8'>
                <div className='d-flex justify-content-around mb-5 mt-1'>
                    <p className='font-weight-bold mt-3'>Monthly<br /> ingredient spending</p>
                    <br></br>
                <div>
                <Slider value={spending} onChange={handleSpending} range={80000}/>
            </div>
                </div>
                <div className='d-flex justify-content-around'>
                    <p className='font-weight-bold  mt-3'>Full-time employees that<br /> process invoices</p>
                    <br></br><div>
                <Slider value={employees} onChange={handleEmployees} range={10}/>

        </div>
                </div>
                <div className='d-flex justify-content-around mt-5'>
                    <div>
                        <h1>$ {(employees * 1000).toLocaleString('en')}</h1>
                        <p className='float-right'>Estimated cost food savings</p>
                    </div>
                    <div>
                        <h1>$ {parseInt(spending).toLocaleString('en')}</h1>
                        <p className='float-right'>Your estimated annual savings</p>
                    </div>
                </div>
                
            </div>
        </div>     
    </div>)}

