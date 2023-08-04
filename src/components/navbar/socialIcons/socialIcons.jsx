/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    <div className="flex flex-row mb-6 ml-6">
      <Link
        to="#"
        className="f-icons h-12 w-12 md:h-10 md:w-10 border-2 border-blue-400 hover:border-gray-600 transition-all duration-700 rounded-full flex justify-center items-center mr-2"
      >
        <FontAwesomeIcon icon={faFacebookF} className="${color1}text-gray-600 hover:text-blue-400 " />
      </Link>
      <Link
        to="#"
        className="f-icons h-12 w-12 md:h-10 md:w-10 border-2 border-blue-400 hover:border-gray-600 transition-all duration-700 rounded-full flex justify-center items-center mr-2"
      >
        <FontAwesomeIcon icon={faTwitter} className="${color1}text-gray-600 hover:text-blue-400" />
      </Link>
      <Link
        to="#"
        className="f-icons h-12 w-12 md:h-10 md:w-10 border-2 border-blue-400 hover:border-gray-600 transition-all duration-700 rounded-full flex justify-center items-center mr-2"
      >
        <FontAwesomeIcon icon={faGoogle} className="${color1}text-gray-600 hover:text-blue-400" />
      </Link>
      <Link
        to="#"
        className="f-icons h-12 w-12 md:h-10 md:w-10 border-2 border-blue-400 hover:border-gray-600 transition-all duration-700 rounded-full flex justify-center items-center"
      >
        <FontAwesomeIcon icon={faLinkedinIn} className="${color1}text-gray-600 hover:text-blue-400" />
      </Link>
    </div>
  );
};

export default SocialIcons;
