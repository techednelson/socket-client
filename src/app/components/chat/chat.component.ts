import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ChatService } from '../../services/chat/chat.service';
import { Subscription } from 'rxjs';
import { Message } from '../../common/interfaces';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
    public messages: Message[] = [];
    public text = '';
    private messageSubscription: Subscription;
    
    constructor(private chatService: ChatService) { }
    
    public ngOnInit(): void {
        this.chatService.getMessage().subscribe((message: Message) => {
            this.messages.push(message);
        });
    }
    
    public sendMessage(): void {
        if (this.text.trim().length !== 0) {
            this.chatService.sendMessageToServer(this.text);
            this.text = '';
        }
    }
    
    public ngOnDestroy(): void {
        if (this.messageSubscription) {
            this.messageSubscription.unsubscribe();
        }
    }
}
