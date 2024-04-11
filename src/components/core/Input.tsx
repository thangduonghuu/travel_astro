import type { ComponentPropsWithoutRef, ElementType } from 'react';
import cn, { type Argument as CSSClassAttribute } from 'classnames';
import '@/assets/sass/components/core/input.scss';

type Props<C extends ElementType> = ComponentPropsWithoutRef<C> & {
  as?: C;
  variant?: 'primary' | 'secondary' | 'tertiary';
  light?: boolean;
  placeholder: string;
  className?: CSSClassAttribute;
};

const Input = <C extends ElementType>({
  as,
  variant = 'primary',
  light = false,
  placeholder,
}: Props<C>) => {
  const Component = as || 'input';
  return (
    <Component
      className={cn(['input', { 'button-textarea': as === 'textarea' }])}
      placeholder={placeholder}
    />
  );
};

export default Input;
