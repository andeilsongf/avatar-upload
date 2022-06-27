import { DragEvent, useRef, useState } from 'react';
import { AvatarInformation } from './components/AvatarInformation';
import { SavedAvatar } from './components/SavedAvatar';
import { ScaleAvatar } from './components/ScaleAvatar';
import { UploadHasFailed } from './components/UploadHasFailed';

import {
  Container
} from './styles';

export function App() {

  const [avatar, setAvatar] = useState<File | null>(null);
  const [isError, setError] = useState(false);

  const [isSaved, setIsSaved] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const onClickContainer = () => {
    inputRef.current?.click();
  };

  const imageIsValid = (image?: File) => {
    const validFormats = ['image/jpeg', 'image/jpg', 'image/png'];

    if (!image) return false;

    return validFormats.includes(image.type);
  };

  const onUpdateStatus = (image?: File) => {
    if (image && imageIsValid(image)) {
      setAvatar(image);
      setIsSaved(false);
    }

    setError(!imageIsValid(image));
    
  };

  const dropAvatar = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const image = event.dataTransfer?.files[0];
    onUpdateStatus(image);
  };

  const onChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    const selectedFile = (event.target as HTMLInputElement).files![0];

    onUpdateStatus(selectedFile);
  };

  const renderChild = () => {
    if (isError) return <UploadHasFailed />;

    if (!isError && !avatar)
      return (
        <AvatarInformation
          onChangeInput={onChangeInput}
        />
      );

    if (!isError && avatar && !isSaved)
      return (
        <ScaleAvatar
          imageFile={avatar}
          isError={isError}
          setIsSaved={setIsSaved}
        />
      );
    return (
      <SavedAvatar
        imageFile={avatar}
        inputRef={inputRef}
        onChangeInput={onChangeInput}
      />
    );
  };

  return (
    <Container
      image={avatar}
      isError={isError}
      isSaved={isSaved}
      onClick={onClickContainer}
      onDrop={dropAvatar}
    >
      
      {renderChild()}

    </Container>
  )

}