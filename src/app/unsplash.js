import Axios from "axios";

const UNSPLASH_ACCESS_KEY = "ukJyK7f_oSD8sRs6GytnZxaxCnv8XCiFi05QKrF_BeQ";

 export default Axios.create(
    {
        baseURL: 'https://api.unsplash.com/',
        headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        }
    }
);
