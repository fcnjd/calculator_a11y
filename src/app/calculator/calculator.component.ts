import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { evaluate } from 'mathjs';
import { PlotComponent } from '../plot/plot.component';

@Component({
	selector: 'app-calculator',
	standalone: true,
	templateUrl: './calculator.component.html',
	styleUrls: ['./calculator.component.scss'],
	imports: [FormsModule, CommonModule, PlotComponent],
})
export class CalculatorComponent implements AfterViewInit {

	public showPlotComponent = false;

	// When initialized, focus the calculation input field
	ngAfterViewInit() {
		if (this.calculationElement != null) {
			this.calculationElement.nativeElement.focus();
		}
	}
	title = 'powercalc';
	calculation = '';
	result = 'Bitte zuerst Rechnung eingeben und mit Enter bestätigen';
	@ViewChild('resultInput')
	resultElement!: ElementRef;
	@ViewChild('calculationInput')
	calculationElement!: ElementRef;
	calculate() {
		try {
			this.result = evaluate(this.calculation);
		} catch (error) {
			this.result = 'Fehler: ' + error;
		}
		if (this.resultElement != null) {
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

	// Selected command is passed from command index back to app component, and needs to be inserted at the current cursor position
	handleCommand(command: string): void {
		if (this.calculationElement != null) {
			const cursorPosition =
				this.calculationElement.nativeElement.selectionStart;
			this.calculation =
				this.calculation.slice(0, cursorPosition) +
				command +
				this.calculation.slice(cursorPosition);
			this.calculationElement.nativeElement.focus();
		}
	}

	clear() {
		this.calculation = '';
		if (this.calculationElement != null) {
			this.calculationElement.nativeElement.focus();
		}
	}

	showPlot() {
		this.showPlotComponent = true;
	}

	@HostListener('window:keydown', ['$event'])
	handleKeyDown(event: KeyboardEvent) {
		if (event.ctrlKey && event.key === 'p') {
			//event.preventDefault(); // Verhindert das Standard-Druck-Dialogfenster
			this.showPlot();
		}
	}
}
