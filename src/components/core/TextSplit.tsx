import { useEffect, useLayoutEffect, useRef } from 'react';
import cn, { type Argument as CSSClassAttribute } from 'classnames';
import SplitType from 'split-type';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '@/assets/sass/components/core/textsplit.scss';

interface TextSplitProps {
  content: string;
  className?: string;
}

const TextSplit = ({ className, content = '' }: TextSplitProps) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const split = new SplitType(textRef.current);
      gsap.to('.char', {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
      });
    }
  }, []);

  return (
    <div id="text-split" className={cn(['text-split', className])} ref={textRef}>
      {content}
    </div>
  );
};

export default TextSplit;
