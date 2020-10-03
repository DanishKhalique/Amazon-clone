import axios from 'axios';


  //THE API(cloud function)  URL
const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-405b1/us-central1/api' 
  
})

export default instance;