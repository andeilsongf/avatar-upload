import { RefObject, useRef } from 'react';
import { Avatar } from '../Avatar';
import { AvatarInformation } from '../AvatarInformation';

import {
  Container
} from './styles';

interface Props {
  imageFile: File | null;
  inputRef: RefObject<HTMLInputElement>;
  onChangeInput: (ev: React.FormEvent<HTMLInputElement>) => void;
}

export function SavedAvatar({
  imageFile,
  inputRef,
  onChangeInput,
}: Props) {

  const imgRef = useRef<HTMLDivElement>(null);

  return (
    <Container>
      <Avatar image={imageFile} imgRef={imgRef} />
      <AvatarInformation inputRef={inputRef} onChangeInput={onChangeInput} />
    </Container>
  );
}