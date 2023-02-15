import type { IQuery } from '@/src/commons/types/generated/types';

export interface IBoardDetailUIProps {
  data: Pick<IQuery, "fetchBoard">;
  onClickGoToList: () => void;
  onClickUpdate: () => void;
  onClickDelete: () => void;
}
