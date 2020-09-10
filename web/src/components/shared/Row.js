import styled from '@emotion/styled';

import { MEDIA } from '@helpers';

const Row = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
  max-width: 100%;
  width: 100%;

  ${MEDIA.SDESKTOP`
    flex-direction: column;
  `}
`;

export default Row;
