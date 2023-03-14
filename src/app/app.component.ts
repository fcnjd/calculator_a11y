import { Component, ElementRef, ViewChild } from '@angular/core';
import { evaluate } from 'mathjs';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator_a11y';
  constructor(private focusMonitor: FocusMonitor) {
  }
  rechnung = '';
  ergebnis = 'Hier kommt das Ergebnis rein';
  @ViewChild(ElementRef, { static: false })
  resultInputRef: ElementRef;
  /*@ViewChild('resultInput', { static: false }) set content(content: ElementRef) {
    this.resultInput = content;
  }*/
  berechnen() {
    console.log('berechnen');
    this.ergebnis = evaluate(this.rechnung);
    //this.focusMonitor.focusVia(this.resultInputRef, 'program');
    //this.resultInputRef.nativeElement.focus();
    //setTimeout(() => this.resultInputRef.nativeElement.focus(), 0);
    //document.getElementById('resultInput').focus();
    var element = document.getElementById('ergebnis');
    if (element != null) {
      console.log('focus');
      element.focus();
    }
  }
}
