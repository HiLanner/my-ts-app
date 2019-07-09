import * as React from 'react'
import './Hello.css';

export interface Props {
  name: string;
  enthrusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Hello({name, enthrusiasmLevel = 3, onIncrement, onDecrement}: Props) {
  if (enthrusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D')
  }
  return (
    <div className='hello'>
      <div className='greeting'>
        Hello {name + getExclamationMarks(enthrusiasmLevel)}
      </div>
      <p>enthrusiasmLevel = {enthrusiasmLevel}</p>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  )
}

export default Hello;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!')
}