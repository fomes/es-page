export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 500 : direction === "down" ? -500 : 0,
      opacity: 0,
      x: direction === "left" ? 500 : direction === "right" ? -500 : 0,
      transition: {
        type: "tween",
        duration: 1,
        delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },

    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
