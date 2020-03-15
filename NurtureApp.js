import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

import { connect } from 'react-redux';
import { add } from './src/redux/actions';

import { PrimaryButton, DisabledButton, ConfirmationButton, WarningButton } from './src/components/Buttons';

class NurtureApp extends Component {


    render() {
        return (
            <SafeAreaView style={{ alignItems: "flex-start" }}>
                <Button title="Add 3" onPress={() => this.props.add(3)} />
                <Text>{this.props.number.counter}</Text>
                <PrimaryButton title="Enter" />
                <DisabledButton title="Enter" />
                <ConfirmationButton title="Enter" />
                <WarningButton title="Enter" />
            </SafeAreaView>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

const mapDispatchToProps = {
    add
};

export default connect(mapStateToProps, mapDispatchToProps)(NurtureApp);
