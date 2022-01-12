import axios from 'axios'

export const GET_TESTIMONIAL = 'GET_TESTIMONIAL'


export  function getTestimonialByIndex(index) {
    return async dispatch => {
        const request = await axios.get(`https://testimonialapi.toolcarton.com/api/${index}`)
        dispatch({type: "GET_TESTIMONIAL", payload: request.data})
    }
}