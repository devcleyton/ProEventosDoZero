import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './componentes/contatos/contatos.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { EventoDetalheComponent } from './componentes/eventos/evento-detalhe/evento-detalhe.component';
import { EventoEditarComponent } from './componentes/eventos/evento-editar/evento-editar.component';
import { EventoNovoComponent } from './componentes/eventos/evento-novo/evento-novo.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { PalestrantesComponent } from './componentes/palestrantes/palestrantes.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { LoginComponent } from './componentes/user/login/login.component';
import { RegistrationComponent } from './componentes/user/registration/registration.component';

const routes: Routes = [
  {
    path: 'eventos',
    component: EventosComponent,
  },
  {
    path: 'detalhe',
    component: EventoDetalheComponent,
  },
  {
    path: 'detalhe/:id',
    component: EventoDetalheComponent,
  },
  {
    path: 'detalhe/edit/:id',
    component: EventoEditarComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'palestrantes',
    component: PalestrantesComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  },
  {
    path: 'contato',
    component: ContatosComponent,
  },
  {
    path: 'eventos',
    component: EventosComponent,
  },
  {
    path: 'novo',
    component: EventoNovoComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
