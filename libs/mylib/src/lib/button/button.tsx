import styles from './button.module.css';
import { Button as EButton } from '@primer/react';
import {ThemeProvider} from '@primer/react'

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: any) {


  return (
    <ThemeProvider>
      <EButton variant={props.variant || 'default'}>{props.name || 'DEFAULT NAME'}</EButton>
    </ThemeProvider>
  );
}

export default Button;
