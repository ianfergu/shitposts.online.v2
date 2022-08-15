import styled from "styled-components";
import { isScreenMobile } from "../utils/utils";
import Dropdown from "../components/Dropdown";

const Header = styled.div`
  top: 0;
  height: 50px;
  color: white;
  background-color: #ed8a3e;
  display: flex;
  justify-content: beginning;
  gap: 30vw;
  align-items: center;
  width: 100%;
  @media only screen and (min-width: 1000px) {
    height: 100px;
  }

`;

const HeaderTitle = styled.h1`
  margin-left: 32px;
  font-weight: bold;
  font-style: italic;
`;

const CenterNav = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media only screen and (min-width: 1000px) {
    gap: 64px;
  }  
`;

const NewMemeButton = styled.button`
  width: 400px;
  height: 70px;
  font-size: 32px;
`;

function Default(onClickCallback) {
  const isMobile = isScreenMobile();
  
  return (
    <Header>
      <HeaderTitle>
        Shitposts
      </HeaderTitle>
      <CenterNav>
        {/* <NavButton>Meme Generator</NavButton>
        <NavButton>About</NavButton>
        <NavButton>Meme of the Week</NavButton> */}
        {/* <NewMemeButton onClick={onClickCallback}>New Meme</NewMemeButton> */}
      </CenterNav>
    </Header>
  );
}

export default Default;
