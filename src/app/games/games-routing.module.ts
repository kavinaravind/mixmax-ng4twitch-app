import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GamesComponent } from "./games.component";

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: GamesComponent}])
    ],
    exports: [RouterModule]
})
export class GamesRoutingModule {}