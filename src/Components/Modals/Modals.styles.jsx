import styled from "styled-components";
import {typeScale} from "../../utils/HomeTheme";

export const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0,0,0,0.2);
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`;

export const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`;

export const SignUpText = styled.p`
  font-size: ${typeScale.paragraph};
  max-width: 70%;
  text-align: center;
`;

export const CloseModalButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  position: absolute;
  right: 40px;
  top: 40px;
  height: 24px;
  width: 24px;
  padding: 0;
`;