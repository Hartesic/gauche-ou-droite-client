import axios from 'axios'
import React, { PureComponent } from 'react'

const SCORE_LEVELS = [
  20, 15, 10, 5, 1, 0
]
const SCORE_TEXTS = {
  0: "Zééérooo ! C'est bien, à 20 près tu avais tout bon !",
  1: "Ça c'est du délit de faciès, et pas très efficace, en plus !",
  5: "C'est sûrement l'échauffement, encore quelques séries et ce sera bon !",
  10: "Pas mal du tout ça, mais peut mieux faire, re-tente ta chance !",
  15: "Impressionnant, t'as révisé ?",
  20: "Vraiment bien, félicitations ! Mais pourras-tu en faire autant avec les nouveaux députés ?"
}
const UNKNOWN_SCORE_TEXT = "C'est quoi ce score ?!"

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

  getScoreText (score) {
    for (const scoreLevel of SCORE_LEVELS) {
      if (score >= scoreLevel) {
        return SCORE_TEXTS[scoreLevel]
      }
    }
    return UNKNOWN_SCORE_TEXT
  }

  render () {
    const { playAgainFn, questionCount } = this.props
    const score = this.getScore()
    const scoreText = this.getScoreText(score)
    return (
      <div className="results-container animated fadeInUp">
        <div className="logo">
          <img src="images/logo.svg" />
        </div>
        <div className="results-text text">Fini !</div>
        <div className="results-score">{score} <span>/ {questionCount}</span></div>
        <div className="results-text text">{scoreText}</div>
        <div className="results-text text">Et surtout, n'hésite pas à partager notre petit jeu à tes amis, connaissances, parents, animaux de compagnie... Tout le monde quoi ! :)</div>
        <button className="results-button button-playagain" onClick={e => playAgainFn()}>Recommencer!</button>
      </div>
    )
  }
}

export default Results
