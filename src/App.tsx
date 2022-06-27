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
    
  }

  const reset = () => {
    setAvatar(null);
    setError(false);
    setIsSaved(false);
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

  const dragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const dragEnter = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const dragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const renderChild = () => {
    if (isError) return <UploadHasFailed reset={reset} />;

    if (!isError && !avatar)
      return (
        <AvatarInformation
          inputRef={inputRef}
          onChangeInput={onChangeInput}
        />
      );

    if (!isError && avatar && !isSaved)

      return (
        <ScaleAvatar
          imageFile={avatar}
          isError={isError}
          setIsSaved={setIsSaved}
          reset={reset}
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
    <div style={{ height: "100vh", alignItems: "center", justifyContent: "center", display: 'flex'}}>
      <Container
        image={avatar}
        isError={isError}
        isSaved={isSaved}
        onClick={onClickContainer}
        onDrop={dropAvatar}
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
      >
        {renderChild()}

      </Container>
    </div>
  )

}