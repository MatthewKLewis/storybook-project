import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
    .add('Primary', () => <Button label="Primary" type={'primary'} large/>)
    .add('Danger', () =>  <Button label="Danger" type={'danger'}/>)
    .add('Success', () =>  <Button label="Success" type={'success'}/>)
    .add('Warning', () => <Button label="Warning" type={'warning'} />)
    .add('Default', () => <Button label="Default" type={'default'} />)
    .add('Large', () =>   <Button label="Large" type={'primary'} />)
    .add('Function', () =><Button label="Functional" type={'primary'} onClick={() => console.log('helloworld')}/>)