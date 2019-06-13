import React, {useState} from 'react';

export const TodoItems = props => {
  const [className, setClassName] = useState('todo');
  const remove = () => setClassName('todo leave');
  return (
    <li className={className} onAnimationEnd={() => className.includes('leave') && props.click(props.name)}>
      {props.name} (<a onClick={remove}>X</a>)
    </li>
  );
};
