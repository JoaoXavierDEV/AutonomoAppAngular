import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { BaseService } from 'src/app/base/baseService';
import { Categoria } from '../models/categoria.model';


@Injectable()
export class CategoriaService extends BaseService {
    constructor(private http: HttpClient) { super() }

    obterTodos(): Observable<any[]> {
        return this.http
            .get<any[]>(this.UrlServiceV1 + "Categoria/ObterTodas" /*, super.ObterAuthHeaderJson()*/)
            .pipe(
                catchError(this.serviceError));
    }
    obterTodosCategoriasESubcategorias(): Observable<Categoria[]> {
        return this.http
            .get<Categoria[]>(this.UrlServiceV1 + "Categoria/ObterTodasCategoriasESubCategorias" , super.ObterAuthHeaderJson())
            .pipe(
                catchError(this.serviceError));
    }
}