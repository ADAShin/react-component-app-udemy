import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Rating } from './Rating';

export default {
  title: 'Example/Rating',
  component: Rating,
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const FiveStar = Template.bind({});
FiveStar.args = {
  number: 5,
};
