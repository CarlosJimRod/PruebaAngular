import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent {

  @Output() clicEnBoton : EventEmitter<any> = new EventEmitter()

  onClic(){
    this.clicEnBoton.emit()
  }

}
