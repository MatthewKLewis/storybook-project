import React from 'react';
import { storiesOf } from '@storybook/react';

import TextInput from './TextInput';

storiesOf('Text Input', module)
    .add('Primary', () => <TextInput label="Primary Placeholder" type={'primary'}/>)