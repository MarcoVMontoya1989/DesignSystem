import React from 'react';
import ReactDOM from 'react-dom';
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton
} from "./Components/Buttons.component";

const App = () => (
  <>
    <PrimaryButton>Hello world </PrimaryButton>
    <SecondaryButton>Farewell world </SecondaryButton>
    <TertiaryButton>Hey world </TertiaryButton>
  </>
);

ReactDOM.render(<App/>, document.querySelector('#root'));