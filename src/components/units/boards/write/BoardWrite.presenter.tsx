import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import * as S from "./BoardWrite.styles";
import type { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      <S.Page>
        <S.Title>{props.isEdit ? "게시물 수정" : "게시물 등록"}</S.Title>
        <S.InputsWrapper>
          <S.ShortInputWrapper>
            <S.Label>작성자</S.Label>
            <S.ShortInput
              type="text"
              placeholder="이름을 적어주세요"
              defaultValue={
                (props.isEdit ? props.data?.fetchBoard.writer : "") ?? ""
              }
              onChange={props.onChangeWriter}
            ></S.ShortInput>
          </S.ShortInputWrapper>
          <S.ShortInputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.ShortInput
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={props.onChangePassword}
            ></S.ShortInput>
          </S.ShortInputWrapper>
        </S.InputsWrapper>
        <S.LongInputWrapper>
          <S.Label>제목</S.Label>
          <S.LongInput
            type="text"
            placeholder="제목을 작성해주세요"
            defaultValue={props.isEdit ? props.data?.fetchBoard.title : ""}
            onChange={props.onChangeTitle}
          ></S.LongInput>
        </S.LongInputWrapper>
        <S.BigInputWrapper>
          <S.Label>내용</S.Label>
          <S.BigInput
            placeholder="내용을 작성해주세요"
            defaultValue={props.isEdit ? props.data?.fetchBoard.contents : ""}
            onChange={props.onChangeContents}
          ></S.BigInput>
        </S.BigInputWrapper>
        <S.AddressWrapper>
          <S.Label>주소</S.Label>
          <S.PostNumWrapper>
            <S.PostNumInput
              value={
                props.zipcode ||
                (props.data?.fetchBoard.boardAddress?.zipcode ?? "")
              }
              onChange={props.onChangeZipCode}
              readOnly
            ></S.PostNumInput>
            <S.PostNumSearchBtn onClick={props.onClickPostNumSearch}>
              우편번호 검색
            </S.PostNumSearchBtn>
          </S.PostNumWrapper>
          <S.LongInput
            value={
              props.address ||
              (props.data?.fetchBoard.boardAddress?.address ?? "")
            }
            onChange={props.onChangeAddress}
            readOnly
          ></S.LongInput>
          <S.LongInput
            onChange={props.onChangeAddressDetail}
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail ?? ""
            }
          ></S.LongInput>
        </S.AddressWrapper>
        <S.LongInputWrapper>
          <S.Label>유튜브</S.Label>
          <S.LongInput
            type="text"
            placeholder="링크를 복사해주세요"
          ></S.LongInput>
        </S.LongInputWrapper>
        <S.LongInputWrapper>
          <S.Label>사진첨부</S.Label>
          <S.UploadBtnsWrapper>
            <S.UploadBtn>
              <S.UploadBtnImg>+</S.UploadBtnImg>
              <S.UploadBtnTxt>Upload</S.UploadBtnTxt>
            </S.UploadBtn>
            <S.UploadBtn>
              <S.UploadBtnImg>+</S.UploadBtnImg>
              <S.UploadBtnTxt>Upload</S.UploadBtnTxt>
            </S.UploadBtn>
            <S.UploadBtn>
              <S.UploadBtnImg>+</S.UploadBtnImg>
              <S.UploadBtnTxt>Upload</S.UploadBtnTxt>
            </S.UploadBtn>
          </S.UploadBtnsWrapper>
        </S.LongInputWrapper>
        <S.LongInputWrapper>
          <S.Label>메인설정</S.Label>
          <S.RadioWrapper>
            <S.RadioInput type="radio" name="option"></S.RadioInput>
            <S.RadioTxt>유튜브</S.RadioTxt>
            <S.RadioInput type="radio" name="option"></S.RadioInput>
            <S.RadioTxt>사진</S.RadioTxt>
          </S.RadioWrapper>
        </S.LongInputWrapper>
        <S.BtnsWrapper>
          <S.CancelBtn onClick={props.onClickCancel}>취소하기</S.CancelBtn>
          <S.EnrollBtn
            onClick={props.isEdit ? props.onClickUpdate : props.onClickEnroll}
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.EnrollBtn>
        </S.BtnsWrapper>
      </S.Page>
      {props.isModalOpen && (
        <Modal
          title="우편번호 검색"
          open={true}
          onOk={props.showModal}
          onCancel={props.showModal}
        >
          <DaumPostcodeEmbed onComplete={props.handleComplete} />
        </Modal>
      )}
    </>
  );
}
