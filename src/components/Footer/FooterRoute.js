import React from 'react'
import { Link } from 'react-router-dom'

function FooterRoute(props) {
  return (
    <Link to={props.route.path}>
      <li>
        <p className="mt-1 text-lg text-white hover:text-gray-200">
          {props.route.title}
        </p>
      </li>
    </Link>
  )
}

export default FooterRoute
