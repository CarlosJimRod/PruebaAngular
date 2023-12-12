import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  tituloBoton="Anadir libro";
  titulos: string[] = [];
  titulo = "";
  click(){
    this.titulos.push(this.titulo)
  }
}
