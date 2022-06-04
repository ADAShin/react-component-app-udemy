import { FC, useState } from 'react';
import { Button } from '../Button/Button';

type EventType = 'ADD' | 'SUB';

type Props = {
  color?: string;
};

export const Counter: FC<Props> = ({ color }) => {
  const [count, setCount] = useState(0);
  const handleOnClick = (evtType: EventType) => {
    if (evtType === 'ADD') {
      console.log('add button click');
      setCount((prev) => prev + 1);
      return;
    }
    console.log('sub button click');
    setCount((prev) => prev - 1);
  };
  return (
    <>
      <span style={{ color }}>Counter:{count}</span>
      <br />
      <Button
        primary
        onClick={() => handleOnClick('ADD')}
        backgroundColor="#288608"
        label="+"
      />
      <Button
        primary
        onClick={() => handleOnClick('SUB')}
        backgroundColor="#288608"
        label="-"
      />
    </>
  );
};
