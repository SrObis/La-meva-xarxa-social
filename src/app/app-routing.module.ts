import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistresComponent } from './components/registres/registres.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: 'registres', component: RegistresComponent },
  { path: 'error', component: ErrorComponent }, //pagina error
  { path: '**' , redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
