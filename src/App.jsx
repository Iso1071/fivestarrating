import FiveStarRating from "./FiveStarRating";

const App = () => {
  return (
    <div>
      <FiveStarRating />
      <FiveStarRating value={2} />
      <FiveStarRating value={5} />
      <FiveStarRating value={3} disabled />
      <FiveStarRating disabled />
    </div>
  );
};
export default App;
