import React from 'react';
import styled from "styled-components";
import {typeScale} from "../../utils/HomeTheme";
import {CloseModalButton, ModalWrapper, SignUpHeader, SignUpText} from './Modals.styles';
import {Illustrations, Icons} from "../../assets";
import {PrimaryButton} from "../Buttons.styles";
import {CloseIcon} from "../../assets/Icons/close";


const ModalSignUpComponent = () => {
  return (
    <div>
      <ModalWrapper>
        <img src={Illustrations.SignUp} alt="Sign up for account" aria-hidden={true}/>
        <SignUpHeader>Sign Up</SignUpHeader>
        <SignUpText>Sign up today to have access!</SignUpText>
        <PrimaryButton onClick={() => console.log("You signed up!")}>Sign Up!</PrimaryButton>
        <CloseModalButton aria-label={'Close modal'}>
          <CloseIcon/>
        </CloseModalButton>
      </ModalWrapper>
    </div>
  );
};

export default ModalSignUpComponent;