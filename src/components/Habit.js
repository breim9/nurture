import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styled, { css } from 'styled-components';
import * as color from '../constants/colors';
import { connect } from 'react-redux';
import { logHabit, updateHabit } from '../redux/actions';



const HabitContainer = styled.TouchableOpacity`
    padding: 8px 0px;
    flexDirection: row;
    alignItems: center;
`

const Circle = styled.View`
    borderWidth:1px;
    borderColor:${color.gray300};
    backgroundColor: #fff;
    borderRadius: 100px;
    height: 29px;
    width: 29px;
    marginRight: 12px;
    ${props => props.currentState === 'complete' && css`
        borderColor:${color.green500};
        backgroundColor: ${color.green500};
    `}
    ${props => props.currentState === 'missed' && css`
        borderColor:${color.brown500};
        backgroundColor: ${color.brown500};
    `}
`

const TextWrapper = styled.View`
`

const Cue = styled.Text`
    fontSize: 16px;
    color: ${color.gray700}
`

const Action = styled.Text`
    fontSize: 18px;
    fontWeight: bold;
    color: ${color.gray700}
`


class Habit extends Component {

    handleHabitPress() {
        let habitId = this.props.habitId;
        let result = null;
        switch (this.props.currentState) {
            case "incomplete":
                result = "complete";
                break;
            case "complete":
                result = "missed";
                break;
            case "missed":
                result = "incomplete";
                break;
            default:
                result = "incomplete";
                break;
        }
        this.props.logHabit(habitId, result);
    }

    render() {

        return (
            <HabitContainer onPress={() => this.handleHabitPress()}>
                <Circle currentState={this.props.currentState} />
                <TextWrapper>
                    <Cue>{this.props.cue}</Cue>
                    <Action>{this.props.action}</Action>
                </TextWrapper>
            </HabitContainer>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

const mapDispatchToProps = {
    logHabit,
    updateHabit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Habit);
