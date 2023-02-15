import styled from "@emotion/styled";



export const Header = styled.div`
  width: 1200px;
  height: 150px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleImg = styled.img`
  margin-right: 12px;
`;

export const TitleTxt = styled.div`
  font-size: 30px;
  font-weight: 800;
  line-height: 1;
`;

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LoginBtn = styled.button`
  width: 92px;
  height: 44px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  font-family: "NotoSansKR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
`;

export const SigninBtn = styled.button`
  margin-left: 10px;
  width: 92px;
  height: 44px;
  background-color: #ffd600;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  font-family: "NotoSansKR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
`;

export const Banner = styled.div`
  width: 100%;
  height: 400px;
  background-color: #444546;
`;

export const CarouselItem = styled.img`
    width: 1920px;
    height: 370px;
    margin: auto;
`

export const Navbar = styled.div`
  margin-bottom: 80px;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffd600;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
`;

export const Menu = styled.button`
  font-family: "NotoSansKR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1;
  color: #514400;
`;

export const MenuLine = styled.div`
  width: 1px;
  height: 20px;
  background-color: white;
  margin: 0px 40px;
`;
