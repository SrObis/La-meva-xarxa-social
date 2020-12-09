import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistresComponent } from './components/registres/registres.component';
import { ErrorComponent } from './components/error/error.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ModelComponent } from './components/model/model.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'registres'},  //Pagina principal
  { path: 'registres', component: RegistresComponent }, //Registres
  { path: 'model', component: ModelComponent }, //Model
  { path: 'administrador', component: AdministradorComponent }, //Administrador
  { path: 'error', component: ErrorComponent }, //Pagina error
  { path: '**' , redirectTo: '/error'}  //Pagina redireccionar error

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
