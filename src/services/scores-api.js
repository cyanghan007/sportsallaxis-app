// This file will be our endpoints
import axios from 'axios'
const baseUrl = 'http://localhost:3001/score';


export const getScores = () => {
    const URL = 'https://www.espn.com/nba/scoreboard'
    const response = axios.get(URL)
    return response
}

export const getScore = (id) => {
    const URL = `${baseUrl}/${id}`;
    const response = axios.get(URL)
    return response
}

export const deleteScore= (id) => {
    const URL = `${baseUrl}/${id}`;
    const response = axios.delete(URL)
    return response
}

export const editScore = (id, updatedScore) => {
    const URL = `${baseUrl}/${id}`;
    const response = axios.put(URL, updatedScore)
    return response
}

export const createScore = score => {
    const URL = baseUrl
    const response = axios.post(URL, score)
    return response

}