import React, { Component } from 'react';
import { DeviceEventEmitter, View, Text } from 'react-native';

import DataWedgeIntents from 'react-native-datawedge-intents';

DataWedgeIntents.registerReceiver('com.zebra.dwintents.ACTION', '');

interface State {
    scanEvent: ScanEvent;
}

interface ScanEvent {
    source: string;
    data: string;
    labelType: string;
}

export default class ScanDemo extends Component<null, State> {
    
    constructor(props) {
        super(props);
        this.scanHandler = this.scanHandler.bind(this);
        this.state = {
            scanEvent: null
        };
    }

    componentDidMount(){
        DeviceEventEmitter.addListener('barcode_scan', this.scanHandler);
    }

    componentWillUnmount(){
        DeviceEventEmitter.removeListener('barcode_scan', this.scanHandler);
    }

    scanHandler(scanEvent : ScanEvent){
        this.setState({ scanEvent });
    }

    render(){
        let source = this.state.scanEvent && this.state.scanEvent.source;
        let labelType = this.state.scanEvent && this.state.scanEvent.labelType;
        let data = this.state.scanEvent && this.state.scanEvent.data;

        return (
            <View>
                <Text>Scanned:</Text>
                <Text>Source: {source}</Text>
                <Text>Label Type: {labelType}</Text>
                <Text>Data: {data}</Text>
            </View>
        );
    }
}