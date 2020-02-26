import { numPad, button, actionButton } from './../calculator/buttons';
import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'button-pad',
  templateUrl: './button-pad.component.html',
  styleUrls: ['./button-pad.component.scss']
})
export class ButtonPadComponent implements OnInit {

  @Input() public buttonData: button[];


  constructor() {}

  ngOnInit(): void {

  }

}
