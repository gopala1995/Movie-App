import React from "react";
import styled from "styled-components";

const Conatainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  padding: 10px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;
const ImageTag = styled.img`
  height: 360px;
  object-fit: cover;
`;
const MovieName = styled.span`
  color: black;
  font-weight: 600;
  font-size: 18px;
  margin: 15px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const MovieInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MovieDis = styled.span`
  color: black;
  font-weight:500;
  font-size: 14px;
  text-transform: capitalize;
`;

export const MovieComponents = (props) => {
    const {Poster,imdbID,Year,Title,Type} = props.movie
  return (
    <Conatainer onClick={()=>props.setSelectMovie(imdbID)}>
      <ImageTag src={Poster} />
      <MovieName>{Title}</MovieName>
      <MovieInfo>
        <MovieDis>Year : {Year}</MovieDis>
        <MovieDis>Type : {Type}</MovieDis>
      </MovieInfo>
    </Conatainer>
  );
};
