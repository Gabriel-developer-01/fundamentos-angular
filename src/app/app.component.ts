import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id = 0;
  nome = 'Gabriel';
  adicionado = false;
  funcionarios = [];

  adicionar(){
    console.log(`Adicionando ${this.nome}`)
   this.adicionado = true;

   this.funcionarios.push({
    id: ++this.id,
    nome:  this.nome
   });
  }

}
