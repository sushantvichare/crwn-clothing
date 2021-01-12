import React from "react";

import DirectoryMenu from "../../components/directory-menu/directoy-menu.component";

import {HomePageContainer} from './hompage.styles';


function HomePage(props) {
  

  return (
    <HomePageContainer>
      <DirectoryMenu></DirectoryMenu>
    </HomePageContainer>
  );
}

export default HomePage;
