/**
 *
 * @param {left | center | right} postion @default center
 * @returns JSX
 */
const Title = ({ postion = "center", children }) => {
  switch (postion) {
    case "left":
      return (
        <h1 className="flex justify-start w-full text-5xl font-extrabold">
          {children}
        </h1>
      );

    case "right":
      return (
        <h1 className="flex justify-end w-full text-5xl font-extrabold">
          {children}
        </h1>
      );

    default:
      return (
        <h1 className="flex justify-center w-full text-5xl font-extrabold">
          {children}
        </h1>
      );
  }
};

export default Title;
