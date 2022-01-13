import React, { Fragment } from 'react'
import './slider.css'

export default function Slider({ value, onChange, range }) {

    return (<Fragment>
        <div>
            <input class='numberBox' type="text" id="valorRange" value={value} onChange={onChange} />
        </div>
        <div>
            <input
                type="range" className="$gray-300 form-range"
                min="0" max={range} class='range'
                value={value} onChange={onChange} />
        </div>

    </Fragment>)
}

