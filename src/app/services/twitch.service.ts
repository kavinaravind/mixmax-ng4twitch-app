import { Http, Response } from "@angular/http";
import { Game } from "../shared/game.model";
import { Channel } from "../shared/channel.model";
import { Stream } from "../shared/stream.model";

import { Injectable } from "@angular/core";
import "rxjs/Rx";
import { Subject } from "rxjs/Rx";

@Injectable()
export class TwitchService {
    games: Game[];
    channels: Channel[];
    streams: Stream[];
    top: Game[];

    constructor(private http: Http) { }

    getTopGames() {
        this.http.get('https://mixmax-twitch-app.mybluemix.net/twitch/gettopgames')
            .map(
                (response: Response) => {
                    const games: Game[] = response.json();
                    return games;
                }
            )
            .subscribe(
                (top: Game[]) => {
                    this.top = top;
                },
                err => console.log(err)
            );
    }

    searchForGames(query: string) {
        this.http.get('https://mixmax-twitch-app.mybluemix.net/twitch/searchforgames/' + query)
            .map(
                (response: Response) => {
                    const games: Game[] = response.json();
                    return games;
                }
            )
            .subscribe(
                (games: Game[]) => {
                    this.games = games;
                },
                err => console.log(err)
            );
    }

    searchForChannels(query: string) {
        this.http.get('https://mixmax-twitch-app.mybluemix.net/twitch/searchforchannels/' + query)
            .map(
                (response: Response) => {
                    const channels: Channel[] = response.json();
                    return channels;
                }
            )
            .subscribe(
                (channels: Channel[]) => {
                    this.channels = channels;
                },
                err => console.log(err)
            );
    }

    searchForStreams(query: string) {
        this.http.get('https://mixmax-twitch-app.mybluemix.net/twitch/searchforstreams/' + query)
            .map(
                (response: Response) => {
                    const streams: Stream[] = response.json();
                    return streams;
                }
            )
            .subscribe(
                (streams: Stream[]) => {
                    this.streams = streams;
                },
                err => console.log(err)
            );
    }
}