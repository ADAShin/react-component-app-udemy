import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { Primary } from './Button.stories';

test('should render Button', () => {
  render(<Button label="テスト" />);
  const btnElm = screen.getByRole('button');
  expect(btnElm).toBeInTheDocument();
  expect(btnElm).toHaveTextContent('テスト');
});

test('should render Primiary Buuton', () => {
  render(<Primary {...Primary.args} label="hoge" />);
  const btnElm = screen.getByRole('button');
  expect(btnElm).toBeInTheDocument();
  expect(btnElm).toHaveClass('storybook-button--primary');
});
