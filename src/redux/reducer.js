import { GET_TESTIMONIAL } from './actions'

const initialState = {
    testimonial: {}
}

function rootReducer (state = initialState, action){
    switch (action.type) {
        case GET_TESTIMONIAL:
            
            return {
                ...state,
                testimonial: action.payload
            };
    
        default:
            return state;
    }
}

export default rootReducer