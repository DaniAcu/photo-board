import axios from 'axios';
import { Callback } from './typings'

export default (callback: Callback) => {
    axios.get("https://pixabay.com/api/?key=3934377-d716359e67249c9dff81e6de2&q=photography&image_type=photo")
    .then(callback)
}
