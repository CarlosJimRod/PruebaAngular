import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EscritoresComponent } from './componentes/escritores/escritores.component';
import { LibrosComponent } from './componentes/libros/libros.component';
import { SociosComponent } from './componentes/socios/socios.component';
import { BotonComponent } from './componentes/boton/boton.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    EscritoresComponent,
    LibrosComponent,
    SociosComponent,
    BotonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
