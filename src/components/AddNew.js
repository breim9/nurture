import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled, { css } from 'styled-components';
import * as color from '../constants/colors';

const ButtonContainer = styled.TouchableOpacity`
    padding: 6px 18px;
    margin: 12px 24px;
    width: 100px;
    borderRadius: 4px;
    backgroundColor: ${color.gray100};
`
const ButtonText = styled.Text`
    fontSize: 17px;
    textAlign: center;
    color: ${color.gray300};
`


export const AddNew = (props) => {
    return (
        <ButtonContainer onPress={() => props.handler()}>
            <ButtonText>{props.title}</ButtonText>
        </ButtonContainer >
    )
}
