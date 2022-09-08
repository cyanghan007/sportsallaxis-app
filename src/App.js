import './App.css'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
} from 'react-router-dom'
import Scores from './components/Scores'
import Score from './components/Score'
import Edit from './components/EditScore'
import Nav from './components/Nav'
import NBA from './components/Nba'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <h2> NBA-All-Axis </h2>
        <Routes>
          <Route path='/' element={<Scores />} />
          <Route path='/nba' element={<NBA />} />
          <Route path='/:id' element={<Score />} />
          <Route path='/:id/edit' element={<Edit />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;