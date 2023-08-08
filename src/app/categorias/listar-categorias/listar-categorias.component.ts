import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/CategoriaService';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.scss']
})
export class ListarCategoriasComponent implements OnInit {

  public categorias: Categoria[] = [];
  errorMessage: string = '';

  constructor(private categoriaService: CategoriaService) {  }

  ngOnInit(): void {
    console.log("HUE");
    this.categoriaService.obterTodos()
      .subscribe(
        categorias => this.categorias = categorias,
        error => this.errorMessage = error
      );
    console.log(this.categorias);
    
  }


}
