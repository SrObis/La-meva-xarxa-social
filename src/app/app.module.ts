import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistresComponent } from './components/registres/registres.component';
import { ListaUsuarisComponent } from './components/perfils/lista-usuaris/lista-usuaris.component';
import { DetallUsuarisComponent } from './components/perfils/detall-usuaris/detall-usuaris.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { PerfilsComponent } from './components/perfils/perfils.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListaUsuariosComponent } from './components/administrador/lista-usuarios/lista-usuarios.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistresComponent,
    ListaUsuarisComponent,
    DetallUsuarisComponent,
    AdministradorComponent,
    PerfilsComponent,
    HeaderComponent,
    FooterComponent,
    ListaUsuariosComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
