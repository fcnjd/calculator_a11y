import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-command-index',
	standalone: true,
	templateUrl: './command-index.component.html',
	styleUrls: ['./command-index.component.scss'],
	imports: [FormsModule],
})
export class CommandIndexComponent {
	@Input() commandIndexIsOpen: boolean = false;
	@Output() close = new EventEmitter<void>();
	@Output() commandSelected = new EventEmitter<string>();
	// The commands are stored in a map, where the key is the description and the value is the command
	// This way, the commands can be displayed in the UI in a human readable way, while the actual command is passed over to the calculator component
	commands = new Map<string, string>([
		['Addition', '+'],
		['Subtraktion', '-'],
		['Multiplikation', '*'],
		['Division', '/'],
		['Potenzieren', '^'],
		['Wurzelziehen', 'sqrt()'],
		['Klammern', '()'],
		['Kommazahlen', '.'],
		['Prozentrechnung', '%'],
		['Fakultät', '!'],
		['Logarithmus', 'log()'],
		['Sinus', 'sin()'],
		['Cosinus', 'cos()'],
		['Tangens', 'tan()'],
		['Exponentialfunktion', 'exp()'],
	]);
	//commands:string[] = ['Addition', 'Subtraktion', 'Multiplikation', 'Division', 'Potenzieren', 'Wurzelziehen', 'Klammern', 'Kommazahlen', 'Vorzeichen', 'Prozentrechnung', 'Fakultät', 'Logarithmus', 'Sinus', 'Cosinus', 'Tangens', 'Exponentialfunktion', 'Pi', 'Eulersche Zahl', 'Konstanten', 'Variablen', 'Funktionen', 'Speicherfunktionen', 'Verlaufsfunktionen', 'Verlauf löschen', 'Verlauf speichern', 'Verlauf anzeigen', 'Verlauf ausblenden', 'Verlauf löschen', 'Verlauf speichern', 'Verlauf anzeigen', 'Verlauf ausblenden', 'Verlauf löschen', 'Verlauf speichern', 'Verlauf anzeigen', 'Verlauf ausblenden', 'Verlauf löschen', 'Verlauf speichern', 'Verlauf anzeigen', 'Verlauf ausblenden', 'Verlauf löschen', 'Verlauf speichern', 'Verlauf anzeigen', 'Verlauf ausblenden', 'Verlauf löschen', 'Verlauf speichern', 'Verlauf anzeigen', 'Verlauf ausblenden', 'Verlauf löschen', 'Verlauf speichern', 'Verlauf anzeigen', 'Verlauf ausblenden', 'Verlauf löschen', 'Verlauf speichern', 'Verlauf anzeigen', 'Verlauf ausblenden'];
	selectedCommand = '';
	onCommandSelected(command: string) {
		this.selectedCommand = command;
		this.commandSelected.emit(this.commands.get(command));
	}
	// Modal can be closed by pressing escape
	@HostListener('document:keydown.escape', ['$event'])
	closeCommandIndexModal(event: KeyboardEvent) {
		event.preventDefault();
		this.closeCommandIndex();
	}
	closeCommandIndex(): void {
		this.commandIndexIsOpen = false;
		this.close.emit();
	}
}
