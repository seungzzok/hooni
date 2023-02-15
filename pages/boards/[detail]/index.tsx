import BoardCommentList from '@/src/components/units/boards/boardComment/list/BoardCommentList.container';
import BoardCommentWrite from "@/src/components/units/boards/boardComment/write/BoardCommentWrite.container";
import BoardDetail from "@/src/components/units/boards/detail/BoardDetail.container";

export default function DetailBoardPage() {
  return (
    <>
      <BoardDetail />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
