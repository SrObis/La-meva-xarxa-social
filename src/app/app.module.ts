import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistresComponent } from './components/registres/registres.component';
import { ListaUsuarisComponent } from './components/lista-usuaris/lista-usuaris.component';
import { DetallUsuarisComponent } from './components/detall-usuaris/detall-usuaris.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    RegistresComponent,
    ListaUsuarisComponent,
    DetallUsuarisComponent,
    AdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
