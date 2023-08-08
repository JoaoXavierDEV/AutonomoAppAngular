import { Component } from '@angular/core';
import { UserService } from '../userService';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  saudacao: string = '';

  constructor(private userService: UserService) { }

  userLogado(): boolean {
    var user = this.userService.obterUsuario();
    if (user) {
      this.saudacao = "Olá " + user.email;
      return true;
    }

    return false;
  }
}
