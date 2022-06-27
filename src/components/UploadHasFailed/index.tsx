import { Avatar } from '../Avatar';

import {
  Container,
  Wrapper,
  Title,
  Description,
  CloseButton,
} from './styles';

export function UploadHasFailed() {
  return (
    <Container>
      <Avatar />
      <Wrapper>
        <Title>Sorry, the upload failed.</Title>
        <Description>Try again</Description>
      </Wrapper>

      <CloseButton />

    </Container>
  );
}