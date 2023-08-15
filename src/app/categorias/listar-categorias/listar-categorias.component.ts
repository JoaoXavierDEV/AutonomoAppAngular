import { Component, OnInit } from '@angular/core';
import { Categoria, SubCategoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/CategoriaService';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.scss']
})
export class ListarCategoriasComponent implements OnInit {

  public categorias: Categoria[] = [];
  errorMessage: string = "";

  constructor(protected categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.obterTodosCategoriasESubcategorias()
      .subscribe({
        next: (value) => { 
          this.categorias = value; 
          console.table(this.categorias); 
        },
        error: (err) => console.warn(err),
      });
  }
}



