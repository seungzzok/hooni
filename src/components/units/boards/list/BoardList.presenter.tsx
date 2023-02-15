import * as S from "./BoardList.styles";
import { getDate } from "@/src/commons/utils/utils";
import type { IBoardListUIProps } from "./BoardList.types";
import Pagination from "@/src/components/commons/pagination/pagination.container";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <>
      <S.SearchWrapper>
        <S.SearchInputWrapper>
          <S.SearchIcon src="/list/search.png"></S.SearchIcon>
          <S.SearchInput placeholder="제목을 검색해주세요"></S.SearchInput>
        </S.SearchInputWrapper>
        <S.DateFilterInput placeholder="YYYY.MM.DD"></S.DateFilterInput>
        <S.SearchBtn>검색하기</S.SearchBtn>
      </S.SearchWrapper>
      <S.List>
        <S.ListHeader>
          <S.ColumnNum>번호</S.ColumnNum>
          <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
          <S.ColumnWriter>작성자</S.ColumnWriter>
          <S.ColumnCreatedAt>날짜</S.ColumnCreatedAt>
        </S.ListHeader>
        {props.data?.fetchBoards.map((el, index) => (
          <S.Row key={el._id}>
            <S.ColumnNum>{index + props.startindex}</S.ColumnNum>
            <S.ColumnTitle onClick={props.onClickDetail} id={el._id}>
              {el.title}
            </S.ColumnTitle>
            <S.ColumnWriter>{el.writer}</S.ColumnWriter>
            <S.ColumnCreatedAt>{getDate(el.createdAt)}</S.ColumnCreatedAt>
          </S.Row>
        ))}
      </S.List>
      <S.Footer>
        <Pagination
          refetch={props.refetch}
          setStartindex={props.setStartindex}
          count={props.count}
        />
        <S.EnrollBtnWrapper>
          <img src="/list/pencil.png"></img>
          <S.EnrollBtn onClick={props.onClickEnroll}>
            게시물 등록하기
          </S.EnrollBtn>
        </S.EnrollBtnWrapper>
      </S.Footer>
    </>
  );
}
