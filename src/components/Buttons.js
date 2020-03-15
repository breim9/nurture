import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled, { css } from 'styled-components';
import * as color from '../constants/colors';


const ButtonContainer = styled.TouchableOpacity`
    padding: 12px 36px;
    margin: 12px 24px;
    borderRadius: 9px;
    shadow-opacity: 0.15;
    shadow-radius: 5px;
    shadow-color: black;
    shadow-offset: 0px 2px;
    backgroundColor: ${color.brown500};
    ${props => props.disabled && css`
        backgroundColor: ${color.gray100};
    `}
    ${props => props.confirmation && css`
        backgroundColor: ${color.green300};
    `}
    ${props => props.warning && css`
        backgroundColor: ${color.red100};
    `}
`
const ButtonText = styled.Text`
    fontSize: 18px;
    fontWeight: bold;
    color: ${color.brown900};
    ${props => props.disabled && css`
        color: ${color.gray300};
    `}
    ${props => props.confirmation && css`
        color: ${color.green700};
    `}
    ${props => props.warning && css`
        color: ${color.red500};
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
