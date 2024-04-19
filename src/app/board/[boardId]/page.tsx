import { Canvas } from "@/components/board/Canvas";
import { Loading } from "@/components/board/Loading";
import { Room } from "@/components/global/Room";
import Spinner from "@/components/global/Spinner";
interface BoardIdPageProps {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return (
    <Room
      roomId={params.boardId}
      fallback={
        <div className="h-full grid place-items-center">
          <Spinner />
        </div>
      }
    >
      <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default BoardIdPage;
