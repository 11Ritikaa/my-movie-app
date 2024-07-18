import styled from "styled-components";
import RMDBLogo from "../assets/images/react-movie-logo.svg";
import TMDBLogo from "../assets/images/tmdb_logo.svg";
import { Link } from "react-router-dom";

//comoponent specific styles as react components
//pros->interactivity and dynamic nature of jsx just like sass
const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
`;
// another advantage of styled componets is that you can nest media queries and child element styles
const LogoImg = styled.img`
  width: 200px;
  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;
const TMDBLogoImg = styled.img`
  width: 100px;
  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;

const Header:React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
