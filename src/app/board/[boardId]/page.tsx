import { Canvas } from "@/components/board/Canvas";
import { Loading } from "@/components/board/Loading";
import { Room } from "@/components/global/Room";
interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({
  params,
}: BoardIdPageProps) => {


  return (
    <Room roomId={params.boardId} fallback={<div>Loading...</div>}>
    <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default BoardIdPage;
