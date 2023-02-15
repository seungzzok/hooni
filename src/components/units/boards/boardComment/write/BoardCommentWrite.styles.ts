import styled from "@emotion/styled";
import { Rate } from "antd";

export const CommentWrite = styled.div`
  margin: auto;
  margin-top: 40px;
  margin-bottom: 20px;
  width: 1200px;
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommentInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const InfoInput = styled.input`
  box-sizing: border-box;
  padding: 14px 20px;
  margin-right: 24px;
  width: 180px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  outline: none;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
`;

export const StarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const antdRate = styled(Rate)``;

interface StyleProps {
  isEdit: boolean;
}

export const CloseBtn = styled.img`
  cursor: pointer;
  margin-right: 5px;
  width: 15px;
  height: 15px;
  display: ${(props:StyleProps) => (props.isEdit ? "block" : "none")};
`;

export const CommentContentsWrapper = styled.div`
  width: 100%;
  height: 160px;
  margin-top: 20px;
  border: 1px solid #bdbdbd;
`;

export const CommentInput = styled.textarea`
  box-sizing: border-box;
  display: block;
  padding: 20px;
  width: 100%;
  height: 110px;
  outline: none;
  border: none;
  resize: none;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
`;

export const ContentsFooter = styled.div`
  width: 100%;
  height: 50px;
  border-top: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentsLength = styled.div`
  margin-left: 20px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  color: #bdbdbd;
`;

export const SubmitBtn = styled.div`
  width: 90px;
  height: 100%;
  outline: none;
  border: none;
  cursor: pointer;
  background: ${(props:StyleProps) => (props.isEdit ? "#FFD600" : "#000000")};
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  color: ${(props:StyleProps) => (props.isEdit ? "#000000" : "#FFFFFF")};
`;
