import React, { Component } from 'react'

class Results extends Component {
  getFormattedScore () {
    return this.getScore() + '/20'
  }

  getScore () {
    const { answers, congressmen } = this.props
    const correctAnswers = answers.filter((a, i) => (a === congressmen[i].side))
    return correctAnswers.length
  }

  render () {
    const { playAgainFn } = this.props
    return (
      <div>
        <p>Pas besoin d'envoyer "fizik" au 81212 pour savoir si tu es physionomiste, on te dit tout ici :</p>
        <strong>{this.getFormattedScore()}</strong>
        <button onClick={e => playAgainFn()}>I can do better, test me again!</button>
      </div>
    )
  }
}

export default Results
