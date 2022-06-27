import { Avatar } from '../Avatar';

import {
  Container,
  Wrapper,
  Title,
  Description,
  CloseButton,
} from './styles';

interface Props {
  reset: () => void;
}

export function UploadHasFailed({
  reset,
}: Props) {
  return (
    <Container>
      <Avatar error />
      <Wrapper>
        <Title>Sorry, the upload failed.</Title>
        <Description onClick={reset} >Try again</Description>
      </Wrapper>
      <CloseButton/>
    </Container>
  );
}