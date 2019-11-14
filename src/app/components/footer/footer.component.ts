import {Component} from '@angular/core';
import {WebsocketService} from '../../services/websocket.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    constructor(private websocketService: WebsocketService) {
    }
}
