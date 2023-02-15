import type {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "@/src/commons/types/generated/types";
import type { MouseEvent } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_BOARD_COMMENTS,
  DELETE_BOARD_COMMENT,
} from "./BoardCommentList.queries";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import { Modal } from "antd";
import InfiniteScroll from "react-infinite-scroller";

export default function BoardCommentList() {
  const router = useRouter();
  // const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // API 요청 함수 만들기
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.detail),
    },
  });

  const onLoadMore = async () => {
    if (!data) return;
    await fetchMore({
      variables: {
        page: Math.ceil(data?.fetchBoardComments.length / 10) + 1,
        boardId: String(router.query.detail),
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoardComments) {
          return {
            fetchBoards: [...prev.fetchBoardComments],
          };
        }
        return {
          fetchBoards: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  // 모달 기능
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  // const handleOk = () => {
  //   toggleModal();
  // }

  // 버튼 기능 만들기
  const onClickDelete = async (event: MouseEvent<HTMLImageElement>) => {
    const password = prompt("비밀번호를 입력하세요");
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { page: 1, boardId: router.query.detail },
          },
        ],
      });

      Modal.success({
        content: "삭제 완료하였습니다",
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
      <BoardCommentListUI
        data={data}
        isModalOpen={isModalOpen}
        onClickDelete={onClickDelete}
        toggleModal={toggleModal}
      />
    </InfiniteScroll>
  );
}
