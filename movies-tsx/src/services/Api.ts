import axios from "axios";
import IMovies from "../moduls/IMovies";

const getDataFromServer = (section : string) => {

    let url =  `http://localhost:3001/${section}`;

        return axios.get<IMovies[]>(url)
        .then(response => response.data)
}

const addToFavourites = (movieData: Omit<IMovies, "id">) => {
    return axios.post<IMovies>(`http://localhost:3001/favourite`, movieData, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.data)
}

const removeFromFavourites = (id : string | number) => {
    return axios.delete<IMovies>(`http://localhost:3001/favourite/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.data)
}

export { getDataFromServer, addToFavourites, removeFromFavourites };