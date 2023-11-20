import Ster from "./Ster";

const FiveStarRating = ({ value, disabled }) => {
  const result = [];

  console.log(value);

  for (let i = 0; i < 5; i++) {
    result.push(<Ster key={i} selected={i < value} disabled={disabled} />);
  }

  return <div>{result}</div>;
};
export default FiveStarRating;
