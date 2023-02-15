import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import type { ChangeEvent } from "react";
import { useState } from "react";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import {
  CREATE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentWrite.queries";

interface BoardCommentWriteProps {
  isEdit?: boolean;
  setIsEdit?: (args: boolean) => void;
}

export default function BoardCommentWrite(props: BoardCommentWriteProps) {
  const router = useRouter();

  // API 요청 함수 만들기
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  // 입력값 변수에 할당하기
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onChangeRate = (value: number) => {
    setRating(value);
  };

  const onClickSubmit = async () => {
    if (!writer) {
      alert("작성자를 입력하세요");
    } else if (!password) {
      alert("비밀번호를 입력하세요");
    } else if (!contents) {
      alert("내용을 입력하세요");
    } else {
      try {
        await createBoardComment({
          variables: {
            createBoardCommentInput: {
              writer,
              password,
              contents,
              rating,
            },
            boardId: router.query.detail,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { page: 1, boardId: router.query.detail },
            },
          ],
        });
        alert("등록완료");
        setWriter("");
        setPassword("");
        setContents("");
        setRating(0);
      } catch (error: any) {
        console.log(error.message);
      }
    }
  };

  const onClickUpdate = () => {
    alert("수정완료")
  };

  const onClickClose = () => {
    props.setIsEdit(false);
  };

  return (
    <BoardCommentWriteUI
      writer={writer}
      password={password}
      contents={contents}
      rating={rating}
      isEdit={Boolean(props.isEdit)}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onChangeRate={onChangeRate}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onClickClose={onClickClose}
    />
  );
}
