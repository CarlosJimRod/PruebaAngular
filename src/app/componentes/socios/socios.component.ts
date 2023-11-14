import { Component } from '@angular/core';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent {

}
let codigos=new Array()

addEventListener("DOMContentLoaded", function (){
  // @ts-ignore
  document.getElementById("anadir2").addEventListener("click", function () {

    // @ts-ignore
    document.getElementById("resCodigo").textContent = document.getElementById("codigo").value
  })
})


