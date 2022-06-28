import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleNameChange = (value, setValue, setIsValueValid) => {
    if (/^[a-z\u0161\u0111\u010D\u0107\u017E\u00EB\u002D ]*$/gi.test(value)) {
      setValue(value);
    }
    value.length < 3 ? setIsValueValid(false) : setIsValueValid(true);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    )
      ? setIsEmailValid(true)
      : setIsEmailValid(false);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Title>{t("contactUs")}</Title>
      <ContentWrapper>
        <ContactInfoContainer>
          <ContactInfoItem>
            <ContactInfoSubitemOne>
              {t("contactPage.emailAdr")}
            </ContactInfoSubitemOne>
            <ContactInfoSubitemTwo>
              tonci.andrijic@gmail.com
            </ContactInfoSubitemTwo>
          </ContactInfoItem>
          <ContactInfoItem>
            <ContactInfoSubitemOne>
              {t("contactPage.phoneNo")} (Tonči Andrijić)
            </ContactInfoSubitemOne>
            <ContactInfoSubitemTwo>+385 98 181 6135</ContactInfoSubitemTwo>
          </ContactInfoItem>
          <ContactInfoItem>
            <ContactInfoSubitemOne>
              {t("contactPage.address")}
            </ContactInfoSubitemOne>
            <ContactInfoSubitemTwo>
              Zaglav 27, 20271 Blato Croatia
            </ContactInfoSubitemTwo>
          </ContactInfoItem>
        </ContactInfoContainer>
        <ContactFormContainer>
          <SendEmailMsg>{t("contactPage.sendEmailMsg")}</SendEmailMsg>
          <Form>
            <Input
              type="text"
              value={name}
              placeholder={t("contactPage.name")}
              required
              onChange={(e) =>
                handleNameChange(e.target.value, setName, setIsNameValid)
              }
            />
            <ErrorMessage
              visibility={!isNameValid && name.length ? "visible" : "hidden"}
            >
              * Ime mora imati barem 3 slova
            </ErrorMessage>
            <Input
              type="text"
              value={email}
              placeholder={t("contactPage.emailAdr")}
              required
              onChange={(e) =>
                handleEmailChange(e.target.value, setEmail, setIsEmailValid)
              }
            />
            <ErrorMessage
              visibility={!isEmailValid && email.length ? "visible" : "hidden"}
            >
              * Krivi format email-a
            </ErrorMessage>
            <Input type="text" placeholder={t("contactPage.phoneNo")} required onChange={(e) => {
                setPhoneNo(e.target.value);
              }}/>
            <EmailMessage
              type="text"
              cols="60"
              rows="8"
              id="description"
              maxLength={3000}
            //   minLength={10}
              placeholder={t("contactPage.msg")}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <SendEmailBtn onClick={handleEmailSubmit}>
              {t("contactPage.sendBtn")}
            </SendEmailBtn>
          </Form>
        </ContactFormContainer>
      </ContentWrapper>
    </Container>
  );
};

export default Contact;

const ErrorMessage = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  margin-top: -9px;
  font-weight: bold;
  ${(props) => `
    visibility: ${props.visibility};
    padding-bottom: ${props.hasPadding ? "4px" : ""};
    color: ${props.theme.color.secondary.wineRed};
    font-size: ${props.theme.fontSize.medium};
    @media(max-width: ${props.theme.breakpoints.tablet}) {
        font-size: ${props.theme.fontSize.mediumSmall};
    }
 `}
`;

const SendEmailBtn = styled.button`
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 5px;
  cursor: pointer;

  ${({ theme }) => `
        padding: ${theme.spacing.small} ${theme.spacing.large};
        background-color: ${theme.color.secondary.seeBlue};
        color: ${theme.color.main.white};
        font-size: ${theme.fontSize.medium};
        border: 1px solid ${theme.color.secondary.seeBlue};

        @media(max-width: ${theme.breakpoints.mobile}){
            padding: ${theme.spacing.small} ${theme.spacing.medium};
        } 

        &:hover {
            background-color: ${theme.color.secondary.lightBlue};
            transform: scale(1.03);
            transition: all 0.4s ease-out; 
        }
    `}
`;

const SendEmailMsg = styled.h3``;

const EmailMessage = styled.textarea`
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  resize: none;
  margin-top: 20px;
  ${({ theme }) => `
    background-color: ${theme.color.secondary.lightGrey};
    font-family: ${theme.fontFamily.main};
  `}
`;

const Form = styled.form``;

const Input = styled.input`
  border: none;
  padding: 12px 15px;
  margin: 10px 0;
  width: 100%;
  ${({ hasMarginRight, theme }) => `
    font-family: ${theme.fontFamily.main};
    background-color: ${theme.color.secondary.lightGrey};
    margin-right: ${hasMarginRight ? "20px" : "0px"};
    @media(max-width: ${theme.breakpoints.mobile}) {
      font-size: ${theme.fontSize.mediumSmall};
      padding-left: 8px;
      margin-right: 0px;
    }
  `}
`;

const ContentWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;

  ${({ theme }) => `
    font-family: ${theme.fontFamily.main};
  `}
`;

const ContactInfoContainer = styled.section``;

const ContactFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 0.7;
`;

const ContactInfoItem = styled.div`
  ${({ theme }) => `
        font-size: ${theme.fontSize.mediumLarger};

        @media(max-width: ${theme.breakpoints.mobile}){
            font-size: ${theme.fontSize.medium};
        } 
   `}

  &:not(:last-child) {
    padding-bottom: 60px;
  }
`;

const ContactInfoSubitemOne = styled.div``;

const ContactInfoSubitemTwo = styled.div`
  padding-top: 10px;
  font-weight: bold;
`;

const Title = styled.h1`
  font-weight: normal;
  text-align: center;
  padding-bottom: 10px;

  ${({ theme }) => `
    font-family: ${theme.fontFamily.secondary};
    font-size: ${theme.fontSize.subtitle};

    @media(max-width: ${theme.breakpoints.mobile}){
      font-size: ${theme.fontSize.large};
    } 
  `}
`;

const Container = styled.div`
  padding: 20px 100px;
  margin: auto;
  margin-top: 26px;
  margin-bottom: 100px;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 90%;

  ${({ theme }) => `
    background-color: ${theme.color.main.white};
  `}
`;
