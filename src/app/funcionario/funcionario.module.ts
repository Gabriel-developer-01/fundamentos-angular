import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioService } from './../funcionario/funcionario.service'

@NgModule({

  imports: [
    CommonModule
  ],
  declarations: [
    FuncionarioFormComponent,
    FuncionarioCardComponent
  ],
  exports: [
    FuncionarioFormComponent,
    FuncionarioCardComponent
  ],
  providers: [
    FuncionarioService
  ]
})
export class FuncionarioModule { }
