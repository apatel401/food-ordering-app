const CardShimmer = () => {
  return (
    <>
   <div className=" w-full h-44 bg-shimmer animate-pulse">
   </div>
   <div className="flex flex-wrap justify-center animate-pulse" data-testid="shimmer">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div className=" w-52 h-auto m-2.5 p-2.5" key={index}>
            <div className="w-full h-32 mb-3 bg-shimmer"></div>
            <div className="h-9 mb-3 bg-shimmer"></div>
            <div className="h-6 mb-3 bg-shimmer"></div>
            <div className="h-3 mb-3 bg-shimmer"></div>
          </div>
        ))}
    </div>
    </>
  );
};

export default CardShimmer;

