import * as S from "./BoardDetail.styles";
import { getDate } from "@/src/commons/utils/utils";
import type { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <>
      <S.Page>
        <S.Header>
          <S.ProfileWrapper>
            <S.ProfileImg src="/detail/profile.png"></S.ProfileImg>
            <S.ProfileSmallWrapper>
              <S.ProfileTxt>{props.data?.fetchBoard.writer}</S.ProfileTxt>
              <S.Date>{getDate(props.data?.fetchBoard.createdAt)}</S.Date>
            </S.ProfileSmallWrapper>
          </S.ProfileWrapper>
          <S.HeaderBtns>
            <S.LinkBtn src="/detail/link.png"></S.LinkBtn>
            <S.LocationTooltip
            placement="topRight"
            title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}>
              <S.LocationBtn src="/detail/location.png"></S.LocationBtn>
            </S.LocationTooltip>
          </S.HeaderBtns>
        </S.Header>
        <S.Line></S.Line>
        <S.Contents>
          <S.ContentsTitle>{props.data?.fetchBoard.title}</S.ContentsTitle>
          {/* <S.ContentsImg>이미지</S.ContentsImg> */}
          <S.ContentsTxt>{props.data?.fetchBoard.contents}</S.ContentsTxt>
          {/* <S.ContentsVideo>비디오</S.ContentsVideo> */}
          <S.ContentsBtnsWrapper>
            <S.ContentsBtnWrapper>
              <S.ContentsBtn>
                <img src="/detail/good.png"></img>
              </S.ContentsBtn>
              <S.ContentsBtnCnt>1920</S.ContentsBtnCnt>
            </S.ContentsBtnWrapper>
            <S.ContentsBtnWrapper>
              <S.ContentsBtn>
                <img src="/detail/bad.png"></img>
              </S.ContentsBtn>
              <S.ContentsBtnCnt>1920</S.ContentsBtnCnt>
            </S.ContentsBtnWrapper>
          </S.ContentsBtnsWrapper>
        </S.Contents>
      </S.Page>
      <S.PageEditBtnWrapper>
        <S.PageEditBtn onClick={props.onClickGoToList}>목록으로</S.PageEditBtn>
        <S.PageEditBtn onClick={props.onClickUpdate}>수정하기</S.PageEditBtn>
        <S.PageEditBtn onClick={props.onClickDelete}>삭제하기</S.PageEditBtn>
      </S.PageEditBtnWrapper>
      <S.CommentLine></S.CommentLine>
      <S.CommentTitleWrapper>
        <img src="/detail/comment.png"></img>
        <S.CommentTitle>댓글</S.CommentTitle>
      </S.CommentTitleWrapper>
    </>
  );
}
