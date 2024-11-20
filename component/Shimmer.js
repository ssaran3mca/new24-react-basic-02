const Shimmer = () => {
  return (
    <div className="container">
      <div className="row">
        {Array(8)
          .fill()
          .map((_, index) => (
            <MoreDiv key={index} />
          ))}
      </div>
    </div>
  );
};
const MoreDiv = () => {
  return (
    <div className="col-sm-3">
      <div className="shimmer-m">
        <div className="shimmer-sub">
          <div className="shimmer_f"></div>
          <div className="shimmer_m"></div>
          <div className="shimmer_l"></div>
        </div>
      </div>
    </div>
  );
};
export default Shimmer;
