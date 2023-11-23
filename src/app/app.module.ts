import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EscritoresComponent } from './componentes/escritores/escritores.component';
import { LibrosComponent } from './componentes/libros/libros.component';
import { SociosComponent } from './componentes/socios/socios.component';
import { BotonComponent } from './componenetes/boton/boton.component';

@NgModule({
  declarations: [
    AppComponent,
    EscritoresComponent,
    LibrosComponent,
    SociosComponent,
    BotonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
