import type { ChangeEvent } from "react";

export interface IBoardCommentWriteUIProps {
  writer: string;
  password: string;
  contents: string;
  rating: number;
  isEdit: boolean;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeRate: (value: number) => void;
  onClickSubmit: () => void;
  onClickUpdate: () => void;
  onClickClose: () => void;
}
