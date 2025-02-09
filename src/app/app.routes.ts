import { Routes } from '@angular/router';
import { BraceletGeneratorComponent } from './bracelet-generator/bracelet-generator.component';
import { BraceletSelectorComponent } from './bracelet-selector/bracelet-selector.component';

export const routes: Routes = [
    {
        path: 'bracelet-generator',
        component: BraceletGeneratorComponent,
    },
    {
        path: 'bracelet-selector',
        component: BraceletSelectorComponent,
    },
    {
        path: '',
        redirectTo: '/bracelet-selector',
        pathMatch: 'full',
    }
];
