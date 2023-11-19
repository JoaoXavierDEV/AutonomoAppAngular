import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './user/perfil/perfil.component';
import { CadastroCategoriaComponent } from './categorias/cadastro-categoria/cadastro-categoria.component';
import { AtualizarCategoriaComponent } from './categorias/atualizar-categoria/atualizar-categoria.component';
import { DeletarCategoriaComponent } from './categorias/deletar-categoria/deletar-categoria.component';
import { ListarCategoriasComponent } from './categorias/listar-categorias/listar-categorias.component';
import { CadastrarServicoComponent } from './servicos/cadastrar-servico/cadastrar-servico.component';
import { AtualizarServicoComponent } from './servicos/atualizar-servico/atualizar-servico.component';
import { DeletarServicoComponent } from './servicos/deletar-servico/deletar-servico.component';
import { ExibirServicoComponent } from './servicos/exibir-servico/exibir-servico.component';
import { ListarServicosComponent } from './servicos/listar-servicos/listar-servicos.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [

  // home ou dashboard
  { path: '', component: HomeComponent},

  // login
  { path: 'entrar', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },

  // categorias
  { path: 'CadastrarCategoria', component: CadastroCategoriaComponent },
  { path: 'AtualizarCategoria', component: AtualizarCategoriaComponent },
  { path: 'DeletarCategoria', component: DeletarCategoriaComponent },
  { path: 'ListarCategorias', component: ListarCategoriasComponent },
  
  // servicos
  { path: 'CadastrarServico', component: CadastrarServicoComponent },
  { path: 'AtualizarServico', component: AtualizarServicoComponent },
  { path: 'DeletarServico', component: DeletarServicoComponent },
  { path: 'ListarServicos', component: ListarServicosComponent },
  { path: 'ExibirServico', component: ExibirServicoComponent },

 //{ path: '', redirectTo: 'perfil', pathMatch: 'full' } //limpa a barra de endereco e rediceciona pra home // falta testar
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
