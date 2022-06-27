import Slider from '@mui/material/Slider'
import { useEffect, useRef } from 'react';

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
  handleSliderChange: (
    event: React.ChangeEvent<unknown>,
    value: number | number[]
  ) => void;
  isError: boolean;
  zoom: number;
  imageFile: File | null;
  setIsSaved: (value: boolean) => void;
  reset: () => void;
}

export function ScaleAvatar({
  isError,
  imageFile,
  setIsSaved,
  reset,
  handleSliderChange,
  zoom,
}: Props) {

  const imgRef = useRef<HTMLDivElement>(null);

  const setZoom = (zoom: number) => {
    imgRef.current?.style.setProperty(
      'transform',
      `scale(${zoom > 1 ? 1 + zoom / 10 : 1})`
    );
  };

  useEffect(() => {
    setZoom(zoom);
  }, [zoom]);

  const handleSaveButtonClick = () => setIsSaved(true);

  return (
    <Container>
      <Avatar error={isError} image={imageFile} imgRef={imgRef} />
      <ScaleWrapper>
        <Title>Crop</Title>

        <Slider 
          value={zoom}
          onChange={handleSliderChange}
          min={1}
          max={10}
          aria-label='Slider'
        />

        <Button onClick={handleSaveButtonClick}>Save</Button>

      </ScaleWrapper>

      <CloseButton
        onClick={reset}
        src={IconCloseSvg}
        aria-label='Close'
      />

    </Container>
  );
}