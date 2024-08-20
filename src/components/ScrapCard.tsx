import styled from "styled-components";
import React from "react";
import tmp from "../assets/category/경제.png";

const ScrapCard = ({ category }) => {
  return (
    <CategoryWrapper>
      <Img src={tmp}></Img>
      <CategoryName>{category}</CategoryName>
    </CategoryWrapper>
  );
};

export default ScrapCard;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
`;

interface ImgProps {
  imgsrc: string;
}

const Img = styled.img`
  width: 100%;
  height: 80%;
  border: none;
  border-radius: 10px 10px 0 0;
`;

const CategoryName = styled.div`
  color: rgba(0, 61, 98, 1);
  font-weight: 700;
  font-size: 0.8rem;
  margin: 0.2rem;
`;
