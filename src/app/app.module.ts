import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from "./core/core.module";
import { GamesModule } from "./games/games.module";
import { ChannelsModule } from "./channels/channels.module";
import { StreamsModule } from "./streams/streams.module";

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        CoreModule,
        ChannelsModule,
        GamesModule,
        StreamsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}