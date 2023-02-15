import styled from "@emotion/styled";

// Search-------------------------------------------------------------------------

export const SearchWrapper = styled.div`
  width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
`;

export const SearchInputWrapper = styled.div`
  width: 776px;
  height: 52px;
  margin-right: 42px;
  background: #f2f2f2;
  border-radius: 10px;

  display: flex;
  align-items: center;
`;

export const SearchIcon = styled.img`
  margin: 0px 20px;
`;

export const SearchInput = styled.input`
  width: 90%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  color: #000000;
`;

export const DateFilterInput = styled.input`
  width: 244px;
  height: 52px;
  margin-right: 44px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  outline: none;
  padding: 0px 10px;
  box-sizing: border-box;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  color: black;
`;

export const SearchBtn = styled.button`
  width: 94px;
  height: 52px;
  border: none;
  cursor: pointer;

  background: #000000;
  border-radius: 10px;
  text-align: center;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  text-align: center;
  color: #ffffff;
`;

// List-------------------------------------------------------------------------

export const List = styled.div`
  margin: auto;
  margin-top: 40px;
  width: 1200px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

export const ListHeader = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: black;
`;

export const ColumnHeaderTitle = styled.div`
  width: 60%;
`;

export const ColumnNum = styled.div`
  width: 10%;
`;

export const ColumnTitle = styled.a`
  height: 100%;
  line-height: 52px;
  width: 60%;
  color: #4f4f4f;
  text-decoration: none;
  outline: none;

  :hover{
    text-decoration: underline;
    font-weight: 800;
    cursor: pointer;
  }

`;

export const ColumnWriter = styled.div`
  width: 15%;
`;

export const ColumnCreatedAt = styled.div`
  width: 15%;
`;

export const Row = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  border-top: 1px solid #bdbdbd;

  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #4f4f4f;
`;

// Footer-------------------------------------------------------------------------

export const Footer = styled.div`
  margin: auto;
  margin-top: 40px;
  margin-bottom: 100px;
  width: 1200px;
  position: relative;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const EnrollBtnWrapper = styled.button`
  width: 171px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  cursor: pointer;
  position: absolute;
  top: -16px;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EnrollBtn = styled.div`
  margin-left: 8px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1;
  color: #000000;
`;
