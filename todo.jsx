import React, {useState} from 'react';

export const TodoItems = props => {
  const [className, setClassName] = useState('todo');
  const leave = () => {
    setClassName('todo leave');
    setTimeout(() => props.click(props.name), 300);
  };
  return (
    <li className={className}>
      {props.name} (<a onClick={leave}>X</a>)
    </li>
  );
};
