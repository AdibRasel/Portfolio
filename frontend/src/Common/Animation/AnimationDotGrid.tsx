import React from 'react';
import anime from 'animejs';

const Grid_Width = 20; // Set grid width
const Grid_Height = 10; // Set grid height

const AnimationDotGrid: React.FC = () => {
  const handleDotClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const index = Number(e.currentTarget.dataset.index); // Convert index to number

    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [Grid_Width, Grid_Height],
        from: index, // Use the converted index
      }),
    });
  };

  const dots: React.ReactNode[] = []; // Explicitly type the array
  let index = 0;

  for (let i = 0; i < Grid_Width; i++) {
    for (let j = 0; j < Grid_Height; j++) {
      dots.push(
        <div
          onClick={handleDotClick}
          className="d-inline-block cursor-pointer rounded-circle p-2 transition"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point rounded-circle bg-secondary opacity-50"
            style={{ width: '8px', height: '8px' }}
            data-index={index}
          ></div>
        </div>
      );
      index++;
    }
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${Grid_Width}, 1fr)`,
        gap: '5px', // Optional gap for better spacing
      }}
      className="m-auto"
    >
      {dots}
    </div>
  );
};

export default AnimationDotGrid;
