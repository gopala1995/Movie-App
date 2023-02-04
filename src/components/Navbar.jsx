import axios from "axios";
import React from "react";
import styled from "styled-components";
import { MovieComponents } from "./MovieComponents";

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
 justify-content: space-evenly;
`

export const Navbar = () => {
  let key = "b0eb8560";
  //   const FetchApi = axios.get(`https://www.omdbapi.com/?s=${movie_name}&apikey=${key}`)
  return (
    <Conatainer>
      <Header>
        Movie
        <SearchInputBox>
            <SearchIcon src="logo192.png"/>
            <SearchInput placeholder="Search Movie"/>
        </SearchInputBox>
      </Header>
      <MovieList>
       <MovieComponents/>
       <MovieComponents/>
       <MovieComponents/>
       <MovieComponents/>
      </MovieList>
    </Conatainer>
  );
};
