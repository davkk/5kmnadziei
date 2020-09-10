import React from 'react';
import PropTypes from 'prop-types';

import shortid from 'shortid';

import styled from '@emotion/styled';

import { Image } from '@components/shared';
import { LIGHT_BLUE } from '@constants';
import { MEDIA } from '@helpers';

const ImageList = ({ className, items }) => (
  <div className={className}>
    {items.map(item => (
      <figure key={shortid.generate()}>
        <Image
          src={item.src}
          alt={item.alt}
          title={item.alt}
          objectFit="contain"
        />
        <figcaption>
          {item.href && (
            <a href={item.href} target="_BLANK" rel="noopener noreferrer">
              {item.href}
            </a>
          )}
        </figcaption>
      </figure>
    ))}
  </div>
);

ImageList.propTypes = {
  className: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default styled(ImageList)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: space-between;
  flex-flow: row wrap;
  margin: 2em 0;

  & figure {
    position: relative;
    width: ${({ numInRow }) => 100 / numInRow - 4}%;
    margin: 0 2% 2em;

    ${MEDIA.TABLET`
      width: 46%;
    `}

    & a {
      position: absolute;
      top: 100%;
      left: 50%;
      z-index: 2;
      display: table;
      margin: 1em auto;
      color: ${LIGHT_BLUE};
      font-size: 0.6em;
      transform: translateX(-50%);
    }
  }

  & ${Image} {
    min-height: auto;
    max-height: 5em;
    box-shadow: none;
    border-radius: 0;
  }
`;
