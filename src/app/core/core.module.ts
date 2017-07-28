import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";

import { NgModule } from "@angular/core";

import { AppRoutingModule } from "../../app/app-routing.module";

import { TwitchService } from "../services/twitch.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        AppRoutingModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        TwitchService
    ]
})
export class CoreModule {} 