import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GamesComponent } from './games.component';
import { GamesRoutingModule } from "./games-routing.module";

@NgModule({
    declarations: [GamesComponent],
    imports: [CommonModule, GamesRoutingModule, FormsModule]
})
export class GamesModule { }