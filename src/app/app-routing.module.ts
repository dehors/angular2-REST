import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { SaveComponent } from './save/save.component';
import { CodeFontComponent } from './code-font/code-font.component';

const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: '',  component: HomeComponent },
	{ path: 'list',  component: ListComponent },
	{ path: 'list/:id',  component: DetailComponent },
	{ path: 'new',  component: SaveComponent },
	{ path: 'cf',  component: CodeFontComponent },
	{ path: '**', component: ErrorComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}