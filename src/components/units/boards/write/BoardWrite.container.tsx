import { useMutation } from "@apollo/client";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import type {
  IBoardWriteProps,
  IUpdateBoardInput,
  IBoardAddress,
} from "./BoardWrite.types";
import type {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "@/src/commons/types/generated/types";
import type { Address } from "react-daum-postcode";
import { Modal } from "antd";

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();

  // API 요청 함수 만들기
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const [isActive, setIsActive] = useState(false);

  // 모달 창 기능
  const info = (title: string, content: string) => {
    Modal.info({
      title,
      content: <div>{content}</div>,
      // onOk() {},
    });
  };

  const success = (content: string) => {
    Modal.success({
      content,
    });
  };

  // 게시물에 작성된 내용을 변수에 저장
  const [writer, Setwriter] = useState("");
  const [password, Setpassword] = useState("");
  const [title, Settitle] = useState("");
  const [contents, Setcontents] = useState("");
  const [zipcode, Setzipcode] = useState("");
  const [address, Setaddress] = useState("");
  const [addressDetail, SetaddressDetail] = useState("");

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    Setwriter(event.target.value);
    setIsActive(Boolean(event.target.value && password && title && contents));
  }
  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    Setpassword(event.target.value);
    setIsActive(Boolean(event.target.value && password && title && contents));
  }
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    Settitle(event.target.value);
    setIsActive(Boolean(event.target.value && password && title && contents));
  }
  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    Setcontents(event.target.value);
    setIsActive(Boolean(event.target.value && password && title && contents));
  }
  function onChangeZipCode(event: ChangeEvent<HTMLInputElement>) {
    Setzipcode(event.target.value);
    // setIsActive(Boolean(event.target.value && password && title && contents));
  }
  function onChangeAddress(event: ChangeEvent<HTMLInputElement>) {
    Setaddress(event.target.value);
    // setIsActive(Boolean(event.target.value && password && title && contents));
  }
  function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    SetaddressDetail(event.target.value);
    // setIsActive(Boolean(event.target.value && password && title && contents));
  }

  // 우편번호 조회 기능
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const onClickPostNumSearch = () => {
    showModal();
  };

  const handleComplete = (address: Address) => {
    Setzipcode(address.zonecode);
    Setaddress(address.address);
    showModal();
  };

  // 등록버튼 기능
  const onClickEnroll = async () => {
    // 내용 작성되어있는지 검증
    if (!writer) {
      info("알림", "작성자를 입력해주세요");
    } else if (!password) {
      info("알림", "비밀번호를 입력해주세요");
    } else if (!title) {
      info("알림", "제목을 입력해주세요");
    } else if (!contents) {
      info("알림", "내용을 입력해주세요");
    } else if (!zipcode || !address || !addressDetail) {
      info("알림", "주소를 입력해주세요");
    } else {
      const boardAddress: IBoardAddress = {};
      boardAddress.zipcode = zipcode;
      boardAddress.address = address;
      boardAddress.addressDetail = addressDetail;

      // 오류 검증
      try {
        // API와 통신해서 등록
        await createBoard({
          variables: {
            // variables가 $역할을 해줌
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              boardAddress,
            },
          },
        });
        void router.push("/boards");
        success("등록완료");
      } catch (error: any) {
        console.log(error.message);
      }
    }
  };

  // 수정버튼 기능
  const onClickUpdate = async () => {
    if (!password) {
      alert("비밀번호를 입력해주세요");
    } else {
      const updateBoardInput: IUpdateBoardInput = { boardAddress: {} };
      if (title) updateBoardInput.title = title;
      if (contents) updateBoardInput.contents = contents;
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;

      try {
        await updateBoard({
          variables: {
            boardId: String(router.query.detail),
            password,
            updateBoardInput,
          },
        });

        alert("수정이 완료되었습니다");
        void router.push("/boards");
      } catch (error: any) {
        alert(error.message);
      }
    }
  };

  // 취소버튼 기능
  const onClickCancel = () => {
    void router.push("/boards");
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onChangeZipCode={onChangeZipCode}
      onChangeAddress={onChangeAddress}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickPostNumSearch={onClickPostNumSearch}
      onClickEnroll={onClickEnroll}
      onClickUpdate={onClickUpdate}
      onClickCancel={onClickCancel}
      handleComplete={handleComplete}
      showModal={showModal}
      isEdit={props.isEdit}
      data={props.data}
      isActive={isActive}
      isModalOpen={isModalOpen}
      zipcode={zipcode}
      address={address}
    />
  );
}
