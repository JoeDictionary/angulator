import { buttonEvent, action } from "./../calculator/buttons.types";
import { ButtonPressService } from "./button-press.service";
import { Component, AfterViewInit, OnInit } from "@angular/core";
import { Parser, Grammar } from "nearley";
import grammar from "./grammar/grammar.js";

@Component({
  selector: "math-editor",
  template: `
    <div class="sunken" id="mathfield"></div>
    <!-- <div id="latex"></div>
    <div id="results"></div> -->
  `,
  styleUrls: ["./math-editor.component.scss"]
})
export class MathEditorComponent implements OnInit, AfterViewInit {
	editor: any;
	

  executeButtonPackage(btnPackage: buttonEvent) {
    console.log(btnPackage);
    if (btnPackage.insert) {
      this.editor.$insert(btnPackage.insert, {
        insertionMode: "insertAfter",
        selectionMode: "placeholder",
        format: "",
        focus: true,
        smartFence: true
      });
    }

    if (btnPackage.action) {
      switch (action[btnPackage.action]) {
        case action[action.DEL]:
					console.log("DEL");
					this.editor.$perform("deletePreviousChar");
          break;

        case action[action.EVAL]:
          console.log("EVAL");
          break;

        case action[action.AC]:
					console.log("AC");
					this.editor.$perform("deleteAll");
          break;

        default:
          console.log("None of the above");
          break;
      }
    }
  }

  nearleyParse(parseString: string) {
    const parser = new Parser(Grammar.fromCompiled(grammar));
    try {
      return parser.feed(parseString).results[0];
    } catch (error) {
      return `Invalid input: ${parseString}`;
    }
  }

  ngAfterViewInit(): void {
    this.editor = MathLive.makeMathField("mathfield", {
      virtualKeyboardMode: "manual",
      virtualKeyboardTheme: "material",

      onContentDidChange: mathfield => {
        const normalizedText = mathfield.$latex();

        console.group("Parse Debug");

        console.log({ normalizedText });
        console.log(
          `(parsedNormalizedText) ${this.nearleyParse(normalizedText)}`
        );

        console.groupEnd();

        /* document.getElementById("latex").innerHTML = normalizedText;
        document.getElementById("results").innerHTML = this.nearleyParse(
          normalizedText
        ); */
      }
    });

    // this.editorContent  = this.editor.$latex();
  }

  constructor(private _ButtonPressService: ButtonPressService) {}

  ngOnInit(): void {
    this._ButtonPressService.ButtonPackage$.subscribe(btnPackage => {
      this.executeButtonPackage(btnPackage);
    });
  }
}
