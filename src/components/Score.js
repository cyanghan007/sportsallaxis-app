import { getScore, deleteScore } from '../services/scores-api'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


function Score() {
    const nav = useNavigate()
    const { id } = useParams()
    const [score, setScore] = useState({})
    useEffect(() => {
        getScore(id)
            .then(res => setScore(res.data))
    }, [])

    const deleteTheScore = () => {
        deleteScore(id) // service in todos-api
        nav('/') // take us back to home screen
    }

    return (
        <div>
            <h1>Scores:</h1>
            <h3>{score.description}</h3>
            Completed: <input type='checkbox' checked={score.complete} />
            <button onClick={() => { nav(`/${id}/edit`) }}>Edit</button>
            <button onClick={deleteTheScore}>Delete</button>
        </div>
    )
}

export default Score