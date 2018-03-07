import React, { Component } from 'react';
import { DeviceEventEmitter } from 'react-native';
import { Body, List, ListItem, Text } from 'native-base';
import DataWedgeIntents from 'react-native-datawedge-intents';
import db, { ScanEvent } from './Database';

DataWedgeIntents.registerReceiver('com.zebra.dwintents.ACTION', '');

interface State {
    scanEvents: ScanEvent[]
}

export default class ScanList extends Component<any, State> {

    constructor(props) {
        super(props);
        this.scanHandler = this.scanHandler.bind(this);

        this.state = {
            scanEvents: db.getScanEvents()
        };
    }

    componentDidMount() {
        DeviceEventEmitter.addListener('barcode_scan', this.scanHandler);
    }

    componentWillUnmount() {
        DeviceEventEmitter.removeListener('barcode_scan', this.scanHandler);
    }

    scanHandler(scanEvent: ScanEvent) {
        scanEvent.timestamp = new Date();
        db.addScanEvent(scanEvent);
        this.setState({ scanEvents: db.getScanEvents() });
    }

    render() {
        const { scanEvents } = this.state;
        const { navigate } = this.props.navigation;

        return (
            <List dataArray={scanEvents} renderRow={(scanEvent: ScanEvent) =>
                <ListItem onPress={() => navigate('ScanDetail', { scanEvent })} >
                    <Body>
                        <Text>{scanEvent.data}</Text>
                        <Text note>{scanEvent.timestamp.toString()}</Text>
                    </Body>
                </ListItem>
            } />
        );
    }
}