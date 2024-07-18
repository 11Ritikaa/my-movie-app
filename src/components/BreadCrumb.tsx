import styled from "styled-components";
import { Link } from "react-router-dom";
//style start
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    background: var(--medGrey);
    color: var(--white);

`;
const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: var(--maxWidth);
    padding: 0 20px;

    span {
        font-size: var(--fontMed);
        color: var(--white);
        padding-right: 10px;
        
        @media screen and (max-width: 768px){
            font-size: var(--fontSmall);
        }
    }
`;


//style end

type Props = {
    movieTitle: string;
}

const BreadCrumb:React.FC<Props> = ({movieTitle}) => {
  return (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            <span> / </span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
  )
}

export default BreadCrumb