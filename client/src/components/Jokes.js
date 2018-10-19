import React, { Component, Fragment } from "react";
import styled from 'styled-components'
import axios from 'axios'

class Jokes extends Component {
  state = {
    jokes: [],
  }

  componentDidMount() {
    const token = localStorage.getItem('jwt')
    const endpoint = 'http://localhost:9000/api/jokes'
    const options = {
      headers: {
        Authorization: token,
      }
    }
    axios
      .get(endpoint, options)
      .then(res => {
        this.setState({ jokes: res.data })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <H1a>Jokes List</H1a>
        <Ul1>
          {
            this.state.jokes.map(jokes => (
            <Fragment key={jokes.id}>
              <Li1>{jokes.setup} <Span1>{jokes.punchline}</Span1></Li1>
            </Fragment>
            ))
          }
        </Ul1>
      </div>
    )
  }
}

const H1a = styled.h1``
const Ul1 = styled.ul`
  list-style-type: none;
`
const Li1 = styled.li`
  font-size: 2.4rem;
`
const Span1 = styled.span`
  font-size: 1.6rem;
`

export default Jokes;
