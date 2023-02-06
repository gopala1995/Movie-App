import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { MovieComponents } from "./MovieComponents";
import { MovieDiscription } from "./MovieDiscription";

const Conatainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: teal;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
`;

const MovieiICon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SearchInputBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  background-color: white;
  margin-left: 20px;
  border-radius: 7px;
  width: 50%;
  align-items: center;
`;
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
  justify-content: left;
`;
const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

const MovieList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 24px;
  justify-content: space-evenly;
`;

export const Navbar = () => {
  //   const FetchApi = axios.get(`https://www.omdbapi.com/?s=${movie_name}&apikey=${key}`)

  const [Input, setInput] = useState();
  const [time, setTime] = useState();
  const [moviedata, setMoviedata] = useState([]);
  const [selectMovie, setSelectMovie] = useState();

  const fetchApi = async (InputStr) => {
    const rexponse = await axios.get(
      `https://www.omdbapi.com/?s=${InputStr}&apikey=b0eb8560`
    );
    // console.log(rexponse);
    setMoviedata(rexponse.data.Search);
  };

  const onTextchange = (ev) => {
    clearTimeout(time);
    setInput(ev.target.value);
    const outtime = setTimeout(() => fetchApi(ev.target.value), 300);
    setTime(outtime);
  };
  return (
    <Conatainer>
      <Header>
        Movie
        <SearchInputBox>
          <SearchIcon src="icons8.png" />
          <SearchInput
            placeholder="Search Movie"
            value={Input}
            onChange={onTextchange}
          />
        </SearchInputBox>
      </Header>
      {selectMovie && <MovieDiscription selectMovie={selectMovie} setSelectMovie={setSelectMovie}/>}
      <MovieList>
        {moviedata?.length
          ? moviedata.map((movie, index) => (
              <MovieComponents
                key={index}
                movie={movie}
                setSelectMovie={setSelectMovie}
              />
            ))
          : "Type movie name in search box"}
      </MovieList>
    </Conatainer>
  );
};
