import { RefObject } from 'react';
import PictureIconSvg from '../../assets/IconPicture.svg';

import {
  Container,
  Wrapper,
  PictureIcon,
  Title,
  Description,
  InputArea,
} from './styles';

interface Props {
  inputRef?: RefObject<HTMLInputElement>;
  onChangeInput: (ev: React.FormEvent<HTMLInputElement>) => void;
}

export function AvatarInformation({
  inputRef,
  onChangeInput
}: Props) {
  return (
    <Container>
      <Wrapper>
        <PictureIcon
          src={PictureIconSvg}
        />
        <Title>Organization Logo</Title>
      </Wrapper>
      <Description>Drop the image here or click to browse.</Description>
      <InputArea 
        ref={inputRef}
        type='file'
        accept='image/png, image/jpeg, image/jpg'
        onChange={onChangeInput}
      />
    </Container>
  );
}