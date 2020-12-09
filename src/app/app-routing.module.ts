import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilsComponent } from './components/perfils/perfils.component';
import { RegistresComponent } from './components/registres/registres.component';
import { ErrorComponent } from './components/error/error.component';
//import { AdministradorComponent } from './components/administrador/administrador.component';


const routes: Routes = [
  { path: 'perfils', component: PerfilsComponent },
  { path: 'registres', component: RegistresComponent },
  //{ path: 'administrador', component: AdministradorComponent },
  { path: 'error', component: ErrorComponent }, //pagina error
  { path: '**' , redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
