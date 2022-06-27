import styled from 'styled-components';

export const Container = styled.div`

`;


export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div`

  color: #C64D32;

  font-size: 16px;
  line-height: 29px;
  letter-spacing: -0.02em;

  font-weight: 400;
`;

export const Description = styled.a`
  color: #3D485F;

  font-size: 16px;
  line-height: 29px;
  letter-spacing: -0.02em;

  font-weight: 400;
`;

export const CloseButton = styled.img`
  width: 12.5px;
  height: 12.5px;

  position: absolute;

  top: 36px;
  left: 29px;

  cursor: pointer;

`;