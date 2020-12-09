import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistresComponent } from './components/registres/registres.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListaUsuariosComponent } from './components/administrador/lista-usuarios/lista-usuarios.component';
import { ErrorComponent } from './components/error/error.component';
import { ModelComponent } from './components/model/model.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistresComponent,
    AdministradorComponent,
    HeaderComponent,
    FooterComponent,
    ListaUsuariosComponent,
    ErrorComponent,
    ModelComponent,
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
