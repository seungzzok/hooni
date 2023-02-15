import * as S from "./BoardCommentWrite.styles";
import type { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <S.CommentWrite>
      <S.CommentHeader>
        <S.CommentInfoWrapper>
          <S.InfoInput
            type="text"
            placeholder="작성자"
            value={props.writer}
            onChange={props.onChangeWriter}
          ></S.InfoInput>
          <S.InfoInput
            type="password"
            placeholder="비밀번호"
            value={props.password}
            onChange={props.onChangePassword}
          ></S.InfoInput>
          <S.StarWrapper>
            <S.antdRate onChange={props.onChangeRate} value={props.rating} />
          </S.StarWrapper>
        </S.CommentInfoWrapper>
        <S.CloseBtn
          src="/comments/delete.png"
          onClick={props.onClickClose}
          isEdit={props.isEdit}
        ></S.CloseBtn>
      </S.CommentHeader>
      <S.CommentContentsWrapper>
        <S.CommentInput
          onChange={props.onChangeContents}
          maxLength={100}
          value={props.contents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        ></S.CommentInput>
        <S.ContentsFooter>
          <S.ContentsLength>0/100</S.ContentsLength>
          <S.SubmitBtn
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            isEdit={props.isEdit}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitBtn>
        </S.ContentsFooter>
      </S.CommentContentsWrapper>
    </S.CommentWrite>
  );
}
