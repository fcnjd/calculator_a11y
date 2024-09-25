import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlotlyModule } from 'angular-plotly.js';
import { evaluate } from 'mathjs';
import Plotly from 'plotly.js-dist-min';


@Component({
	selector: 'app-plot',
	standalone: true,
	imports: [
		PlotlyModule,
		FormsModule,
		CommonModule
	],
	templateUrl: './plot.component.html',
	styleUrl: './plot.component.scss'
})
export class PlotComponent {
	public functionInput: string = '';
	public errorMessage: string = '';
	public graph: { data: any[], layout: any } = {
		data: [],
		layout: {
			title: this.functionInput,
			font: {
				size: 32,
				family: 'Braille DE Computer'
			}
		}
	};

	@ViewChild('plot', {static: false}) plot!: ElementRef;

	plotFunction() {
		try {
			this.errorMessage = '';
			const xValues = Array.from({ length: 100 }, (_, i) => i / 10);
			const yValues = xValues.map(x => evaluate(this.functionInput));
			this.graph.data = [{
				x: xValues,
				y: yValues,
				type: 'scatter',
				mode: 'lines+points',
				name: this.functionInput,
				marker: { color: 'red' }
			}];
		} catch (error) {
			this.errorMessage = (error as Error).message;
		}
	}

	// download the plot as a png image
	downloadImage() {
		const graphDiv = this.plot.nativeElement;
		Plotly.downloadImage(graphDiv, {
			format: 'png',
			width: 800,
			height: 600,
			filename: 'plot'
		})
	}
}

