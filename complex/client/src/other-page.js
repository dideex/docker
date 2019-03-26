import React from 'react'
import { Link } from 'react-router-dom'

export default function otherPage() {
  return (
    <div>
      <p>Im some other page!</p>
      <Link to="/">Go back home</Link>
    </div>
  )
}
