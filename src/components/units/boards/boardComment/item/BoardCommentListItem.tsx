import * as S from "../list/BoardCommentList.styles";
import { getDate } from "@/src/commons/utils/utils";
import type { MouseEvent } from "react";
import { useState } from "react";
import BoardCommentWrite from "../write/BoardCommentWrite.container";

interface BoardCommentListItemProps {
  el: any;
  onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
}

export default function BoardCommentListItem(props: BoardCommentListItemProps) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  return (
    <>
      {!isEdit && (
        <S.CommentListWrapper id={String(props.el._id)}>
          <S.CommentInfoWrapper>
            <S.ProfileImg src="/comments/profile.png"></S.ProfileImg>
            <S.CommentTxtWrapper>
              <S.WriterStarWrapper>
                <S.Writer>{props.el.writer}</S.Writer>
                <S.Star disabled defaultValue={props.el.rating} />
              </S.WriterStarWrapper>
              <S.CommentContents>{props.el.contents}</S.CommentContents>
              <S.CreatedAt>{getDate(props.el.createdAt)}</S.CreatedAt>
            </S.CommentTxtWrapper>
          </S.CommentInfoWrapper>
          <S.BtnWrapper>
            <S.Btn
              src="/comments/pencil.png"
              id={props.el._id}
              onClick={onClickUpdate}
            ></S.Btn>
            <S.Btn
              src="/comments/delete.png"
              id={props.el._id}
              onClick={props.onClickDelete}
            ></S.Btn>
          </S.BtnWrapper>
        </S.CommentListWrapper>
      )}
      {isEdit && <BoardCommentWrite isEdit={isEdit} setIsEdit={setIsEdit} />}
    </>
  );
}
