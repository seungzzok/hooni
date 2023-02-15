import styled from "@emotion/styled";

export const Page = styled.div`
  width: 1200px;
  height: 1600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  background: #ffffff;
`;

export const Header = styled.div`
  margin-top: 80px;
  width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 55px;
  height: 55px;
  margin-right: 12px;
`;

export const ProfileSmallWrapper = styled.div``;

export const ProfileTxt = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
`;

export const Date = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #828282;
`;

export const HeaderBtns = styled.div``;

export const HeaderBtn = styled.button`
  margin-left: 20px;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Line = styled.div`
  width: 1000px;
  height: 1px;
  background: #bdbdbd;
  margin-top: 20px;
`;

export const Contents = styled.div`
  margin-top: 80px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentsTitle = styled.div`
  width: 100%;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
  color: #000000;
`;

export const ContentsImg = styled.div`
  background-color: gray;
  width: 100%;
  height: 480px;
  margin-top: 40px;
`;

export const ContentsTxt = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 100px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

export const ContentsVideo = styled.div`
  margin-top: 120px;
  width: 480px;
  height: 240px;
  background-color: gray;
`;

export const ContentsBtnsWrapper = styled.div`
  margin-top: 160px;
  width: 120px;
  display: flex;
  justify-content: space-between;
`;

export const ContentsBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentsBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  width: 40px;
  height: 40px;
`;

export const ContentsBtnCnt = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #828282;
`;

export const PageEditBtnWrapper = styled.div`
  margin: auto;
  margin-top: 80px;
  width: 590px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PageEditBtn = styled.button`
  width: 180px;
  height: 45px;
  border: 1px solid #bdbdbd;
  background-color: transparent;
  cursor: pointer;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;
`;
