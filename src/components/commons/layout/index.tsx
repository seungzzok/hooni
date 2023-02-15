import * as S from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <S.Header>
        <S.TitleWrapper>
          <S.TitleImg></S.TitleImg>
          <S.TitleTxt>자유게시판</S.TitleTxt>
        </S.TitleWrapper>
        <S.LoginWrapper>
          <S.LoginBtn>로그인</S.LoginBtn>
          <S.SigninBtn>회원가입</S.SigninBtn>
        </S.LoginWrapper>
      </S.Header>
      <S.Banner>
        <Slider {...settings}>
          <div>
            <S.CarouselItem src='/layout/carousel1.png'></S.CarouselItem>
          </div>
          <div>
            <S.CarouselItem src='/layout/carousel2.png'></S.CarouselItem>
          </div>
          <div>
            <S.CarouselItem src='/layout/carousel3.png'></S.CarouselItem>
          </div>
          <div>
            <S.CarouselItem src='/layout/carousel4.png'></S.CarouselItem>
          </div>
        </Slider>
      </S.Banner>
      <S.Navbar>
        <S.Menu>자유게시판</S.Menu>
        <S.MenuLine></S.MenuLine>
        <S.Menu>중고마켓</S.Menu>
        <S.MenuLine></S.MenuLine>
        <S.Menu>마이페이지</S.Menu>
      </S.Navbar>
      {props.children}
    </>
  );
}
