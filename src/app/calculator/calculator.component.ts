import { buttonEvent } from './buttons.types';
import { basicOperations, numPad } from './buttons';
import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
	selector: 'calculator',
	templateUrl: './calculator.component.html',
	styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, AfterViewInit {

	numPad = numPad;
	basicOperations = basicOperations;

	receiveButtonPadEvent(event: buttonEvent) {
		// console.log(event);
	}
	
	ngAfterViewInit() {
		MathLive.renderMathInElement("calculator");
	}
	
	constructor() {}
	ngOnInit(): void {}

}
