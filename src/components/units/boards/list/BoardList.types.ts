import type { IQuery, IQueryFetchBoardArgs } from "@/src/commons/types/generated/types";
import type { ApolloQueryResult } from '@apollo/client';
import type { MouseEvent } from "react";

export interface IBoardListUIProps {
  data: Pick<IQuery, "fetchBoards"> | undefined;
  onClickDetail: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickEnroll: () => void;
  refetch: (variables?: Partial<IQueryFetchBoardArgs> | undefined) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count: number | undefined
  startindex: number
  setStartindex: (args: number) => void
}
