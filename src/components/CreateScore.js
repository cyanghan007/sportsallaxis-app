import { useNavigate } from "react-router-dom"
import { createScore } from '../services/scores-api'

function Create() {
    const nav = useNavigate()

    const createTheScore = (e) => {
        const score = { description: e.target.description.value, complete: false }
        createScore(score)
        nav('/')
    }

    return (
        <div>
            <h4>Add New Score</h4>
            <form onSubmit={createTheScore}>
                <input type='text' name='description' id='dsc' />
                <input type='submit' />
            </form>
        </div>
    )
}

export default Create