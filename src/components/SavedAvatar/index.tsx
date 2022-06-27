import { RefObject, useEffect, useRef } from 'react';
import { Avatar } from '../Avatar';
import { AvatarInformation } from '../AvatarInformation';

import {
  Container
} from './styles';

interface Props {
  imageFile: File | null;
  inputRef: RefObject<HTMLInputElement>;
  onChangeInput: (ev: React.FormEvent<HTMLInputElement>) => void;
  zoom: number;
}

export function SavedAvatar({
  imageFile,
  inputRef,
  onChangeInput,
  zoom,
}: Props) {

  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    imgRef.current?.style.setProperty(
      'transform',
      `scale(${1 + zoom / 15})`
    );
  }, []);

  return (
    <Container>
      <Avatar image={imageFile} imgRef={imgRef} />
      <AvatarInformation inputRef={inputRef} onChangeInput={onChangeInput} />
    </Container>
  );
}