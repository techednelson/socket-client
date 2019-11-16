import { Injectable } from '@angular/core';
import { WebsocketService } from '../websocket/websocket.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    constructor(private websocketService: WebsocketService) {
    }

    public sendMessageToServer(message: string): void {
        const payload = {
            from: 'Nelson',
            message
        };
        this.websocketService.emit('message', payload);
    }
    
    public getMessage(): Observable<any> {
        return this.websocketService.listen('reply');
    }

}
