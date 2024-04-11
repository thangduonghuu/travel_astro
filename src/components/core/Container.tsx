import type { PropsWithChildren } from 'react';
import cn, { type Argument as CSSClassAttribute } from 'classnames';

import '@/assets/sass/components/core/container.scss';

type Props = PropsWithChildren & {
  size?: 'small' | 'large';
  className?: CSSClassAttribute;
};

export default function ({ size = 'large', className, children }: Props) {
  return <div className={cn('container', `container--${size}`, className)}>{children}</div>;
}
