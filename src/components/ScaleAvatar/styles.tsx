import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  position: relative;
  justify-content: space-between;
  width: 100%;
  padding: 32px 28px 32px 32px;
`;

export const ScaleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;
  
export const Title = styled.div`

  font-size: 16px;
  line-height: 29px;
  letter-spacing: -0.02em;

  color: #677489;
`;

export const CloseWrapper = styled.div`
  
`;

export const CloseButton = styled.img`
  width: 12.5px;
  height: 12.5px;

  position: absolute;

  top: 36px;
  right: 29px;

  cursor: pointer;

`;