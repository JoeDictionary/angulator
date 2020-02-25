import { numPad, button, actionButton } from './../calculator/buttons';
import { Component, OnInit, AfterViewInit } from '@angular/core';



@Component({
  selector: 'button-pad',
  templateUrl: './button-pad.component.html',
  styleUrls: ['./button-pad.component.scss']
})
export class ButtonPadComponent implements AfterViewInit, OnInit {

  constructor() {}

  buttons = numPad;

  MathRender: any = MathLive;

  ngAfterViewInit(): void {
    MathLive.renderMathInElement("pad");
  }

  ngOnInit(): void {

  }

}
