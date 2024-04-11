import cn, { type Argument as CSSClassAttribute } from 'classnames';

import '@/assets/sass/components/core/radio-group.scss';

interface RadioItem {
  label: string;
  value: string | number;
  selected?: boolean;
}

interface Props {
  name: string;
  items: RadioItem[];
  light?: boolean;
  column?: boolean;
  className?: CSSClassAttribute;
  itemClassName?: CSSClassAttribute;
}

export default ({
  name,
  items,
  light = false,
  column = false,
  className,
  itemClassName,
}: Props) => {
  return (
    <div
      className={cn([
        'radio-group',
        { 'radio-group--light': light },
        { 'radio-group--column': column },
        className,
      ])}
    >
      {items.map((item) => (
        <label key={item.value} className={cn(['radio-group__item', itemClassName])}>
          <input
            type="radio"
            className="radio-group__input"
            name={name}
            value={item.value}
            {...{ checked: !!item.selected, onChange: () => {} }}
          />
          <span className="radio-group__box"></span>
          <span className="radio-group__label">{item.label}</span>
        </label>
      ))}
    </div>
  );
};
