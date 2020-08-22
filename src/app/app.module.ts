import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampoColoridoDirective } from './campo-colorido.directive';

import { LogService } from './log.service';
import { FuncionarioModule } from './funcionario/funcionario.module';




@NgModule({
  declarations: [
    AppComponent,
    CampoColoridoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FuncionarioModule
  ],
  providers: [
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
