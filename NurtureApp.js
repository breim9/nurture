import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import styled, { css } from 'styled-components';
import * as color from './src/constants/colors';

import { connect } from 'react-redux';
import { newHabit, removeHabit, logHabit, updateHabit, newStack, removeStack, updateStack, toggleStack, updatePrompt } from './src/redux/actions';
import Timeline from './src/components/Timeline';
import Stack from './src/components/Stack';
import { PrimaryButton, DisabledButton, ConfirmationButton, WarningButton } from './src/components/Buttons';
import { getHabitsInOrderNoIds, getStacksInOrderedArray } from './src/helpers.js';

const Wrapper = styled.SafeAreaView`
    backgroundColor: #FCFCFC;
`


class NurtureApp extends Component {

    getNextPrompt(stackId) {
        // ! move this over to getHabitsInOrderedArray
        let habits = getHabitsInOrderNoIds(stackId, this.props.stacks, this.props.habits);
        if (habits.length === 0) {
            return "Make your first habit";
            // ! this should not be so, for the second stack
        }
        let newPrompt = habits.find(habit => habit.currentState === "incomplete");
        newPrompt.currentState === undefined ?
            newPrompt = "Complete Stack!" :
            newPrompt = `${newPrompt.cue} - ${newPrompt.action}`;
        return newPrompt;
    }

    renderStacks() {

        let stackList = getStacksInOrderedArray(this.props.stacks);
        if (stackList.length === 0) return;
        let stacks = stackList.map(item => {
            if (item === undefined) return;
            return (
                <Stack
                    key={item[0]}
                    stackId={item[0]}
                    title={item[1].name}
                    prompt={this.getNextPrompt(item[0])}
                    isOpen={item[1].stackIsOpen}
                />
            )
        });
        return stacks;
    }

    render() {
        let stacks = this.renderStacks();
        return (
            <Wrapper>
                <Timeline />
                {stacks}
                {/* <PrimaryButton title="Enter" />
                <DisabledButton title="Enter" />
                <ConfirmationButton title="Enter" />
                <WarningButton title="Enter" />
                <Button title="New Habit" onPress={() => this.props.newHabit(newHabit)} />
                <Button title="Remove Habit" onPress={() => this.props.removeHabit(habitId)} />
                <Button title="Log Habit" onPress={() => this.props.logHabit(habitId, today, logHabitResult)} />
                <Button title="Update Habit" onPress={() => this.props.updateHabit(habitId, updateType, update)} />
                <Button title="New Stack" onPress={() => this.props.newStack(newStack)} />
                <Button title="Remove Stack" onPress={() => this.props.removeStack(stackId)} />
                <Button title="Update Stack" onPress={() => this.props.updateStack(stackId, stackUpdate)} /> */}
            </Wrapper>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

const mapDispatchToProps = {
    newHabit,
    removeHabit,
    logHabit,
    updateHabit,
    newStack,
    removeStack,
    updateStack,
    toggleStack,
    updatePrompt
};

export default connect(mapStateToProps, mapDispatchToProps)(NurtureApp);
