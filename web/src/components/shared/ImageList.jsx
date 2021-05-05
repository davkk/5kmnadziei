import React from 'react';
import PropTypes from 'prop-types';

import shortid from 'shortid';

import styled from '@emotion/styled';
import css from '@emotion/css';

import { Image } from '@components/shared';
import { MEDIA } from '@helpers';

const ImageList = ({ className, items, ...props }) => (
  <div className={className} {...props}>
    {items.map(item => (
      <a
        key={shortid.generate()}
        href={item.website ? item.website : undefined}
        target="_BLANK"
        rel="noopener noreferrer"
        css={css`
          display: block;
          width: auto;
        `}
      >
        <Image
          fluid={item.logo.asset.fluid}
          alt={item.logo.alt}
          title={item.title}
          objectFit="contain"
        />
      </a>
    ))}
  </div>
);

ImageList.propTypes = {
  className: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  numinrow: PropTypes.number.isRequired,
};

export default styled(ImageList)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: space-between;
  flex-flow: row wrap;
  margin: 2em 0;

  & a {
    width: ${({ numinrow }) => 100 / numinrow - 4}%;
    margin: 0 2% 2em;
    transition: transform 150ms ease-in;

    &:hover {
      transform: scale(1.02);
    }

    ${MEDIA.TABLET`
      width: 46%;
    `}
  }

  & ${Image} {
    min-height: auto;
    max-height: 5em;
    box-shadow: none;
    border-radius: 0;
  }
`;
