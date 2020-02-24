import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'button-pad',
  templateUrl: './button-pad.component.html',
  styleUrls: ['./button-pad.component.scss']
})
export class ButtonPadComponent implements AfterViewInit, OnInit {

  constructor() {}

  MathRender: any = MathLive;

  ngAfterViewInit(): void {
    MathLive.renderMathInElement("bottom");
  }

  ngOnInit(): void {
  }

}
