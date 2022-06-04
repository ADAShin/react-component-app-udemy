import { FC, useState } from 'react';
import { FaStar } from 'react-icons/fa';

import './Rating.css';

type StarProps = {
  selected: boolean;
  onSelect: () => void;
};

const Star: FC<StarProps> = ({ selected, onSelect = () => {} }) => (
  <FaStar
    className="star"
    color={selected ? '#FFCB45' : '#F2F2F2'}
    onClick={onSelect}
  />
);

type RatingProps = {
  number: number;
};

export const Rating: FC<RatingProps> = ({ number = 5 }) => {
  const [selected, setSelected] = useState(-1);
  return (
    <>
      {[...Array(number)].map((n, i) => (
        <Star
          key={i}
          onSelect={() => setSelected(i + 1)}
          selected={i < selected}
        />
      ))}
    </>
  );
};
