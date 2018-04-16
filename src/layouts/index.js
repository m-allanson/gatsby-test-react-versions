import React from 'react'
import ReactDOM from 'react-dom'

const Versions = () => (
  <div>
    <p>React version: {React.version}</p>
    <p>React DOM version: {ReactDOM.version}</p>
  </div>
)

export default () => <Versions />
