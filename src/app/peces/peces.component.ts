import { Component, OnInit } from '@angular/core';
import { PecesService } from '../servicios/peces.service'
import { Pez } from '../model/peces'

@Component({
  selector: 'app-peces',
  templateUrl: './peces.component.html',
  styleUrls: ['./peces.component.css'],
  providers : [PecesService]
})
export class PecesComponent implements OnInit {
  public lstpeces: Array<Pez>;
  public contador : Number;

  constructor(
    private _PecesSerice: PecesService
  ) {
    this.lstpeces = [];
   }

  ngOnInit(): void {
    //this.lstpeces = this._PecesSerice.getPeces();

    this._PecesSerice.getUsuarios().subscribe(
      result => {
        for(const item of result){
           console.log(item);
          const new_pez = new Pez(item.nombre, item.especie, item.talla, item.precio);
          this.lstpeces.push(new_pez);
        }
        console.log("Lista de peces "+this.lstpeces+" "+result);

      },
      error => {
        console.log(error);
      }
    );
  }

}
