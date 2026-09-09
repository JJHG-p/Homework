import { Routes } from '@angular/router';
import { SongsPage  } from './songs-page/songs-page';
import { BrowserPage } from './browser-page/browser-page';

export const routes: Routes = [
    { path: 'canciones', component: SongsPage },
    { path: 'navegador', component: BrowserPage },
    { path: '', redirectTo: 'canciones', pathMatch: 'full' }
];
