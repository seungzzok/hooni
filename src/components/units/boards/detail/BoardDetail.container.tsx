import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "@/src/commons/types/generated/types";
import { useMutation, useQuery } from "@apollo/client";
// import { useState } from "react";
import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
  const router = useRouter();
  const boardId = router.query.detail;

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query.detail),
      },
    }
  );

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickGoToList = () => {
    void router.push("/boards");
  };

  const onClickUpdate = () => {
    void router.push(`/boards/${boardId}/edit`);
  };

  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: {
          boardId,
        },
      });
      alert(`삭제되었습니다`);

      onClickGoToList();
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <BoardDetailUI
      data={data}
      onClickGoToList={onClickGoToList}
      onClickUpdate={onClickUpdate}
      onClickDelete={onClickDelete}
    />
  );
}
