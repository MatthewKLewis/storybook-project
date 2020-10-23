import React from 'react';
import { storiesOf } from '@storybook/react';

import Inline from './Inline';

storiesOf('Inline', module)
    .add('Default', () => <Inline label="Primary" type={'primary'}/>)