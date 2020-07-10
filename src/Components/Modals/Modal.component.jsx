import React from 'react';
import {CloseModalButton, ModalWrapper, SignUpHeader, SignUpText} from './Modals.styles';
import {Illustrations} from "../../assets";
import {PrimaryButton} from "../Buttons.styles";
import {CloseIcon} from "../../assets/Icons/close";
import {useSpring, animated, config} from "react-spring";

const ModalSignUpComponent = ({showModal, setShowModal}) => {
  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`,
    config: config.molasses
  })

  return (
    <div>
      <animated.div style={animation}>
        <ModalWrapper>
          <img src={Illustrations.SignUp} alt="Sign up for account" aria-hidden={true}/>
          <SignUpHeader>Sign Up</SignUpHeader>
          <SignUpText>Sign up today to have access!</SignUpText>
          <PrimaryButton onClick={() => alert("You signed up!")}>Sign Up!</PrimaryButton>
          <CloseModalButton aria-label={'Close modal'}>
            <CloseIcon/>
          </CloseModalButton>
        </ModalWrapper>
      </animated.div>
    </div>
  );
};

export default ModalSignUpComponent;