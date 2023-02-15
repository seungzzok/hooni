import type { MouseEvent } from "react";
import { useState } from "react";
import PaginationUI from "./pagination.presenter";
import type { IPaginationProps } from "./pagination.types";

export default function Pagination(props: IPaginationProps) {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setActivedPage] = useState(1);

  const lastPage = Math.ceil(Number(props.count) / 10);

  const onClickPage = (event: MouseEvent<HTMLButtonElement>) => {
    const page = Number(event.currentTarget.id);
    setActivedPage(page);
    props.refetch({ page });
    props.setStartindex(page * 10 - 9);
  };

  const onClickPrev = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setActivedPage(startPage - 10);
    props.refetch({ page: startPage - 10 });
    props.setStartindex((startPage - 11) * 10 + 1);
  };

  const onClickNext = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setActivedPage(startPage + 10);
      props.refetch({ page: startPage + 10 });
      props.setStartindex((startPage + 9) * 10 + 1);
    }
  };

  return (
    <PaginationUI
      startPage={startPage}
      lastPage={lastPage}
      activedPage={activedPage}
      onClickPage={onClickPage}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
    />
  );
}
