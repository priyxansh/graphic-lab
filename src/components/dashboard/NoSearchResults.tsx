const NoSearchResults = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mt-6">No results found</h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Try searching for something else
      </p>
    </div>
  );
};

export default NoSearchResults;
