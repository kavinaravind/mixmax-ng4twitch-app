import { OnInit, Component } from "@angular/core";

import { TwitchService } from "../services/twitch.service";
var mixmax  = require('mixmax');

@Component({
    selector: 'app-streams',
    templateUrl: './streams.component.html',
    styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {

    twitchQuery: string ="";
    
    constructor(private twitchService: TwitchService) {}

    ngOnInit() {

    }
    
    onSearchForStream() {
        this.twitchService.searchForStreams(this.twitchQuery);
    }

    getStream() {
        return this.twitchService.streams;
    }

    onClickStream(stream: any) {
        stream.twitchType = 'stream';
        mixmax.done(stream);
    }
    
}