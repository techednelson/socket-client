import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket/websocket.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(
        private websocketService: WebsocketService
    ) {
    }
}
