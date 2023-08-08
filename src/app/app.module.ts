import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './user/menu/menu.component';
import { LoginComponent } from './user/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user/userService';
import { HomeComponent } from './home/home.component';
import { CadastroCategoriaComponent } from './categorias/cadastro-categoria/cadastro-categoria.component';
import { ListarCategoriasComponent } from './categorias/listar-categorias/listar-categorias.component';
import { AtualizarCategoriaComponent } from './categorias/atualizar-categoria/atualizar-categoria.component';
import { DeletarCategoriaComponent } from './categorias/deletar-categoria/deletar-categoria.component';
import { AtualizarServicoComponent } from './servicos/atualizar-servico/atualizar-servico.component';
import { DeletarServicoComponent } from './servicos/deletar-servico/deletar-servico.component';
import { CadastrarServicoComponent } from './servicos/cadastrar-servico/cadastrar-servico.component';
import { ExibirServicoComponent } from './servicos/exibir-servico/exibir-servico.component';
import { PerfilComponent } from './user/perfil/perfil.component';
import { ListarServicosComponent } from './servicos/listar-servicos/listar-servicos.component';
import { CategoriaService } from './services/CategoriaService';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    CadastroCategoriaComponent,
    ListarCategoriasComponent,
    AtualizarCategoriaComponent,
    DeletarCategoriaComponent,
    AtualizarServicoComponent,
    DeletarServicoComponent,
    CadastrarServicoComponent,
    ExibirServicoComponent,
    PerfilComponent,
    ListarServicosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    CategoriaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
