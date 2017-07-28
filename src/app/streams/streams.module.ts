import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamsComponent } from './streams.component';
import { StreamsRoutingModule } from "./streams-routing.module";
import { FormsModule } from "@angular/forms";
import { ShortenPipe } from "../shared/shorten.pipe";

@NgModule({
    declarations: [StreamsComponent, ShortenPipe],
    imports: [CommonModule, StreamsRoutingModule, FormsModule]
})
export class StreamsModule {}