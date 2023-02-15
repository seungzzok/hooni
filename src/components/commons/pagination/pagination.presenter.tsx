import * as S from "./pagination.styles";
import type { IPaginationUIProps } from "./pagination.types";

export default function PaginationUI(props: IPaginationUIProps) {
  return (
    <S.PaginationWrapper>
      <S.SwitchBtn
        src="/pagination/prev.png"
        onClick={props.onClickPrev}
      ></S.SwitchBtn>
      {Array(10)
        .fill(1)
        .map(
          (_, index) =>
            index + props.startPage <= props.lastPage && (
              <S.Page
                key={index + props.startPage}
                id={String(index + props.startPage)}
                onClick={props.onClickPage}
                isActive = {index + props.startPage === props.activedPage}
              >
                {index + props.startPage}
              </S.Page>
            )
        )}
      <S.SwitchBtn
        src="/pagination/next.png"
        onClick={props.onClickNext}
      ></S.SwitchBtn>
    </S.PaginationWrapper>
  );
}
