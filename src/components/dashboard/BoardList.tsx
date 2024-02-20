"use client";

import NoBoards from "./NoBoards";
import NoFavorites from "./NoFavorites";
import NoSearchResults from "./NoSearchResults";

type BoardListProps = {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
};

const BoardList = ({ orgId, query }: BoardListProps) => {
  // TODO: Fetch boards
  const data = [];

  if (!data?.length && query.search) {
    return <NoSearchResults />;
  }

  if (!data?.length && query.favorites) {
    return <NoFavorites />;
  }

  if (!data?.length) {
    return <NoBoards />;
  }

  return <div>{JSON.stringify(query)}</div>;
};

export default BoardList;
