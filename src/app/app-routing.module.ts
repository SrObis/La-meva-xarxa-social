import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilsComponent } from './components/perfils/perfils.component';
import { RegistresComponent } from './components/registres/registres.component';
import { ErrorComponent } from './components/error/error.component';
import { AdministradorComponent } from './components/administrador/administrador.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'registres'},  //Pagina principal
  { path: 'perfils', component: PerfilsComponent }, //Perfil d'usuaris
  { path: 'registres', component: RegistresComponent }, //Registres
  { path: 'administrador', component: AdministradorComponent }, //Administrador
  { path: 'error', component: ErrorComponent }, //Pagina error
  { path: '**' , redirectTo: '/error'}  //Pagina redireccionar error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
