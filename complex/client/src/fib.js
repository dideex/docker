import React, { Component } from 'react'
import axios from 'axios'

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: ''
  }

  componentDidMount() {
    this._fetchValues()
    this._fetchIndexes()
  }

  async _fetchValues() {
    const values = await axios.get('/api/values/current')
    this.setState({ values: values.data })
  }

  async _fetchIndexes() {
    const indexes = await axios.get('/api/values/all')
    this.setState({ seenIndexes: indexes.data })
  }

  get SeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number).join`, `
  }

  get Values() {
    const entries = []
    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {this.state.values[key]}
        </div>
      )
    }
    return Object.entries(this.state.values).map(([key, value]) => (
      <div key={key}>
        For index {key} I calculated {value}
      </div>
    ))
  }

  _handleSubmit = async e => {
    e.preventDefault()
    await axios.post('/api/values', {
      index: this.state.index
    })

    this.setState({ index: '' })
  }

  render() {
    const { SeenIndexes, Values } = this
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <label htmlFor="index-input">Enter your index: </label>
          <input
            value={this.state.index}
            onChange={({ target }) => this.setState({ index: target.value })}
            id="index-input"
            type="text"
          />
          <button>Submit</button>
        </form>

        <h3>Indexes I have seen:</h3>
        {SeenIndexes}

        <h3>Calculated Values:</h3>
        {Values}
      </div>
    )
  }
}

export default Fib
