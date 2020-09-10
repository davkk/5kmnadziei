import styled from '@emotion/styled';

import { LIGHT_BLUE } from '@constants';

const Textbox = styled.div`
  p {
    font-size: 1em;
    font-weight: 400;
    padding-bottom: ${({ spaceBottom }) => (spaceBottom ? '2em' : '1em')};
    word-break: break-word;

    & strong {
      font-weight: 500;
      color: ${LIGHT_BLUE};
    }
  }

  h1,
  h2 {
    text-transform: uppercase;
  }

  h1 {
    font-size: 1.2em;
    margin: 1em 0;
  }

  h2 {
    font-size: 1em;
    margin: 0.2em 0;
    line-height: 1.2;
  }

  ol,
  ul {
    & p {
      padding: 0;
      display: inline-block;
      font-size: 1em;
    }
  }

  ol {
    counter-reset: item;
    padding-left: 2em;
    padding-bottom: 0.8em;

    & > li {
      counter-increment: item;
      font-size: 0.8em;
      font-weight: 400;
      margin: 0.3em 0;
      word-break: break-word;

      &:before {
        display: inline-block;
        content: counter(item) '.';
        font-weight: bold;
        text-indent: -1.7em;
        float: left;
      }
    }
  }

  ul {
    list-style-type: square;
    padding-left: 2em;
    word-break: break-word;

    & > li {
      font-size: 0.8em;
      font-weight: 400;
      margin: 0.3em 0;
    }
  }
`;

export default Textbox;
