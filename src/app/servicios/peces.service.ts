import { Injectable } from '@angular/core';
import {Pez} from '../model/peces';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class PecesService{
    public url: String;
    public listaPeces: Array<Pez>;
    constructor(
        public _MiHttp: HttpClient
    ){
        this.listaPeces = [
            new Pez("Tlacua","Perro","Grande",200),
            new Pez("Cuache","Gato","Mediano",150),
            new Pez("Able","Mapache","Chico",20),
        ];

        this.url = "http://localhost:8084/Peces/rest/";
    }

    getPeces(): Array<Pez>{
        return this.listaPeces;
    }

    getUsuarios(): Observable<any>{
        return this._MiHttp.get(this.url+"peces/getAll");
    }
}