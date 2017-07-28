import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChannelsComponent } from "./channels.component";

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: ChannelsComponent}])
    ],
    exports: [RouterModule]
})
export class ChannelsRoutingModule {}