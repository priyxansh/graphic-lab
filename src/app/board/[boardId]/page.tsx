import { Canvas } from "@/components/board/Canvas";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({
  params,
}: BoardIdPageProps) => {
  return (
    <Canvas boardId={params.boardId} />
  );
};

export default BoardIdPage;
