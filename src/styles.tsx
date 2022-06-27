import styled, { css } from 'styled-components';

interface Props {
  isError: boolean;
  isSaved: boolean;
  image: File | null;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 553px;
  height: 177px;
  
  position: relative;

  ${({ isSaved, image, isError }) => `
    ${
      !image || isSaved
        ? css`
            border: 2px dashed #c7cdd3;
          `
        : ''
    }
    ${
      (!image && !isError) || isSaved
        ? css`
            cursor: pointer;
          `
        : ''
    }
  `}

  background-color: #f2f5f8;
  border-radius: 8px;

  margin: 200px auto;
`;

