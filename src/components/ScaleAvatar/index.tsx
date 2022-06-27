import Slider from '@mui/material/Slider'
import { useRef } from 'react';

import IconCloseSvg from '../../assets/IconClose.svg';

import { Avatar } from '../Avatar';
import { Button } from '../Button';


import {
  Container,
  ScaleWrapper,
  Title,
  CloseButton
} from './styles';

interface Props {
  isError: boolean;
  imageFile: File | null;
  setIsSaved: (value: boolean) => void;
}

export function ScaleAvatar({
  isError,
  imageFile,
  setIsSaved,
}: Props) {

  const imgRef = useRef<HTMLDivElement>(null);

  const handleSaveButtonClick = () => setIsSaved(true);

  return (
    <Container>
      <Avatar error={isError} image={imageFile} />
      <ScaleWrapper>
        <Title>Crop</Title>

        <Slider 
          min={1}
          max={10}
        />

        <Button onClick={handleSaveButtonClick}>Save</Button>

      </ScaleWrapper>

      <CloseButton
        src={IconCloseSvg}
      />

    </Container>
  );
}