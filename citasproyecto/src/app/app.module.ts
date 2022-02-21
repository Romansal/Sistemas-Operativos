import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';

import { ServiciosmedicosComponent } from './serviciosmedicos/serviciosmedicos.component';
import { RegistropacientesComponent } from './registropacientes/registropacientes.component';
import { CitasComponent } from './citas/citas.component';
import { ImpresiondatosComponent } from './impresiondatos/impresiondatos.component';
import { GuardardatosComponent } from './guardardatos/guardardatos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HomeComponent,
    RegistropacientesComponent,
    ServiciosmedicosComponent,
    CitasComponent,
    ImpresiondatosComponent,
    GuardardatosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
