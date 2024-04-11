import cn, { type Argument as CSSClassAttribute } from 'classnames';

import '@/assets/sass/components/core/icon.scss';

interface Props {
  name: string;
  size?: 'small' | 'medium' | 'large' | 'custom';
  inline?: boolean;
  className?: CSSClassAttribute;
}

function getSVG(name: string) {
  const filepath = `/src/assets/icons/${name}.svg`;
  const files = import.meta.glob<string>('/src/assets/icons/*.svg', {
    as: 'raw',
    eager: true,
  });

  if (!(filepath in files)) {
    throw new Error(`${filepath} not found`);
  }

  return files[filepath];
}

export default ({ name, size = 'medium', inline = false, className }: Props) => {
  const svgContent = getSVG(name);
  return (
    <i
      className={cn(
        'icon',
        { [`icon--${size}`]: size !== 'custom', 'icon--inline': inline },
        className,
      )}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};
