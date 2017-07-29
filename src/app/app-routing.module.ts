import { MainMenuComponent } from './main-menu/main-menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes:Routes = [
  
    {path:'', component: MainMenuComponent},
    {path:'Solutions', loadChildren:'app/es6-solutions/es6-solutions.module#Es6SolutionsModule'},
    {path:'DataVisualization', loadChildren:'app/data-visualization/data-visualization.module#DataVisualizationModule'},
    {path:'Controls', loadChildren:'app/controls/controls.module#ControlsModule'}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes) ],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {}