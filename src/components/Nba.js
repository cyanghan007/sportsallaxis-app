import React from 'react'


class App extends React.Component {

  state = {
    baseURL: 'https://www.espn.com/nba/',
    query: '&t=',
    teamName: '',
    score: '',
    searchURL: ''
  }

  handleChange = (event) =>{
    this.setState({ [event.target.id]: event.target.value })
  }
  handleSubmit = (event) =>{
    event.preventDefault()
    this.setState({
      searchURL: this.state.baseURL + this.state.query +  this.state.teamName
    }, () => {
      fetch(this.state.searchURL)
      .then(response => {
        return response.json()
      }).then(json => this.setState({
        team: json,
        teamName: ''
      }),
      err => console.log(err))
    })
  }
  render () {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='teamName'>Team Name</label>
        <input
          id='teamName'
          type='text'
          value={this.state.teamName}
          onChange={this.handleChange}
        />
        <input
          type='submit'
          value='Find NBA Scores'
        />
      </form>
      {/* {(this.state.movie)
        ? <TeamInfo movie={this.state.team} />
        : ''
      } */}
    </>
    )
  }
}


export default App;