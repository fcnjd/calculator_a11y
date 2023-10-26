import { Component, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { evaluate } from 'mathjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  // When initialized, focus the calculation input field
  ngAfterViewInit() {
    if (this.calculationElement != null) {
      this.calculationElement.nativeElement.focus();
    }
  }
  title = 'calculator_a11y';
  rechnung = '';
  ergebnis = 'Bitte zuerst Rechnung eingeben und mit Enter bestätigen';
  @ViewChild('resultInput')
  resultElement: ElementRef;
  @ViewChild('calculationInput')
  calculationElement: ElementRef;
  berechnen() {
    console.log('berechnen');
    this.ergebnis = evaluate(this.rechnung);
    if (this.resultElement != null) {
      console.log('focus');
      this.resultElement.nativeElement.focus();
    }
  }

  // Makes the calculation input field focusable by pressing alt + e
  @HostListener('document:keydown.alt.e', ['$event'])
  focusCalculationInput(event: KeyboardEvent) {
    event.preventDefault();
    if (this.calculationElement != null) {
      this.calculationElement.nativeElement.focus();
    }
  }

  // Makes the result output field focusable by pressing alt + a
  @HostListener('document:keydown.alt.a', ['$event'])
  focusResultInput(event: KeyboardEvent) {
    event.preventDefault();
    if (this.resultElement != null) {
      this.resultElement.nativeElement.focus();
    }
  }
}
