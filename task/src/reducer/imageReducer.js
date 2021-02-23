import { IMAGES_FAIL, IMAGES_REQUEST, IMAGES_SUCCESS } from '../constant/image';

export const imageReducer = (state = { data: [] }, action) => {
    switch (action.type) {
        case IMAGES_REQUEST:
            return {
                loading: true
            }

        case IMAGES_SUCCESS:
            return {
                loading: false,
                data: action.payload
            }

        case IMAGES_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}