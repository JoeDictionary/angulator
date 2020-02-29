import { ButtonPressService } from './../math-editor/button-press.service';
import { buttonEvent } from './../calculator/buttons.types';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
	selector: 'button-pad',
	templateUrl: './button-pad.component.html',
	styleUrls: ['./button-pad.component.scss']
})
export class ButtonPadComponent implements OnInit {

	@Input() public buttonData: any;
	// @Output() buttonPadEvent = new EventEmitter();

	buttonPress(btnPackage: buttonEvent) {
		// this.buttonPadEvent.emit(event)
		this._ButtonPressService.sendButtonPackage(btnPackage);
	}

	constructor(private _ButtonPressService: ButtonPressService) {}

	ngOnInit(): void {
		
	}

}
