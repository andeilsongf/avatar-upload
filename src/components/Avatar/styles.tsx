import styled from 'styled-components';

interface StyleProps {
  url?: string;
  error?: boolean;
}

export const Container = styled.div`

`;

export const Wrapper = styled.div``;
  
export const Image = styled.div<StyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #c3cbd5;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 114px;
  height: 114px;

  border-radius: 57px;

`;

export const IconAlertSvg = styled.img`
  width: 20px;
  height: 20px;
`;