import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';


let heartIcon = new Image();
heartIcon.src = '../icons/heart.svg'


storiesOf('Button', module)
    .add('Primary', () => <Button label="Do something" type={'primary'}/>)
    .add('Danger', () =>  <Button label="Danger" type={'danger'}/>)
    .add('Success', () =>  <Button label="Success" type={'success'}/>)
    .add('Warning', () => <Button label="Warning" type={'warning'} />)
    .add('Default', () => <Button label="Default" type={'default'} />)
    .add('Large', () =>   <Button label="Large" type={'primary'} large/>)
    .add('Deactivated', () => <Button label="Deactivated" type={'primary'} deactivated/>)
    .add('Outline', () => <Button label="Outline" type={'primary'} outline/>)
    .add('Add to Cart', () => <Button label="Add to Cart 🛒" type={'primary'} cart/>)
    .add('Add to Favorites', () => <Button label="Add to Favorites 💙" type={'primary'} image={heartIcon}/>)
    .add('Cart Icon', () => <Button label="💙" type={'primary'} cart/>)
    .add('Function', () =><Button label="Functional" type={'primary'} onClick={() => alert(`You didn't believe me?`)}/>)