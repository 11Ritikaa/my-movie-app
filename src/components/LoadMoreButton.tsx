import React from "react";
import styled from "styled-components";
//styles start
const Wrapper = styled.button`
    display: block;
    background: var(--darkGrey);
    min-width: 200px;
    height: 60px;
    border-radius: 30px;
    color: var(--white);
    border: 0;
    font-size: var(--fontBig);
    margin: 20px auto;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;

    &:hover{
        outline: none;
        opacity: 0.8;
    }
`;
//styles end
type Props = {
  text: string;
  callbackfn: ()=>void;
}


const LoadMoreButton: React.FC<Props> = ({text, callbackfn }) => {
  return (
    <Wrapper type="button" onClick={callbackfn}>
        {text}    
    </Wrapper>
  )
}

export default LoadMoreButton