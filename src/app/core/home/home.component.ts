import { OnInit, Component } from "@angular/core";

import { TwitchService } from "../../services/twitch.service";
var mixmax  = require('mixmax');

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    constructor(private twitchService: TwitchService) {}

    ngOnInit() {
        this.twitchService.getTopGames();
    }

    getGames() {
        return this.twitchService.top;
    }
    
    onClickGame(game: any) {
        game.twitchType = 'game';
        mixmax.done(game);
    }
}