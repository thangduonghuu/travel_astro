import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface ImageShackProps {
  rotate?: number;
  y?: number;
  x?: number;
  duration?: number;
  ease: string;
  children: React.ReactNode;
}

const ImageShack = ({ rotate = 0, duration, ease, y = 0, x = 0, children }: ImageShackProps) => {
  const box = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(box.current, { rotation: rotate, duration, ease, y, x });
  });

  return (
    <div ref={box} className="image-shack">
      {children}
    </div>
  );
};

export default ImageShack;
