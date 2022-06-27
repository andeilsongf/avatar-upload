import React, { ButtonHTMLAttributes } from 'react';

import {
  Container
} from './styles';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({
  children,
  ...props
}: Props) {
  return (
    <Container {...props}> {children}</Container>
  );
}