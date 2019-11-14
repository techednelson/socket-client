import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket/websocket.service';
import { ChatService } from './services/chat/chat.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(
        private websocketService: WebsocketService,
        private chatService: ChatService
    ) {
    }
    
    public ngOnInit(): void {
        this.chatService.sendMessageToServer('Hello from Angular!');
    }
}
