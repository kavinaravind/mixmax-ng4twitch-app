import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'games', loadChildren: './games/games.module#GamesModule' },
    { path: 'channels', loadChildren: './channels/channels.module#ChannelsModule' },
    { path: 'streams', loadChildren: './streams/streams.module#StreamsModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}