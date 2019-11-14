import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {environment} from '../environments/environment';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {FooterComponent} from './components/footer/footer.component';

const config: SocketIoConfig = {url: environment.webSocketUrl, options: {}};

@NgModule({
    declarations: [AppComponent, FooterComponent],
    imports: [BrowserModule, AppRoutingModule, SocketIoModule.forRoot(config)],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
