import type { IQuery } from "@/src/commons/types/generated/types";
import type { MouseEvent } from 'react';

export interface IBoardCommentListUIProps {
  data: Pick<IQuery, "fetchBoardComments">;
  isModalOpen: boolean;
  onClickDelete: (event: MouseEvent<HTMLImageElement>) => void;
  onClickUpdate: () => void;
  toggleModal: () => void;
}
