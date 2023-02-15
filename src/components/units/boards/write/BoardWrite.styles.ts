import styled from "@emotion/styled";

export const Page = styled.div`
  width: 1200px;
  height: 1847px;
  margin: auto;
  /* padding: 0px 100px; */
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  margin-top: 60px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 1;
  text-align: center;
  color: #000000;
`;

export const InputsWrapper = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
`;

export const ShortInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

export const ShortInput = styled.input`
  box-sizing: border-box;
  width: 480px;
  height: 52px;
  padding: 0px 20px;
  margin-top: 16px;
  border: 1px solid #bdbdbd;
  background-color: white;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
`;

export const LongInputWrapper = styled.div`
  margin-top: 40px;
  width: 1000px;
`;

export const LongInput = styled.input`
  box-sizing: border-box;
  width: 1000px;
  height: 52px;
  padding: 0px 20px;
  margin-top: 16px;
  background: #ffffff;
  border: 1px solid #bdbdbd;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
`;

export const BigInputWrapper = styled.div`
  margin-top: 40px;
`;
export const BigInput = styled.textarea`
  box-sizing: border-box;
  width: 1000px;
  height: 480px;
  padding: 20px 20px;
  margin-top: 16px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  resize: none;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
`;

export const AddressWrapper = styled.div`
  margin-top: 40px;
  width: 1000px;
`;

export const PostNumWrapper = styled.div`

  margin-top: 16px;
  display: flex;
  align-items: center;
`;

export const PostNumInput = styled.input`
  box-sizing: border-box;
  padding: 0px 15px;
  width: 77px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  margin-right: 20px;
  outline: none;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
`;

export const PostNumSearchBtn = styled.button`
  width: 124px;
  height: 52px;
  background: #000000;
  color: white;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export const UploadBtnsWrapper = styled.div`
  margin-top: 16px;
  display: flex;
`;

export const UploadBtn = styled.div`
  width: 78px;
  height: 78px;
  margin-right: 24px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #bdbdbd;
`;

export const UploadBtnImg = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #4f4f4f;
`;

export const UploadBtnTxt = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #4f4f4f;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

export const RadioInput = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-color: #ffd600;
`;
export const RadioTxt = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-right: 22px;
`;

export const BtnsWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CancelBtn = styled.button`
  width: 179px;
  height: 52px;
  margin-right: 24px;
  cursor: pointer;
  border: none;
  background: #bdbdbd;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #4f4f4f;
`;

interface IEnrollBtnProps {
  isActive: boolean;
}

export const EnrollBtn = styled.button`
  width: 179px;
  height: 52px;
  background: ${(props: IEnrollBtnProps) =>
    props.isActive ? "#FFD600" : "#BDBDBD"};
  cursor: pointer;
  border: none;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
`;
