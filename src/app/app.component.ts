import {
	Component,
	ViewChild,
	ElementRef,
	HostListener,
	AfterViewInit,
} from '@angular/core';
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
	// At first, the commands reference is closed, until the user opens it by pressing alt + x
	commandsReferenceIsOpen = false;
	title = 'calculator_a11y';
	calculation = '';
	result = 'Bitte zuerst Rechnung eingeben und mit Enter bestätigen';
	@ViewChild('resultInput')
	resultElement: ElementRef;
	@ViewChild('calculationInput')
	calculationElement: ElementRef;
	calculate() {
		this.result = evaluate(this.calculation);
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

	// Opens the commands-reference component as a modal by pressing alt + x
	@HostListener('document:keydown.alt.x', ['$event'])
	focusCommandsReference(event: KeyboardEvent) {
		event.preventDefault();
		this.commandsReferenceIsOpen = true;
	}

	// Method to close commands reference again
	closeCommandsReference(): void {
		this.commandsReferenceIsOpen = false;
	}

	// Selected command is passed from commands reference back to app component, and needs to be inserted at the current cursor position
	handleCommand(command: string): void {
		if (this.calculationElement != null) {
			const cursorPosition = this.calculationElement.nativeElement
				.selectionStart;
			this.calculation =
				this.calculation.slice(0, cursorPosition) +
				command +
				this.calculation.slice(cursorPosition);
			this.calculationElement.nativeElement.focus();
		}
		this.commandsReferenceIsOpen = false;
	}
}
