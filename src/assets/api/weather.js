import axios from 'axios';
const url = 'https://api.openweathermap.org/data/2.5/weather';
const key = 'd0d79d175304732addb420cd6f8108e7'


const fetchWeather = async (query) =>{
    const { data } = await axios.get(url,{
        params:{
            q:query,
            units:'metric', //these are the supported in the APi  
            APPID:key
        }
    });
    return data;
}


export default fetchWeather;
