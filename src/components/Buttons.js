import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled, { css } from 'styled-components'


const ButtonContainer = styled.TouchableOpacity`
    padding: 12px 36px;
    margin: 12px 24px;
    backgroundColor: #F3BE83;
    borderRadius: 9px;
    shadow-opacity: 0.15;
    shadow-radius: 5px;
    shadow-color: black;
    shadow-offset: 0px 2px;
    ${props => props.disabled && css`
        backgroundColor: #F2F2F2;
    `}
    ${props => props.confirmation && css`
        backgroundColor: #D7EFE5;
    `}
    ${props => props.warning && css`
        backgroundColor: #FADCDC;
    `}
`
const ButtonText = styled.Text`
    color: #A67A49;
    fontSize: 18px;
    fontWeight: bold;
    ${props => props.disabled && css`
        color: #B3B3B3;
    `}
    ${props => props.confirmation && css`
        color: #3B9974;
    `}
    ${props => props.warning && css`
        color: #F38C8C;
    `}
`


export const PrimaryButton = (props) => {
    return (
        <ButtonContainer>
            <ButtonText>{props.title}</ButtonText>
        </ButtonContainer>
    )
}

export const DisabledButton = (props) => {
    return (
        <ButtonContainer disabled>
            <ButtonText disabled>{props.title}</ButtonText>
        </ButtonContainer>
    )
}

export const ConfirmationButton = (props) => {
    return (
        <ButtonContainer confirmation>
            <ButtonText confirmation>{props.title}</ButtonText>
        </ButtonContainer>
    )
}

export const WarningButton = (props) => {
    return (
        <ButtonContainer warning>
            <ButtonText warning>{props.title}</ButtonText>
        </ButtonContainer>
    )
}
