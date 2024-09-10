import NavigationBar from "../components/NavigationBar";
import styled from "styled-components";
import ArticleCard from "../components/ArticleCard";
import ScrapCard from "../components/ScrapCard";
import left_vector from "../assets/left_vector.png";
import right_vector from "../assets/right_vector.png";
import React, { useState } from "react";

/*
카드 스크롤 아이디어
transform : translate3d(-000px, 0px, 0px); 
=> 화살표 클릭시 왼쪽/오른쪽으로 넘어감- 크기만큼 배열 인덱스 * 해서 해당 px값을
props 로 넘겨줘서 styled component에서 x축 에서 해당 px만큼 이동하게 
+
크기를 줄여야함
*/

const Scrap = () => {
  return (
    <>
      <Div>
        <Header>
          <Button src={left_vector} />
          <CarouselContainer>
            <ScrapCard category={"경제"} />
          </CarouselContainer>
          <Button src={right_vector} />
        </Header>
        <ContentWrapper>
          <Title>내 스크랩</Title>
          <ArticleContainer>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </ArticleContainer>
        </ContentWrapper>
        <NavigationBarWrapper>
          <NavigationBar />
        </NavigationBarWrapper>
      </Div>
    </>
  );
};

export default Scrap;

const Div = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 1rem;
`;

const NavigationBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding-bottom: 1rem;
  margin-top: 3rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  display: flex;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  gap: 10px;
`;

const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Button = styled.img`
  text-align: center;
  display: flex;
  width: 30px;
  height: 30px;
`;

const ContentWrapper = styled.div`
  flex: 1 1 auto; /* Fill remaining space */
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-top: 1rem;
  padding-bottom: 3rem;
`;

const Title = styled.div`
  color: #003d62;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
