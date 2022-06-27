import PictureIconSvg from '../../assets/IconPicture.svg';

import {
  Container,
  Wrapper,
  PictureIcon,
  Title,
  Description,
  InputArea,
} from './styles';

export function AvatarInformation() {
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
        onChange={() => {}}
        accept="image/jpg, image/png"
        type="file"
      />
    </Container>
  );
}