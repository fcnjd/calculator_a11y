import { Component, HostListener, ViewChild } from '@angular/core';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'calculator_a11y';
	calculatorIsOpen=true;
	commandsReferenceIsOpen=false;
	// Opens the commands reference component as a modal by pressing alt + x
	@HostListener('document:keydown.alt.x', ['$event'])
	openCommandsReferenceModal(event: KeyboardEvent) {
		event.preventDefault();
		this.openCommandsReference();
	}
	openCommandsReference(): void {
		this.commandsReferenceIsOpen = true;
		this.calculatorIsOpen=false;
	}
	// Method to close commands reference again
	closeCommandsReference(): void {
		this.commandsReferenceIsOpen = false;
		this.calculatorIsOpen=true;
	}
	// When method handleCommand is called, it needs to be passed over to the calculator component
	// This is done by using the @ViewChild decorator
	// The calculator component is referenced by the variable calculatorComponent
	// The method handleCommand is then called on the calculator component
	// The command is passed over as a parameter
	// The command is then inserted at the current cursor position
	@ViewChild('calculatorComponent')
	calculatorComponent: any;
	handleCommand(command: string): void {
		this.calculatorComponent.handleCommand(command);
	}
}
