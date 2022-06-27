import Slider from '@mui/material/Slider'

import { Avatar } from '../Avatar';
import { Button } from '../Button';


import {
  Container,
  ScaleWrapper,
  Title,
  CloseButton,
  CloseWrapper
} from './styles';

export function ScaleAvatar() {
  return (
    <Container>
      <Avatar />
      <ScaleWrapper>
        <Title>Crop</Title>

        <Slider min={1} max={10} />

        <Button>Save</Button>

      </ScaleWrapper>

      <CloseButton />

    </Container>
  );
}