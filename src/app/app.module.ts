import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { A11yModule } from '@angular/cdk/a11y';

import { AppComponent } from './app.component';
import { CommandsReferenceComponent } from './commands-reference/commands-reference.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CommandsReferenceComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    A11yModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
