export interface ScanEvent {
    source: string;
    data: string;
    labelType: string;
    timestamp: Date;
}

class Database {
    private scanEvents: ScanEvent[] = [];

    getScanEvents(){
        return [... this.scanEvents];
    }

    addScanEvent(scanEvent: ScanEvent){
        this.scanEvents.unshift(scanEvent);
    }
}

const db = new Database();
db.addScanEvent({ source: 'scanner', data: '12347', labelType: 'CODE128', timestamp: new Date() });
db.addScanEvent({ source: 'scanner', data: '12346', labelType: 'CODE128', timestamp: new Date() });
db.addScanEvent({ source: 'scanner', data: '12345', labelType: 'CODE128', timestamp: new Date() });

export default db;