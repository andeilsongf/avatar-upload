
import { HTMLAttributes, RefObject, useEffect, useState } from 'react';
import IconAlert from '../../assets/IconAlert.svg';

import {
  Container,
  Wrapper,
  Image,
  IconAlertSvg
} from './styles';

interface Props extends HTMLAttributes<HTMLDivElement> {
  error?: boolean;
  image?: File | null;
  imgRef?: RefObject<HTMLDivElement>;
}

export function Avatar({
  error,
  image,
  imgRef
}: Props) {

  const [path, setPath] = useState<string>('');

  useEffect(() => {
    if (image) {
      setPath(URL.createObjectURL(image));
    }
  }, []);

  return (
    <Container>
      <Wrapper>
        <Image error={error} url={path} ref={imgRef} >
          { error && <IconAlertSvg src={IconAlert} />}
        </Image>
      </Wrapper>

    </Container>
  );
}