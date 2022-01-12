import React, { useEffect, useState, Fragment } from 'react'
import { connect } from 'react-redux'
import { getTestimonialByIndex } from '../redux/actions'
import page1 from '../utils/page1.json'
import Shimmer from 'react-js-loading-shimmer';
import './testimonials.css'


function Testimonials({ testimonial, getTestimonial }) {

    const { testimonial_component: data } = page1

    const [activeIndex, setActiveIndex] = useState(1)
    const [loading, setLoading] = useState(true)

    const handleTestimonial = (value) => {
        if (value === 1) {
            return getTestimonial(activeIndex + 1);
        }

        getTestimonial(activeIndex - 1);
    }
    // get inicial
    useEffect(() => {
        if (Object.keys(testimonial).length) {
            return;
        }
        getTestimonial(activeIndex);
    }, [testimonial, getTestimonial, activeIndex])

    // loading
    useEffect(() => {
        if (!Object.keys(testimonial).length || testimonial.id !== activeIndex) {
            return setLoading(true);
        }

        setLoading(false);
    }, [testimonial, activeIndex])


    return (

        <div className='container bg-light'>

            <div className='d-flex mb-5'>
                <h1 className='font-weight-bold text-white bg-primary'>{data.title}</h1>
            </div>

            {/* Testimonial */}
            <div className='bg-white row mx-5'>
                <div className='col-4 border'>
                    {loading ? <Fragment>
                        <Shimmer height={"15px"} /><Shimmer />
                    </Fragment>
                        : <Fragment>
                            <h3 className='font-weight-bold'>{testimonial.name}</h3>
                            <p className='text-secondary'>{`${testimonial.designation} from ${testimonial.location}`}</p>
                        </Fragment>}

                </div>
                <div className='col-8 border'>
                    <h4 className='font-weight-bold'>
                        {loading ? <Loading /> : testimonial.message}
                    </h4>
                </div>
            </div>

            {/* Paginate */}
            <div>
                <span className='text-white bg-primary rounded-0 index'>{activeIndex}/4</span>
                <div class="btn-group rounded-0" role="group">
                    <button
                        type="button"
                        class="btn btn-primary rounded-0"
                        disabled={activeIndex === 1}
                        onClick={() => { setActiveIndex(prevValue => prevValue - 1); handleTestimonial(0) }}>←</button>
                    <button type="button"
                        class="btn btn-primary rounded-0"
                        disabled={activeIndex === 4}
                        onClick={() => { setActiveIndex(prevValue => prevValue + 1); handleTestimonial(1) }}>→</button>
                </div>
            </div>
        </div>
    )
}

function Loading() {
    return <Fragment>
        <Shimmer />
        <Shimmer />
        <Shimmer />
    </Fragment>
}



export default connect(
    state => ({
        testimonial: state.testimonial
    }),

    dispatch => ({
        getTestimonial: (index) => dispatch(getTestimonialByIndex(index)),
    })
)(Testimonials)