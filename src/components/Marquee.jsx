import { useEffect, useRef, useState } from 'react';

export function Marquee({ children, className = '', pauseOnHover = false, repeat = 2, reverse = false }) {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marquee = marqueeRef.current;
    const firstChild = marquee.firstChild;

    if (!firstChild) return;

    // Clone children based on repeat count
    const childWidth = firstChild.offsetWidth;
    const containerWidth = marquee.parentElement.offsetWidth;

    // Calculate how many copies we need to fill the screen and provide seamless loop
    const neededCopies = Math.max(repeat, Math.ceil(containerWidth / childWidth) + 2);

    // Clear existing clones
    while (marquee.children.length > 1) {
      marquee.removeChild(marquee.lastChild);
    }

    // Add clones
    for (let i = 1; i < neededCopies; i++) {
      const clone = firstChild.cloneNode(true);
      marquee.appendChild(clone);
    }
  }, [repeat, children]);

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) setIsPaused(false);
  };

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={marqueeRef}
        className={`flex ${isPaused ? '' : reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{
          width: 'max-content',
          animationPlayState: isPaused ? 'paused' : 'running'
        }}
      >
        <div className="flex shrink-0">
          {children}
        </div>
      </div>
    </div>
  );
}
