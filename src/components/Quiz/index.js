import axios from 'axios'
import React, { Component } from 'react'

import ErrorMessage from './ErrorMessage'
import Questions from './Questions'
import Results from './Results'
import Welcome from './Welcome'

const DEFAULT_STATE = {
  answers: [],
  congressmen: [],
  fetchError: false
}

export default class Quiz extends Component {
  constructor () {
    super()
    this.state = DEFAULT_STATE

    // Binding methods to `this`
    this.startGame = this.startGame.bind(this)
    this.storeAnswers = this.storeAnswers.bind(this)
  }

  startGame () {
    // I feel pretty bad about this, but hey! it's a very little app...
    axios.get('http://localhost:5000/')
      .then((response) => {
        const congressmen = JSON.parse(response.data)
        this.setState({ ...DEFAULT_STATE, congressmen })
      })
      .catch((error) => {
        this.setState({ fetchError: true })
      })
  }

  getCurrentComponent () {
    const { answers, congressmen, fetchError } = this.state
    if (fetchError) {
      return (
        <ErrorMessage tryAgainFn={this.startGame} />
      )
    } else if (congressmen[0]) {
      // Data fetched...
      if (answers[0]) {
        // ... and game finished:
        return (
          <Results answers={answers} congressmen={congressmen} playAgainFn={this.startGame} />
        )
      } else {
        // ... begin game:
        return (
          <Questions congressmen={congressmen} storeAnwsersFn={this.storeAnswers} />
        )
      }
    } else {
      // No data fetched, game did not begin:
      return (
        <Welcome startGameFn={this.startGame} />
      )
    }
  }

  render () {
    const currentComponent = this.getCurrentComponent()
    return (
      <section>
        {currentComponent}
      </section>
    )
  }

  storeAnswers (answers) {
    this.setState({ answers })
  }
}
