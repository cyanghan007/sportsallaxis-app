import { Link } from 'react-router-dom'

function Nav() {
	return (
		<div className="nav">
            <Link to='/nba'><button>NBA</button></Link>
			<Link to="/score"><button>NFL</button></Link>
			<Link to="/"><button>MLB</button></Link>
		</div>
	)
}

export default Nav