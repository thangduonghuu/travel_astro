import type { ComponentPropsWithoutRef } from 'react';
import cn, { type Argument as CSSClassAttribute } from 'classnames';

import '@/assets/sass/components/core/link.scss';

type Props = ComponentPropsWithoutRef<'a'> & {
  light?: boolean;
  plain?: boolean;
  className?: CSSClassAttribute;
};

export default ({ light = false, plain = false, className, children, ...attrs }: Props) => {
  return (
    <a
      {...attrs}
      className={cn(['link', { 'link--light': light }, { 'link--plain': plain }, className])}
    >
      {children}
    </a>
  );
};
