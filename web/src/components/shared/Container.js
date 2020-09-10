import styled from '@emotion/styled';

import { MEDIA } from '@helpers';

const Container = styled.div`
  max-width: 90%;
  width: 90%;
  margin: 0 auto;
  text-align: ${({ align }) => align || 'center'};

  ${MEDIA.MIN_LDESKTOP`
    max-width: 1380px;
    width: 1380px;
  `}
`;

export default Container;
