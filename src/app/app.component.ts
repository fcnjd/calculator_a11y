import { Component } from '@angular/core';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator_a11y';
  rechnung='';
  ergebnis='Hier kommt das Ergebnis rein';
  berechnen() {
    this.ergebnis=evaluate(this.rechnung);
  }
}
