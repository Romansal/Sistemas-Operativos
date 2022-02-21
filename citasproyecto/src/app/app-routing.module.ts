import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitasComponent } from './citas/citas.component';
import { GuardardatosComponent } from './guardardatos/guardardatos.component';
import { HomeComponent } from './home/home.component';
import { ImpresiondatosComponent } from './impresiondatos/impresiondatos.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistropacientesComponent } from './registropacientes/registropacientes.component';
import { ServiciosmedicosComponent } from './serviciosmedicos/serviciosmedicos.component';

const routes: Routes = [
{path: '', component:HomeComponent},
{path: 'inicio', component:InicioComponent},
{path: 'serviciosmedicos', component:ServiciosmedicosComponent},
{path: 'registropacientes', component:RegistropacientesComponent},
{path: 'citas', component:CitasComponent},
{path: 'impresiondatos', component:ImpresiondatosComponent},
{path: 'guardardatos', component:GuardardatosComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
