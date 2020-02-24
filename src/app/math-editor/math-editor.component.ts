import { Component, AfterViewInit } from "@angular/core";
import { Parser, Grammar } from "nearley";
import grammar from "./grammar/grammar.js";
import { CssSelector } from '@angular/compiler';



@Component({
  selector: "math-editor",
  template: `
    <div
    id="mathfield"></div>
    <button (click)="this.editorContent = '\sum ^{\placeholder{} }_{\placeholder{}} \left( \right)'">
      editor insert text
    </button>
    <!-- <div id="latex"></div>
    <div id="results"></div> -->
  `,
  styleUrls: ["./math-editor.component.scss"]
})
export class MathEditorComponent implements AfterViewInit {
  constructor() {}

  editor: any;
  private _editorContent: any;

  get editorContent(): string {
    return this.editor.$latex();
  }

  set editorContent(str: string) {
    console.log(str);
    this.editor.$insert(str, {
      insertionMode: "insertAfter",
      selectionMode: "placeholder",
      format: "",
      focus: true,
      smartFence: true,
    });
  }


  insert(str: string): void {
    this.editor.$insert(str); 
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
}
