import type { MouseEvent } from "react";

export interface IPaginationProps {
  refetch: (variables: { page: number }) => number;
  setStartindex: (args: number) => void
  count: string
}

export interface IPaginationUIProps {
  startPage: number;
  lastPage: number;
  activedPage: number;
  onClickPage: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickPrev: () => void;
  onClickNext: () => void;
}

export interface IPageProps {
    isActive: boolean
}