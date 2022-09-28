import { Component, OnInit } from '@angular/core';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-lista-tarjeta-credito',
  templateUrl: './lista-tarjeta-credito.component.html',
  styleUrls: ['./lista-tarjeta-credito.component.css']
})
export class ListaTarjetaCreditoComponent implements OnInit {

  constructor( public tarjetaService: TarjetaService) { }

  ngOnInit(): void {
    this.tarjetaService.obtenerTarjetas();
  }
  eliminarTarjeta(id : number){
    if(confirm('¿Está seguro de eliminar el registro?')){
      this.tarjetaService.eliminarTarjeta(id).subscribe( data =>{
        alert("La tarjeta ha sido eliminada");
        this.tarjetaService.obtenerTarjetas();
      })
    }
  }
  editar(tarjeta){
    this.tarjetaService.actualizar(tarjeta);
  }

}
