import { numPad, button, actionButton } from './../calculator/buttons';
import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'button-pad',
  templateUrl: './button-pad.component.html',
  styleUrls: ['./button-pad.component.scss']
})
export class ButtonPadComponent implements OnInit {

  @Input() public buttonData: any;

  testStyle = "grid-template-areas: '_7 _8 _9' '_4 _5 _6' '_1 _2 _3' '_0 _point _times10'"
  constructor() {}

  ngOnInit(): void {

  }

}
