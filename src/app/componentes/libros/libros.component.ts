import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {

}
let titulos=new Array()

addEventListener("DOMContentLoaded", function (){
  // @ts-ignore
  document.getElementById("anadir1").addEventListener("click", function () {

    // @ts-ignore
    document.getElementById("resTitulo").textContent = document.getElementById("titulo").value

    // @ts-ignore
    titulos.push(document.getElementById("titulo").value)
  })
})
