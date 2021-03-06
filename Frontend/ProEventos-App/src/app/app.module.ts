import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalestrantesComponent } from './componentes/palestrantes/palestrantes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { EventoService } from './services/evento.service';
import { DateFormatPipe } from './helpers/DateFormat.pipe';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SlidesComponent } from './slides/slides.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ContatosComponent } from './componentes/contatos/contatos.component';
import { TituloComponent } from './shared/titulo/titulo.component';
import { EventoDetalheComponent } from './componentes/eventos/evento-detalhe/evento-detalhe.component';
import { EventoEditarComponent } from './componentes/eventos/evento-editar/evento-editar.component';
import { EventoNovoComponent } from './componentes/eventos/evento-novo/evento-novo.component';
import { UserComponent } from './componentes/user/user.component';
import { RegistrationComponent } from './componentes/user/registration/registration.component';
import { LoginComponent } from './componentes/user/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    EventoDetalheComponent,
    EventoEditarComponent,
    EventoNovoComponent,
    PalestrantesComponent,
    PerfilComponent,
    DashboardComponent,
    ContatosComponent,
    NavComponent,
    TituloComponent,
    DateFormatPipe,
    SlidesComponent,
    LoginComponent,
    UserComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    NgxSpinnerModule,
  ],
  providers: [EventoService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
