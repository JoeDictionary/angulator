export interface buttonEvent {
	insert: string,
	action: action
}
export interface button {
	// selector: string;
	render: string;
	insertionValue: string;
	gridArea: string;
	// actionValue?: string;
	// executeCode(arg: any): any;
}

export interface actionButton {
	render: string;
	action: action;
	gridArea: string;
}

export enum action {
			DEL,
			AC,
			EVAL
}

