import { Component } from '@angular/core';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent {
  titulo="Anadir Socio";
  socios:string[] = [];
  socio="";
  click(){
    this.socios.push(this.socio)
  }
}
