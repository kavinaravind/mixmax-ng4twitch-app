import { OnInit, Component } from "@angular/core";

import { TwitchService } from "../services/twitch.service";

import { Game } from "../shared/game.model";
var mixmax  = require('mixmax');

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

    private _window: Window;
    twitchQuery: string ="";

    constructor(private twitchService: TwitchService) { }

    ngOnInit() {

    }
    
    onSearchForGame() {
        this.twitchService.searchForGames(this.twitchQuery);
    }

    getGames() {
        return this.twitchService.games;
    }

    onClickGame(game: any) {
        game.twitchType = 'game';
        mixmax.done(game);
    }
}