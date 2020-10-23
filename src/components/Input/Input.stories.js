import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from './Input';

storiesOf('Input', module)
    .add('Text', () => <Input label="Text Input:" placeholder="Placeholder" type={'text'}/>)
    .add('Select', () => <Input label="Select Menu:" type={'select'}/>)
    .add('Number', () => <Input label="Number Clicker:" type={'number'} min={'2'} max={'10'} value={'5'}/>)
    .add('With Button', () => <Input label="Text and Button:" type={'button'}/>)
    .add('Checkbox', () => <Input label="Checkbox:" type={'check'}/>)