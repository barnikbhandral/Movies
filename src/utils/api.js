import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjVhZjliZjhjYjQ1NDgyYzg4ZTllMzAxZTkyOGI3ZiIsInN1YiI6IjY1NTcwMGRkZDA1MWQ5MDBjNmYwM2RhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CAEZkV1lliDsZAqQmbyOlcuzY03Ve6yeNhqtSvm6FQQ"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url, params) => {
    try {
        const {data} = await axios.get(BASE_URL + url, {headers, params,})
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}