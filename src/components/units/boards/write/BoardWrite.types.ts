import type { IQuery } from "@/src/commons/types/generated/types";
import type { ChangeEvent } from "react";
import type { Address } from "react-daum-postcode";

export interface IBoardWriteProps {
  isEdit: boolean;
  data: Pick<IQuery, "fetchBoard">;
}

export interface IBoardAddress {
  zipcode?: string;
  address?: string;
  addressDetail?: string;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  boardAddress: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
}

export interface IBoardWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeZipCode: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickPostNumSearch: () => void;
  onClickEnroll: () => void;
  onClickUpdate: () => void;
  onClickCancel: () => void;
  handleComplete: (address: Address) => void;
  showModal: () => void;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  isActive: boolean;
  isModalOpen: boolean;
  zipcode: string;
  address: string;
}
