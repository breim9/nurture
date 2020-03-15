import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

import { connect } from 'react-redux';
import { newHabit, removeHabit, logHabit, updateHabit, newStack, removeStack, updateStack } from './src/redux/actions';

import { PrimaryButton, DisabledButton, ConfirmationButton, WarningButton } from './src/components/Buttons';

class NurtureApp extends Component {

    render() {

        //STATIC
        //building connections to store

        let newHabit = {
            "abc": {
                cue: "then",
                action: "Jog 2km",
                frequency: "daily",
                stackKey: 'l23',
                log: {},
                missManageLog: [],
            }
        }
        let habitId = "abc";
        let logHabitResult = "missed";
        let today = "08082020";
        let updateType = "action";
        let update = "1km jog"

        let newStack = {
            'kj3': {
                name: 'Evening Routine',
                frequency: 'daily',
                habitKeys: [],
                nextHabitInStackToDo: null,
                currentState: 'incomplete',
                log: {},
            },
        }

        let stackId = 'kj3';
        let stackUpdate = "complete";


        return (
            <SafeAreaView style={{ alignItems: "flex-start" }}>
                <PrimaryButton title="Enter" />
                <DisabledButton title="Enter" />
                <ConfirmationButton title="Enter" />
                <WarningButton title="Enter" />
                <Button title="New Habit" onPress={() => this.props.newHabit(newHabit)} />
                <Button title="Remove Habit" onPress={() => this.props.removeHabit(habitId)} />
                <Button title="Log Habit" onPress={() => this.props.logHabit(habitId, today, logHabitResult)} />
                <Button title="Update Habit" onPress={() => this.props.updateHabit(habitId, updateType, update)} />
                <Button title="New Stack" onPress={() => this.props.newStack(newStack)} />
                <Button title="Remove Stack" onPress={() => this.props.removeStack(stackId)} />
                <Button title="Update Stack" onPress={() => this.props.updateStack(stackId, stackUpdate)} />
            </SafeAreaView>
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
    updateStack
};

export default connect(mapStateToProps, mapDispatchToProps)(NurtureApp);
