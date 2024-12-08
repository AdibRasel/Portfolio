import anime from 'animejs';




const Grid_Width = 200;
const Grid_Height = 20;

const AnimationDotGrid = () => {
  const handleDotClick = (e: any) => {
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
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
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
    <>
      <div
        style={{ display: 'grid', gridTemplateColumns: `repeat(${Grid_Width}, 1fr)` }}
        className="m-auto"
      >
        {dots}
      </div>
    </>
  );
}
export default AnimationDotGrid