import axios from 'axios'
import React, { PureComponent } from 'react'

class Results extends PureComponent {
  componentDidMount () {
    const { answers, congressmen } = this.props
    const data = congressmen.map((c, i) => {
      return {
        name: c.name,
        result: c.side === answers[i] ? 'success' : 'fail'
      }
    })
    axios.post(this.props.apiUrl + '/', { data })
      .then((response) => { window.console.log(response.code) })
      .catch((error) => { window.console.log(error)})
  }

  getFormattedScore () {
    return this.getScore() + '/' + this.props.questionCount
  }

  getScore () {
    const { answers, congressmen } = this.props
    const correctAnswers = answers.filter((a, i) => (a === congressmen[i].side))
    return correctAnswers.length
  }

  render () {
    const { playAgainFn, questionCount } = this.props
    return (
      <div className="results-container">
        <div className="logo">
          <img src="images/logo.svg" />
        </div>
        <div className="results-text text">Fini !</div>
        <div className="results-text text">Alors, surpris(e) ?</div>
        <div className="results-text text">N'hésite pas à partager notre petit jeu à tes amis, connaissances, parents, animaux de compagnie... Tout le monde quoi ! :)</div>
        <div className="results-text text">Ton score :</div>
        <div className="results-score">{this.getScore()} <span>/ {questionCount}</span></div>
        <button className="results-button button-playagain" onClick={e => playAgainFn()}>Recommencer !</button>
      </div>
    )
  }
}

export default Results
