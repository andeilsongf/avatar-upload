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
        <Description onClick={reset} aria-label='Try Again'>Try again</Description>
      </Wrapper>
      <CloseButton aria-label='Close'/>
    </Container>
  );
}