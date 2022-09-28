import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TarjetaCredito } from '../models/tarjetaCredito';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TarjetaService {
  myAppUrl='https://localhost:7223/';
  myApiUrl='api/v1/TarjetaCredito/';
  list?: TarjetaCredito[];
private actualizarFormulario = new BehaviorSubject<TarjetaCredito>({} as any)


  constructor(private http : HttpClient) { }
  eliminarTarjeta(id: number) : Observable<TarjetaCredito>{
    return this.http.delete<TarjetaCredito>(this.myAppUrl + this.myApiUrl + id)
  }
    guardarTarjeta(tarjeta: TarjetaCredito) : Observable<TarjetaCredito>{
      return this.http.post<TarjetaCredito>(this.myAppUrl + this.myApiUrl, tarjeta);
    }
    obtenerTarjetas(){
      this.http.get(this.myAppUrl + this.myApiUrl).toPromise().then(
        data =>{
          this.list = data as TarjetaCredito[];
        }
      )
    }
    actualizarTarjeta(id: number, tarjeta: TarjetaCredito): Observable<TarjetaCredito>{
      return this.http.put(this.myAppUrl + this.myApiUrl + id, tarjeta);
    }
    actualizar(tarjeta){
      this.actualizarFormulario.next(tarjeta);
    }
    obtenerTarjeta$(): Observable<TarjetaCredito> {
      return this.actualizarFormulario.asObservable();
    }
 
}
