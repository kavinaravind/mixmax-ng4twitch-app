import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StreamsComponent } from "./streams.component";

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: StreamsComponent}])
    ],
    exports: [RouterModule]
})
export class StreamsRoutingModule {}