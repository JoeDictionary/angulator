import { numPad, button, actionButton, action, basicOperations } from './buttons';
import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, AfterViewInit {

  numPad = numPad;
  basicOperations = basicOperations;

  constructor() { }

  ngAfterViewInit() {
    MathLive.renderMathInElement("keyboard");
  }

  ngOnInit(): void {
  }

}
