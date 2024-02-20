const NoFavorites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mt-6">No favorite boards</h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Try favoriting a board
      </p>
    </div>
  );
};

export default NoFavorites;
