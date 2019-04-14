import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { KonuxButton, KonuxPrimaryButton } from './KonuxButton';

storiesOf('KonuxButton', module)
  .add('Base Button', () => <KonuxButton onClick={action('clicked')} aria-label="Base Button Aria Label">Base Button</KonuxButton>)
  .add('Primary Button', () => <KonuxPrimaryButton onClick={action('clicked')} aria-label="Primary Button Aria Label">Primary Button</KonuxPrimaryButton>);
  ;
