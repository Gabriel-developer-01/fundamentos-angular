import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Gabriel';

  adicionar(){
    
  const numero = Math.round(Math.random() * 100)
  this.nome = 'Gabriel' + numero;
  }

  alterarNome(nome: any){
  this.nome = nome.target.value;
}

}
