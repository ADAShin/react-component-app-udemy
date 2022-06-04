import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from './Accordion';

export default {
  title: 'Example/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
);

export const Faqs = Template.bind({});
Faqs.args = {
  datas: [
    {
      title: 'タイトル1',
      content: 'タイトル1のコンテンツですよ',
    },
    {
      title: 'タイトル2',
      content: 'タイトル2のコンテンツですよ',
    },
  ],
};
