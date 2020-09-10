import { Link } from 'gatsby';

import styled from '@emotion/styled';

import { LIGHT_BLUE } from '@constants';

const A = styled(Link)`
  display: table;
  color: ${LIGHT_BLUE};
  font-size: 0.6em;
  margin: 1em auto;
`;

export default A;
