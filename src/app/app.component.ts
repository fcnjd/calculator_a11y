import { Component, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { CommandIndexComponent } from './command-index/command-index.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet,
			CommonModule,
			CalculatorComponent,
			CommandIndexComponent]
		,
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'calculator_a11y';
	calculatorIsOpen = true;
	commandIndexIsOpen = false;
	// Opens the command index component as a modal by pressing alt + x
	@HostListener('document:keydown.alt.x', ['$event'])
	openCommandIndexModal(event: KeyboardEvent) {
		event.preventDefault();
		this.openCommandIndex();
	}
	openCommandIndex(): void {
		this.commandIndexIsOpen = true;
		this.calculatorIsOpen = false;
	}
	// Method to close command index again
	closeCommandIndex(): void {
		this.commandIndexIsOpen = false;
		this.calculatorIsOpen = true;
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
