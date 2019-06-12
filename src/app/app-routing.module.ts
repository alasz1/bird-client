import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from  './main/main.component'
import { AddsightingComponent } from './addsighting/addsighting.component'
import { EditsightingComponent} from './editsighting/editsighting.component'

const routes: Routes = [
//   {
//   path: '',
//   redirectTo: '/main',
//   pathMatch: 'full' 
// },
{
  path: '',
  component: MainComponent
},
{
  path: 'addsighting',
  component: AddsightingComponent
},
{
  path: 'editsighting/:id',
  component: EditsightingComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
