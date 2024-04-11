import { useState } from 'react';
import cn, { type Argument as CSSClassAttribute } from 'classnames';
import '@/assets/sass/components/core/tab-bar.scss';

interface OptionItem {
  label: string;
  value: string | number;
  selected?: boolean;
}

interface Props {
  variant?: string;
  items: OptionItem[];
  className?: CSSClassAttribute;
}

export default ({ items, variant = 'secondary', className }: Props) => {
  const [options, setOptions] = useState(items);

  return (
    <div className={cn(['tab-bar', `tab-bar--${variant}`, className])}>
      <ul className="tab-bar__container">
        {options.map((item) => (
          <li
            className={cn(['tab-bar__item', { 'tab-bar__item--active': item.selected }])}
            key={item.value}
            onClick={() => {
              setOptions(
                options.map((option) => {
                  if (option.value === item.value) return { ...option, selected: true };
                  return { ...option, selected: false };
                }),
              );
            }}
          >
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
