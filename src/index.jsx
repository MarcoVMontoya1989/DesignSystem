import React from 'react';
import ReactDOM from 'react-dom';
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton
} from "./Components/Buttons.styles";
import {GlobalStyle} from "./utils/HomeTheme";

const App = () => (
  <>
    <PrimaryButton>Hello world </PrimaryButton>
    <SecondaryButton>Farewell world </SecondaryButton>
    <TertiaryButton>Hey world </TertiaryButton>
    <GlobalStyle />
  </>
);

ReactDOM.render(<App/>, document.querySelector('#root'));