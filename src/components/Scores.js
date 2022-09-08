import { getScores } from '../services/scores-api'
import { useState, useEffect } from 'react'
import Create from './CreateScore'


export default function Todos() {
    const [scores, setScores] = useState([])
    useEffect(() => {
        getScores()
            .then(res => setScores(res.data))
    }, [])
    console.log(scores)
    return (
        <div>
            <ul>
                {scores.map((score) => {
                    return (
                        <li><a href={`/${score._id}`}>{score.description}</a>
                        </li>
                    )
                })}

            </ul>
            <Create />
        </div>
    )

}