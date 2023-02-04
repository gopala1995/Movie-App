import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: center;
  border-bottom: 1px solid lightgray;
`;
const ImageTag = styled.img`
  height: 352px;
  object-fit: cover;
`;
const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const MovieName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;
const MovieInfo = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: black;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.5;
  }
`;

const Close = styled.span`
font-size: 16px;
font-weight: 700;
color: black;
background-color: lightgray;
height: fit-content;
padding: 8px;
border-radius: 50%;
cursor: pointer;
opacity: 0.8;
`

export const MovieDiscription = (props) => {
  const { selectMovie } = props;
  const [movieinfo, setmovieInfo] = useState();

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${selectMovie}&apikey=b0eb8560`)
      .then((response) => setmovieInfo(response.data));
  }, [selectMovie]);

  return (
    <Container>
    {movieinfo?<>
      <ImageTag src={movieinfo?.Poster} />

<InfoDiv>
  <MovieName>Movie: {movieinfo?.Title}</MovieName>
  <MovieInfo>
    Rated: <span>{movieinfo?.imdbRating}</span>
  </MovieInfo>
  <MovieInfo>
    Genre: <span>{movieinfo?.Genre}</span>
  </MovieInfo>
  <MovieInfo>
    Director: <span>{movieinfo?.Director}</span>
  </MovieInfo>
  <MovieInfo>
    Actor: <span>{movieinfo?.Actors}</span>
  </MovieInfo>
  <MovieInfo>
    Plot: <span>{movieinfo?.Plot}</span>
  </MovieInfo>
</InfoDiv>
<Close onClick={()=>props.setSelectMovie()}>X</Close>
    </>:"Loading"}
     
    </Container>
  );
};
