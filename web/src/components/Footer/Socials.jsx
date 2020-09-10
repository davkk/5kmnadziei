import React from 'react';
import PropTypes from 'prop-types';

import { FaFacebookF } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';

import styled from '@emotion/styled';

import { MEDIA } from '@helpers';

const Socials = ({ className }) => (
  <div className={className}>
    <a
      className="social-link"
      href="https://facebook.com/5kmnadziei"
      target="_BLANK"
      rel="noopener noreferrer"
    >
      <FaFacebookF />
      /5kmnadziei
    </a>
    <a
      className="social-link"
      href="https://facebook.com/lesnycross"
      target="_BLANK"
      rel="noopener noreferrer"
    >
      <FaFacebookF />
      /lesnycross
    </a>
    <a
      className="social-link"
      href="http://www.hospicjum.olsztyn.pl/"
      target="_BLANK"
      rel="noopener noreferrer"
    >
      <FiGlobe />
      strona&nbsp;Hospicjum
    </a>
  </div>
);

Socials.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(Socials)`
  display: block;
  width: 70%;
  width: fit-content;
  margin: 2em auto;

  ${MEDIA.SDESKTOP`
    width: 90%;
    width: fit-content;
  `}

  & .social-link {
    display: flex;
    margin-top: 1em;
    color: white;
    font-size: 0.7em;

    & svg {
      margin-right: 0.6em;
      font-size: 1.7em;
    }
  }
`;
