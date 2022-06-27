
import IconAlert from '../../assets/IconAlert.svg';

import {
  Container,
  Wrapper,
  Image,
  IconAlertSvg
} from './styles';

export function Avatar() {
  return (
    <Container>
      <Wrapper>
        <Image>
           <IconAlertSvg 
              src={IconAlert}
           />
        </Image>
      </Wrapper>

    </Container>
  );
}