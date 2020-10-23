import React from 'react';
import { storiesOf } from '@storybook/react';

import Thumbnail from './Thumbnail';

storiesOf('Thumbnail', module)
    .add('Default', () => <Thumbnail label="Primary Placeholder" type={'primary'}/>)