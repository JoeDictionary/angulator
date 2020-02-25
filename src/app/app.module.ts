import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MathEditorComponent } from './math-editor/math-editor.component';
import { ToggleSwitchComponent } from './toggle-switch/toggle-switch.component';
import { ButtonPadComponent } from './button-pad/button-pad.component';
import { ButtonComponent } from './button/button.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    MathEditorComponent,
    ToggleSwitchComponent,
    ButtonPadComponent,
    ButtonComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
