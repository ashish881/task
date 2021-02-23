import axios from 'axios';
import { IMAGES_FAIL, IMAGES_REQUEST, IMAGES_SUCCESS } from '../constant/image';

export const imageAction = () => async (dispatch) => {

  try {
    dispatch({
      type: IMAGES_REQUEST
    });

    const { data } = await axios.get('http://localhost:5000/api/data');
    console.log(data)

    dispatch({
      type: IMAGES_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: IMAGES_FAIL,
      payload: error
    })
  }

}