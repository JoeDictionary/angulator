import { buttonEvent } from './../calculator/buttons.types';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ButtonPressService {

  private _ButtonPackageSource = new Subject<buttonEvent>();
  ButtonPackage$ = this._ButtonPackageSource.asObservable();

  sendButtonPackage(btnPackage: buttonEvent) {
    this._ButtonPackageSource.next(btnPackage);
  }


  constructor() { }
}
