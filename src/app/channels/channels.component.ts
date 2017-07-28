import { OnInit, Component } from "@angular/core";

import { TwitchService } from "../services/twitch.service";
var mixmax  = require('mixmax');

@Component({
    selector: 'app-channels',
    templateUrl: './channels.component.html',
    styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
    
    twitchQuery: string ="";

    constructor(private twitchService: TwitchService) {}

    ngOnInit() {

    }
    
    onSearchForChannel() {
        this.twitchService.searchForChannels(this.twitchQuery);
    }

    getChannel() {
        return this.twitchService.channels;
    }

    onClickChannel(channel: any) {
        channel.twitchType = 'channel';
        mixmax.done(channel);
    }
    
}