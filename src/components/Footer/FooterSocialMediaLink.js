import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import openBlankLink from '../../util/window_navigation_service'

function FooterSocialMediaLink(props) {
  return (
    <>
      <button
        className="text-white w-8 h-8 mr-1 mb-1 text-xl hover:text-gray-600"
        type="button"
        onClick={() => openBlankLink(props.url)}
      >
        <FontAwesomeIcon icon={props.icon} />
      </button>
    </>
  )
}

export default FooterSocialMediaLink
