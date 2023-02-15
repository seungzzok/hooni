import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.quries";
import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import type { MouseEvent } from "react";
import type {
  IQuery,
  IQueryFetchBoardArgs,
  IQueryFetchBoardsCountArgs,
} from "@/src/commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();

  const [startindex, setStartindex] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardArgs
  >(FETCH_BOARDS);

  const { data: dateCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);
  const count = dateCount?.fetchBoardsCount


  const onClickDetail = (event: MouseEvent<HTMLButtonElement>) => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };

  const onClickEnroll = () => {
    void router.push("/boards/new");
  };

  return (
    <BoardListUI
      data={data}
      refetch={refetch}
      count={count}
      startindex={startindex}
      setStartindex={setStartindex}
      onClickDetail={onClickDetail}
      onClickEnroll={onClickEnroll}
    />
  );
}
