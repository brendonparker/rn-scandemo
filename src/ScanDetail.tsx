import React, { Component } from 'react';
import { Form, Item, Label, Input } from 'native-base';
import { ScanEvent } from './Database';

export default class ScanDetail extends Component<any> {
    render() {
        const { scanEvent } = this.props.navigation.state.params;
        return (
            <Form>
                <Item stackedLabel>
                    <Label>Source</Label>
                    <Input disabled value={scanEvent.source} />
                </Item>
                <Item stackedLabel>
                    <Label>Label Type</Label>
                    <Input disabled value={scanEvent.labelType} />
                </Item>
                <Item stackedLabel>
                    <Label>Data</Label>
                    <Input disabled value={scanEvent.data} />
                </Item>
                <Item stackedLabel>
                    <Label>Timestamp</Label>
                    <Input disabled value={scanEvent.timestamp.toString()} />
                </Item>
            </Form>
        );
    }
}