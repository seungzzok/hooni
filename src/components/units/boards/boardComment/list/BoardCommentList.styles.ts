import styled from "@emotion/styled";
import { Rate } from "antd";

export const CommentListWrapper = styled.div`
  box-sizing: border-box;
  width: 1200px;
  padding: 20px 0px;
  margin: auto;
  display: flex;
  border-bottom: 1px solid #bdbdbd;
`;
export const CommentInfoWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-start;
`;

export const ProfileImg = styled.img`
  margin-right: 16px;
`;

export const CommentTxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const WriterStarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Writer = styled.div`
  margin-right: 18px;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
`;

export const Star = styled(Rate)`
  margin-right: 4px;
  padding: 0;
`;

export const CommentContents = styled.div`
  min-height: 32px;
  margin-top: 8px;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  color: #4f4f4f;
`;

export const CreatedAt = styled.div`
  margin-top: 8px;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1;
  color: #bdbdbd;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 10%;
`;

export const Btn = styled.img`
  margin-left: 16px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
`;
