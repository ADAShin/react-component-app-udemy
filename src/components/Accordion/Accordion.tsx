import { FC, useState, useRef } from 'react';
import classNames from 'classnames';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

import './Accordion.css';

export type TData = {
  title: string;
  content: string;
};

type AccodionItemProps = TData;

const AccordionItem: FC<AccodionItemProps> = ({ title, content }) => {
  const [isActive, setActive] = useState(false);
  const contentElm = useRef<HTMLDivElement>(null);
  return (
    <div className="accordion-item">
      <div
        className={classNames('accordion-title', { active: isActive })}
        onClick={() => setActive(!isActive)}
      >
        <div className="title">{title}</div>
        <div className="icon">
          {isActive ? <BsChevronDown /> : <BsChevronUp />}
        </div>
      </div>
      <div
        ref={contentElm}
        className={classNames('accordion-content', { active: isActive })}
        style={{
          height: isActive ? contentElm.current?.scrollHeight : '0px',
        }}
      >
        {content}
      </div>
    </div>
  );
};

type AccordionProps = {
  datas: TData[];
};

export const Accordion: FC<AccordionProps> = ({ datas }) => {
  return (
    <div className="accordion-section">
      {datas.map((data) => (
        <AccordionItem title={data.title} content={data.content} />
      ))}
    </div>
  );
};
