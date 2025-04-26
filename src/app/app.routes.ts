import { HttpClientJsonpModule } from '@angular/common/http';
import { Host } from '@angular/core';
import { Routes } from '@angular/router';
import { AllComponent } from './pages/all/all.component';
import { MoviesComponent } from './pages/movies/movies.component';
import path from 'path';
import { PeopleComponent } from './pages/people/people.component';
import { TvComponent } from './pages/tv/tv.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
    {path: '', redirectTo: '/all', pathMatch: 'full'},
    {path: 'all', component: AllComponent},
    {path: 'movies', component:MoviesComponent},
    {path: 'people', component: PeopleComponent},
    {path: 'tv', component: TvComponent},
    {path: 'details/:type/:id', component: DetailsComponent},
    {path: '**', redirectTo: '/all', pathMatch: 'full'}


];
