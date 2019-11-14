import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Injectable({
    providedIn: 'root'
})
export class WebsocketService {
    public socketStatus = false;

    constructor(private socket: Socket) {
        this.checkStatus();
    }

    public checkStatus(): void {
        this.socket.on('connect', () => {
            console.log('Connecting to the server');
            this.socketStatus = true;
        });

        this.socket.on('disconnect', () => {
            console.log('Disconnected from server');
            this.socketStatus = false;
        });
    }

    public emit(event: string, payload: any, callback?: () => void): void {
        this.socket.emit(event, payload, callback);
    }
}
