import { Injectable } from '@angular/core';
import { WebsocketService } from '../websocket/websocket.service';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    constructor(private websocketService: WebsocketService) {
    }

    public sendMessage(message: string): void {
        const payload = {
            from: 'Nelson',
            message
        };
        this.websocketService.emit('message', payload);
    }

}
