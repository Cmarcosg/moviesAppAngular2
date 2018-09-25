import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { FilmListComponent } from '../film-list/film-list.component';
import { FilmDetailsComponent } from '../film-details/film-details.component';
import { SeriesListComponent } from '../series-list/series-list.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { HomeComponent } from '../home/home.component';
import { SerieDetailsComponent } from '../serie-details/serie-details.component';
const routes: Routes = [ {
        path: 'Home',
        component: HomeComponent,
    }, {
        path: 'FilmList',
        component: FilmListComponent,
    }, {
        path: 'films/:id',
        component: FilmDetailsComponent,
    },
    {
        path: 'SeriesList',
        component: SeriesListComponent,
    }, {
        path: 'series/:id',
        component: SerieDetailsComponent,
    }, {
        path: 'AboutUs',
        component: AboutUsComponent,
    },
    { path: '**', component: NotFoundComponent },
];

@NgModule( {
    imports: [
        CommonModule,
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ],
    declarations: []
} )
export class AppRoutingModule {}
