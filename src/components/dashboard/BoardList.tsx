"use client";

import { useQuery } from "convex/react";
import NoBoards from "./NoBoards";
import NoFavorites from "./NoFavorites";
import NoSearchResults from "./NoSearchResults";
import { api } from "../../../convex/_generated/api";
import Spinner from "../global/Spinner";
import NewBoardButton from "./NewBoardButton";
import BoardCard from "./BoardCard/BoardCard";

type BoardListProps = {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
};

const BoardList = ({ orgId, query }: BoardListProps) => {
  // TODO: Fetch boards
  const data = useQuery(api.boards.get, { orgId });

  if (data === undefined) {
    return <Spinner className="grid place-items-center" />;
  }

  if (!data?.length && query.search) {
    return <NoSearchResults />;
  }

  if (!data?.length && query.favorites) {
    return <NoFavorites />;
  }

  if (!data?.length) {
    return <NoBoards />;
  }

  return (
    <div className="flex-grow w-full">
      <h2 className="text-2xl font-semibold">
        {query.favorites ? "Favorite boards" : "Team boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        <NewBoardButton orgId={orgId} />
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={false}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardList;
