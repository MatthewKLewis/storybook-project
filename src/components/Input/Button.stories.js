import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
    .add('Primary', () => <Button label="Primary" type={'primary'} large/>)
    .add('Secondary', () => <Button label="Secondary" type={'secondary'}/>)
    .add('Tertiary', () => <Button label="Tertiary" type={'tertiary'}/>)
    .add('Quaternary', () => <Button label="Quaternary" type={'primary'} onClick={() => console.log('helloworld')}/>)