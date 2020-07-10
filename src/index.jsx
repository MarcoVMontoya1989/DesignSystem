import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import ModalSignUpComponent from "./Components/Modals/Modal.component";
import {GlobalStyle, darkTheme, defaultTheme} from "./utils/HomeTheme";
import {ThemeProvider} from "styled-components";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(true)}>
        Dark theme
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setUseDarkTheme(false)}>
        Default theme
      </button>
      <button
        style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
        onClick={() => setShowModal(!showModal)}>
        Toggle Modal
      </button>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100vw",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around"
        }}>
        {/*<PrimaryButton modifiers={["small"]}>Hello World</PrimaryButton>*/}
        {/*<SecondaryButton modifiers={["large"]}>Goodbye World</SecondaryButton>*/}
        {/*<TertiaryButton>Hey</TertiaryButton>*/}
        <ModalSignUpComponent showModal={showModal} setShowModal={setShowModal}/>
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(<App/>, document.querySelector('#root'));