import React, { useState, useEffect, useRef } from "react";
import searchIcon from '../assets/images/search-icon.svg';
import styled from "styled-components";
//style start
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background: var(--darkGrey);
  padding: 0 20px;
`;

const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background: var(--medGrey);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--white);

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
  }

  input {
    font-size: var(--fontBig);
    position: absolute;
    left: 0;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: var(--white);

    &:focus {
      outline: none;
    }
  }
`;//style end 

//types 
type Props = {
  setSearchItem: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar:React.FC<Props> = ({setSearchItem}) => {
    const [state, setState] = useState("");
    const inital = useRef(true);


    useEffect(()=>{
        if(inital.current) {
            inital.current = false;
            return;
        }
        const timer = setTimeout(()=>{
            setSearchItem(state)
        },1000);
        return ()=>{clearTimeout(timer)}
    },[setSearchItem,state])

  return (
    <Wrapper>
        <Content>
            <img src={searchIcon} alt="search-icon" />
            <input 
                type="text" 
                name="searchTerm" 
                placeholder="Search Movie"
                onChange={event =>setState(event.currentTarget.value)}
                value = {state}
            />
        </Content>
    </Wrapper>
  )
}

export default SearchBar