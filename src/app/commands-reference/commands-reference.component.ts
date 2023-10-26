import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-commands-reference',
	templateUrl: './commands-reference.component.html',
	styleUrls: ['./commands-reference.component.scss'],
})
export class CommandsReferenceComponent {
	@Input() commandsReferenceIsOpen:boolean;
	@Output() close = new EventEmitter<void>();
	@Output() commandSelected = new EventEmitter<string>();
	commands:string[] = ['Addition', 'Subtraktion', 'Multiplikation', 'Division', 'Potenzieren', 'Wurzelziehen', 'Klammern', 'Kommazahlen', 'Vorzeichen', 'Prozentrechnung', 'Fakultät', 'Logarithmus', 'Sinus', 'Cosinus', 'Tangens', 'Exponentialfunktion', 'Pi', 'Eulersche Zahl', 'Konstanten', 'Variablen', 'Funktionen', 'Speicherfunktionen', 'Verlaufsfunktionen', 'Verlauf löschen', 'Verlauf speichern', 'Verlauf anzeigen', 'Verlauf ausblenden', 'Verlauf löschen', 'Verlauf speichern', 'Verlauf anzeigen', 'Verlauf ausblenden', 'Verlauf löschen', 'Verlauf speichern', 'Verlauf anzeigen', 'Verlauf ausblenden', 'Verlauf löschen', 'Verlauf speichern', 'Verlauf anzeigen', 'Verlauf ausblenden', 'Verlauf löschen', 'Verlauf speichern', 'Verlauf anzeigen', 'Verlauf ausblenden', 'Verlauf löschen', 'Verlauf speichern', 'Verlauf anzeigen', 'Verlauf ausblenden', 'Verlauf löschen', 'Verlauf speichern', 'Verlauf anzeigen', 'Verlauf ausblenden', 'Verlauf löschen', 'Verlauf speichern', 'Verlauf anzeigen', 'Verlauf ausblenden'];
	selectedCommand:string;
	onCommandSelected(command:string) {
		this.selectedCommand = command;
		this.commandSelected.emit(command);
	}
	closeCommandsReference(): void {
		this.commandsReferenceIsOpen = false;
		this.close.emit();
	}
}
