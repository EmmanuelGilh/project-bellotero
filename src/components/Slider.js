import React, { Fragment } from 'react'

export default function Slider({ value, onChange, range }) {

    return (<Fragment>
        <div>
            <input type="text" id="valorRange" value={value} onChange={onChange}/> 
        </div>
        <div>
            <input 
                type="range" className="$gray-300 form-range"
                min="0" max={range}
                value={value} onChange={onChange} />
        </div>

</Fragment>)}

